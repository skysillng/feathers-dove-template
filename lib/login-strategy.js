"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginStrategy = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const get_1 = __importDefault(require("lodash/get"));
const omit_1 = __importDefault(require("lodash/omit"));
const errors_1 = require("@feathersjs/errors");
const authentication_1 = require("@feathersjs/authentication");
const commons_1 = require("@feathersjs/commons");
const debug = (0, commons_1.createDebug)('@feathersjs/authentication-local/strategy');
class LoginStrategy extends authentication_1.AuthenticationBaseStrategy {
    verifyConfiguration() {
        const config = this.configuration;
        if (typeof config['passwordField'] !== 'string') {
            throw new Error(`'${this.name}' authentication strategy requires a 'passwordField' setting`);
        }
        if (typeof config['emailField'] !== 'string' && typeof config['mobileField'] !== 'string') {
            throw new Error(`'${this.name}' authentication strategy requires either 'emailField' or 'mobileField' setting`);
        }
    }
    get configuration() {
        const authConfig = this.authentication.configuration;
        const config = super.configuration || {};
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
        };
    }
    async getEntityQuery(query, _params) {
        return {
            $limit: 1,
            ...query
        };
    }
    async findEntity(email, mobile, params) {
        const { entityEmailField, entityMobileField, errorMessage } = this.configuration;
        if (!email && !mobile) {
            // don't query for users without any condition set.
            throw new errors_1.NotAuthenticated(errorMessage);
        }
        const query = await this.getEntityQuery({
            ...(email && { [entityEmailField]: email }),
            ...(mobile && { [entityMobileField]: mobile })
        }, params);
        const findParams = Object.assign({}, params, { query });
        const entityService = this.entityService;
        debug('Finding entity with query', params.query);
        const result = await entityService.find(findParams);
        const list = Array.isArray(result) ? result : result.data;
        if (!Array.isArray(list) || list.length === 0) {
            debug('No entity found');
            throw new errors_1.NotAuthenticated(errorMessage);
        }
        const [entity] = list;
        return entity;
    }
    async getEntity(result, params) {
        const entityService = this.entityService;
        const { entityId = entityService.id, entity } = this.configuration;
        if (!entityId || result[entityId] === undefined) {
            throw new errors_1.NotAuthenticated('Could not get local entity');
        }
        if (!params.provider) {
            return result;
        }
        return entityService.get(result[entityId], {
            ...params,
            [entity]: result
        });
    }
    async comparePassword(entity, password, passphrase) {
        const { entityPasswordField, entityPassphraseField, errorMessage } = this.configuration;
        // find password in entity, this allows for dot notation
        const hash = (0, get_1.default)(entity, entityPasswordField) ?? (0, get_1.default)(entity, entityPassphraseField);
        if (!hash) {
            debug(`Record is missing entityPassphraseField '${entityPasswordField}' or '${entityPassphraseField}' field. Either must be provided.`);
            throw new errors_1.NotAuthenticated(errorMessage);
        }
        debug('Verifying password');
        const result = password ? await bcryptjs_1.default.compare(password, hash) : await bcryptjs_1.default.compare(passphrase, hash);
        if (result) {
            return entity;
        }
        throw new errors_1.NotAuthenticated(errorMessage);
    }
    async hashPassword(password, _params) {
        return bcryptjs_1.default.hash(password, this.configuration.hashSize);
    }
    async authenticate(data, params) {
        const { passwordField, passphraseField, emailField, mobileField, entity, errorMessage } = this.configuration;
        const email = (0, get_1.default)(data, emailField);
        const mobile = (0, get_1.default)(data, mobileField);
        const password = (0, get_1.default)(data, passwordField);
        const passphrase = (0, get_1.default)(data, passphraseField);
        if (!password && !passphrase) {
            // exit early if there is no password
            throw new errors_1.NotAuthenticated(errorMessage);
        }
        const result = await this.findEntity(email, mobile, (0, omit_1.default)(params, 'provider'));
        await this.comparePassword(result, password, passphrase);
        return {
            authentication: { strategy: this.name },
            [entity]: await this.getEntity(result, params)
        };
    }
}
exports.LoginStrategy = LoginStrategy;
//# sourceMappingURL=login-strategy.js.map