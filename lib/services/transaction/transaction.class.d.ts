import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Transaction, TransactionData, TransactionInit, TransactionPatch, TransactionQuery, TransactionVerify } from './transaction.schema';
export type { Transaction, TransactionData, TransactionPatch, TransactionQuery };
export interface TransactionParams extends KnexAdapterParams<TransactionQuery> {
}
export declare class TransactionService<ServiceParams extends Params = TransactionParams> extends KnexService<Transaction, TransactionData, TransactionParams, TransactionPatch> {
    private app;
    constructor(app: Application, options: KnexAdapterOptions);
    verify(data: TransactionVerify, _params?: TransactionParams): Promise<Transaction>;
    initPayment(data: TransactionInit, _params?: TransactionParams): Promise<any>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
