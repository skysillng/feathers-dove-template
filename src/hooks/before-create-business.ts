// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { BusinessIncomingData } from '../services/business/business.shared'

export const beforeCreateBusiness = async (context: HookContext) => {
  console.log(`Running hook before create business on ${context.path}.${context.method}`)

  const data: BusinessIncomingData = context.data
  const { firstname, lastname, mobile, email, password, passphrase, ...businessData } = data

  const user = await context.app
    .service('user')
    .create(
      { firstname, lastname, mobile, email, password, passphrase },
      { transaction: context.params.transaction }
    )

  context.data = { ...businessData, userId: user.id }
}
