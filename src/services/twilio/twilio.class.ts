// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'
import { parsePhoneNumber, PhoneNumber } from 'libphonenumber-js'

import type { Application } from '../../declarations'
import type { Twilio, TwilioData, TwilioMessage, TwilioQuery, TwilioVerify } from './twilio.schema'

import * as twilio from 'twilio'

export type { Twilio, TwilioData, TwilioMessage, TwilioVerify, TwilioQuery }

export interface TwilioServiceOptions {
  app: Application
}

export interface TwilioParams extends Params<TwilioQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class TwilioService<ServiceParams extends TwilioParams = TwilioParams>
  implements ServiceInterface<Twilio, TwilioData, ServiceParams>
{
  private accountSid: string = this.options.app.get('twilio')?.accountSID ?? ''
  private authToken: string = this.options.app.get('twilio')?.authToken ?? ''
  private sid: string = this.options.app.get('twilio')?.serviceSID ?? ''

  private client: twilio.Twilio

  constructor(public options: TwilioServiceOptions) {
    this.client = new twilio.Twilio(this.accountSid, this.authToken, {
      logLevel: 'debug'
    })
  }

  async create(data: TwilioData, _params?: ServiceParams): Promise<any> {
    return []
  }

  async message(data: TwilioMessage, params: Params) {
    const mobile: string = parsePhoneNumber(data['mobile'], 'NG').number
    const channel: string = data['channel'] ?? 'whatsapp'
    console.log(data)

    const from = channel !== 'whatsapp' ? '+12569987639' : 'whatsapp:+12569987639'
    const to = channel !== 'whatsapp' ? mobile : 'whatsapp:' + mobile

    console.log('mmmm')
    // Initiate user mobile verification here
    const messageInstance = await this.client.messages.create({
      body: data.message,
      from,
      to
    })
    console.log(messageInstance)

    return { status: messageInstance.body }
  }

  async sendVerification(data: TwilioData, params?: Params): Promise<any> {
    const mobile: string = parsePhoneNumber(data['mobile'], 'NG').number
    const channel: string = data['channel']
    // Initiate user mobile verification here
    const verification = await this.client.verify.v2
      .services(this.sid)
      .verifications.create({ to: mobile, channel: channel })

    console.log(verification)

    return { status: verification.status }
  }

  async verify(data: TwilioVerify, params?: Params): Promise<any> {
    const mobile: string = parsePhoneNumber(data['mobile'], 'NG').number
    const otp: string = data['otp']
    // Initiate user mobile verification here
    const verification = await this.client.verify.v2
      .services(this.sid)
      .verificationChecks.create({ to: mobile, code: otp })

    const status = verification.status

    if (status === 'approved') {
      return {
        status: 'successful'
      }
    }

    return { status }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
