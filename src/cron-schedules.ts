import { ScheduleOptions, schedule } from 'node-cron'

import type { Application } from './declarations'
import { shipdayVerify } from './schedules/shipday-verify'

export const cronSchedules = (app: Application) => {
  // app.configure(shipdayVerify)
}
