import { twilio } from './twilio/twilio'
import { user } from './user/user'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(twilio)
  app.configure(user)
  // All services will be registered here
}
