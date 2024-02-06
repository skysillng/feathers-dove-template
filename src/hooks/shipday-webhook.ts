// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { ShipdayService } from '../services/shipday/shipday.class'

export const shipdayWebhook = async (context: HookContext) => {
  console.log(`Running hook shipday webhook on ${context.path}.${context.method}`)
  const headers = context.params.headers
  if (headers && headers['token']) {
    console.log('Shipday webhook called', context.data)
    context.result = (context.service as ShipdayService).verify(context.data, context.params)
  }
  return
}
