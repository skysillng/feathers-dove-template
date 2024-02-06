/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from 'bcryptjs'
import get from 'lodash/get'
import omit from 'lodash/omit'
import { NotAuthenticated } from '@feathersjs/errors'
import { Query, Params } from '@feathersjs/feathers'
import { AuthenticationRequest, AuthenticationBaseStrategy } from '@feathersjs/authentication'
import { createDebug } from '@feathersjs/commons'

const debug = createDebug('@feathersjs/authentication-local/strategy')

export class LoginStrategy extends AuthenticationBaseStrategy {
  verifyConfiguration() {
    const config = this.configuration

    if (typeof config['passwordField'] !== 'string') {
      throw new Error(`'${this.name}' authentication strategy requires a 'passwordField' setting`)
    }

    if (typeof config['emailField'] !== 'string' && typeof config['mobileField'] !== 'string') {
      throw new Error(
        `'${this.name}' authentication strategy requires either 'emailField' or 'mobileField' setting`
      )
    }
  }

  get configuration() {
    const authConfig = this.authentication!.configuration
    const config = super.configuration || {}

    return {
      hashSize: 10,
      service: authConfig.service,
      entity: authConfig.entity,
      entityId: authConfig.entityId,
      errorMessage: 'Invalid login',
      entityPasswordField: config.passwordField,
      entityEmailField: config.emailField,
      entityMobileField: config.mobileField,
      entityPassphraseField: config.passphraseField,

      ...config
    }
  }

  async getEntityQuery(query: Query, _params: Params) {
    return {
      $limit: 1,
      ...query
    }
  }

  async findEntity(email: string | undefined, mobile: string, params: Params) {
    const { entityEmailField, entityMobileField, errorMessage } = this.configuration
    if (!email && !mobile) {
      // don't query for users without any condition set.
      throw new NotAuthenticated(errorMessage)
    }

    const query = await this.getEntityQuery(
      {
        ...(email && { [entityEmailField]: email }),
        ...(mobile && { [entityMobileField]: mobile })
      },
      params
    )

    const findParams = Object.assign({}, params, { query })
    const entityService = this.entityService

    debug('Finding entity with query', params.query)

    const result = await entityService.find(findParams)
    const list = Array.isArray(result) ? result : result.data

    if (!Array.isArray(list) || list.length === 0) {
      debug('No entity found')

      throw new NotAuthenticated(errorMessage)
    }

    const [entity] = list

    return entity
  }

  async getEntity(result: any, params: Params) {
    const entityService = this.entityService
    const { entityId = (entityService as any).id, entity } = this.configuration

    if (!entityId || result[entityId] === undefined) {
      throw new NotAuthenticated('Could not get local entity')
    }

    if (!params.provider) {
      return result
    }

    return entityService.get(result[entityId], {
      ...params,
      [entity]: result
    })
  }

  async comparePassword(entity: any, password: string, passphrase: string) {
    const { entityPasswordField, entityPassphraseField, errorMessage } = this.configuration
    // find password in entity, this allows for dot notation
    const hash = get(entity, entityPasswordField) ?? get(entity, entityPassphraseField)

    if (!hash) {
      debug(
        `Record is missing entityPassphraseField '${entityPasswordField}' or '${entityPassphraseField}' field. Either must be provided.`
      )

      throw new NotAuthenticated(errorMessage)
    }

    debug('Verifying password')

    const result = password ? await bcrypt.compare(password, hash) : await bcrypt.compare(passphrase, hash)

    if (result) {
      return entity
    }

    throw new NotAuthenticated(errorMessage)
  }

  async hashPassword(password: string, _params: Params) {
    return bcrypt.hash(password, this.configuration.hashSize)
  }

  async authenticate(data: AuthenticationRequest, params: Params) {
    const { passwordField, passphraseField, emailField, mobileField, entity, errorMessage } =
      this.configuration
    const email = get(data, emailField)
    const mobile = get(data, mobileField)

    const password = get(data, passwordField)
    const passphrase = get(data, passphraseField)

    if (!password && !passphrase) {
      // exit early if there is no password
      throw new NotAuthenticated(errorMessage)
    }

    const result = await this.findEntity(email, mobile, omit(params, 'provider'))
    await this.comparePassword(result, password, passphrase)

    return {
      authentication: { strategy: this.name },
      [entity]: await this.getEntity(result, params)
    }
  }
}
