// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext, NextFunction } from '../declarations'

export const test = async (context: HookContext, next: NextFunction) => {
  console.log(`Running hook test on ${context.path}.${context.method}`)
  console.log('before \n ' + JSON.stringify(context.data, null, 2))
  await next()
  console.log('after\n ' + JSON.stringify(context.result, null, 2))
}
