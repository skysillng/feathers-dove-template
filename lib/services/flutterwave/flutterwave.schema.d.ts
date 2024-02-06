import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const flutterwavePaymentLinkSchema: import("@sinclair/typebox").TObject<{
    tx_ref: import("@sinclair/typebox").TString<string>;
    amount: import("@sinclair/typebox").TString<string>;
    currency: import("@sinclair/typebox").TUnsafe<"NGN">;
    redirect_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    customer: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TString<string>;
        phonenumber: import("@sinclair/typebox").TString<string>;
    }>;
    customizations: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString<string>;
        logo: import("@sinclair/typebox").TString<string>;
    }>>;
}>;
export type FlutterwavePaymentLink = Static<typeof flutterwavePaymentLinkSchema>;
export declare const flutterwavePaymentLinkValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const flutterwavePaymentLinkResolver: import("@feathersjs/schema").Resolver<{
    meta?: any;
    redirect_url?: string | undefined;
    customizations?: {
        title: string;
        logo: string;
    } | undefined;
    currency: "NGN";
    amount: string;
    tx_ref: string;
    customer: {
        name: string;
        email: string;
        phonenumber: string;
    };
}, HookContext>;
export declare const flutterwaveVerifySchema: import("@sinclair/typebox").TObject<{
    tx_ref: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
}>;
export type FlutterwaveVerify = Static<typeof flutterwaveVerifySchema>;
export declare const flutterwaveVerifyValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const flutterwaveVerifyResolver: import("@feathersjs/schema").Resolver<{
    status?: "failed" | "pending" | "successful" | undefined;
    tx_ref: string;
}, HookContext>;
export declare const flutterwaveQuerySchema: import("@sinclair/typebox").TObject<{}>;
export type FlutterwaveQuery = Static<typeof flutterwaveQuerySchema>;
export declare const flutterwaveQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const flutterwaveQueryResolver: import("@feathersjs/schema").Resolver<{}, HookContext>;
