// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const allowAnonymous = async (context: HookContext) => {
  console.log(`Running hook allowAnonymous on ${context.path}.${context.method}`)
  const { params } = context

  if (params.provider && !params.authentication) {
    context.params = {
      ...params,
      authentication: {
        strategy: 'anonymous'
      }
    }
  }
}
