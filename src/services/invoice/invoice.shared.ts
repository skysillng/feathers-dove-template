// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery, InvoiceService } from './invoice.class'

export type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery }

export type InvoiceClientService = Pick<InvoiceService<Params<InvoiceQuery>>, (typeof invoiceMethods)[number]>

export const invoicePath = 'invoice'

export const invoiceMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const invoiceClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(invoicePath, connection.service(invoicePath), {
    methods: invoiceMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [invoicePath]: InvoiceClientService
  }
}
