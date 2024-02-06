// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Location, LocationData, LocationPatch, LocationQuery } from './location.schema'

export type { Location, LocationData, LocationPatch, LocationQuery }

export interface LocationParams extends KnexAdapterParams<LocationQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class LocationService<ServiceParams extends Params = LocationParams> extends KnexService<
  Location,
  LocationData,
  LocationParams,
  LocationPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    id: 'id',
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'location'
  }
}
