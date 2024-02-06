// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  InvoiceItem,
  InvoiceItemData,
  InvoiceItemPatch,
  InvoiceItemQuery,
  InvoiceItemService
} from './invoice-item.class'

export type { InvoiceItem, InvoiceItemData, InvoiceItemPatch, InvoiceItemQuery }

export type InvoiceItemClientService = Pick<
  InvoiceItemService<Params<InvoiceItemQuery>>,
  (typeof invoiceItemMethods)[number]
>

export const invoiceItemPath = 'invoice-item'

export const invoiceItemMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const invoiceItemClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(invoiceItemPath, connection.service(invoiceItemPath), {
    methods: invoiceItemMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [invoiceItemPath]: InvoiceItemClientService
  }
}
