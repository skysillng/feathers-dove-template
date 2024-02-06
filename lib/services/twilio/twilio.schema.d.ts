import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const twilioSchema: import("@sinclair/typebox").TObject<{
    mobile: import("@sinclair/typebox").TString<string>;
}>;
export type Twilio = Static<typeof twilioSchema>;
export declare const twilioValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const twilioResolver: import("@feathersjs/schema").Resolver<{
    mobile: string;
}, HookContext>;
export declare const twilioExternalResolver: import("@feathersjs/schema").Resolver<{
    mobile: string;
}, HookContext>;
export declare const twilioDataSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    mobile: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    channel: import("@sinclair/typebox").TString<string>;
}>]>;
export type TwilioData = Static<typeof twilioDataSchema>;
export declare const twilioDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const twilioDataResolver: import("@feathersjs/schema").Resolver<{
    mobile: string;
}, HookContext>;
export declare const twilioMessageSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    mobile: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    channel: import("@sinclair/typebox").TString<string>;
}>]>, import("@sinclair/typebox").TObject<{
    message: import("@sinclair/typebox").TString<string>;
}>]>;
export type TwilioMessage = Static<typeof twilioMessageSchema>;
export declare const twilioMessageValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const twilioMessageResolver: import("@feathersjs/schema").Resolver<{
    mobile: string;
}, HookContext>;
export declare const twilioVerifySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    mobile: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    otp: import("@sinclair/typebox").TString<string>;
}>]>;
export type TwilioVerify = Static<typeof twilioVerifySchema>;
export declare const twilioVerifyValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const twilioVerifyResolver: import("@feathersjs/schema").Resolver<{
    mobile: string;
}, HookContext>;
export declare const twilioQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    mobile: import("@sinclair/typebox").TString<string>;
}>, ["mobile"]>;
export declare const twilioQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<"mobile"[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<string>;
                $gte: import("@sinclair/typebox").TString<string>;
                $lt: import("@sinclair/typebox").TString<string>;
                $lte: import("@sinclair/typebox").TString<string>;
                $ne: import("@sinclair/typebox").TString<string>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type TwilioQuery = Static<typeof twilioQuerySchema>;
export declare const twilioQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const twilioQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        mobile?: number | undefined;
    };
    $select: "mobile"[];
    $and: ({
        mobile?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
    } | {
        $or: {
            mobile?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        mobile?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
    }[];
}> & {
    mobile?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
} & {}, HookContext>;
