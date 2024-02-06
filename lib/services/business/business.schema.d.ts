import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const businessSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    size: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
}>;
export type Business = Static<typeof businessSchema>;
export declare const businessValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const businessResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
    size: "0-99" | "100+";
    userId: string;
}, HookContext>;
export declare const businessExternalResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
    size: "0-99" | "100+";
    userId: string;
}, HookContext>;
export declare const businessDataSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    size: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
}>, ["id"]>;
export type BusinessData = Static<typeof businessDataSchema>;
export declare const businessDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const businessDataResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
    size: "0-99" | "100+";
    userId: string;
}, HookContext>;
export declare const businessIncomingDataSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    size: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
}>, ["id", "userId"]>, import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TString<string>;
    lastname: import("@sinclair/typebox").TString<string>;
    mobile: import("@sinclair/typebox").TString<string>;
    mobileVerifiedAt: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TString<string>;
    emailVerifiedAt: import("@sinclair/typebox").TString<string>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    passphrase: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, ["id", "mobileVerifiedAt", "emailVerifiedAt"]>]>;
export type BusinessIncomingData = Static<typeof businessIncomingDataSchema>;
export declare const businessIncomingDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const businessPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    size: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
}>>;
export type BusinessPatch = Static<typeof businessPatchSchema>;
export declare const businessPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const businessPatchResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
    size: "0-99" | "100+";
    userId: string;
}, HookContext>;
export declare const businessQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    size: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
}>, []>;
export declare const businessQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "name" | "size" | "userId")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"0-99" | "100+">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $gte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $lt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $lte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $ne: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"0-99" | "100+">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
                $gte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
                $lt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
                $lte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
                $ne: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"0-99" | "100+">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $gte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $lt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $lte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $ne: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"0-99" | "100+">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
        $gte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
        $lt: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
        $lte: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
        $ne: import("@sinclair/typebox").TUnsafe<"0-99" | "100+">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"0-99" | "100+">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
export type BusinessQuery = Static<typeof businessQuerySchema>;
export declare const businessQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const businessQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        name?: number | undefined;
        size?: number | undefined;
        userId?: number | undefined;
    };
    $select: ("id" | "name" | "size" | "userId")[];
    $and: ({
        id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        name?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        size?: "0-99" | "100+" | Partial<{
            $gt: "0-99" | "100+";
            $gte: "0-99" | "100+";
            $lt: "0-99" | "100+";
            $lte: "0-99" | "100+";
            $ne: "0-99" | "100+";
            $in: ("0-99" | "100+")[];
            $nin: ("0-99" | "100+")[];
        } & {}> | undefined;
        userId?: string | Partial<{
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
            id?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            name?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            size?: "0-99" | "100+" | Partial<{
                $gt: "0-99" | "100+";
                $gte: "0-99" | "100+";
                $lt: "0-99" | "100+";
                $lte: "0-99" | "100+";
                $ne: "0-99" | "100+";
                $in: ("0-99" | "100+")[];
                $nin: ("0-99" | "100+")[];
            } & {}> | undefined;
            userId?: string | Partial<{
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
        id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        name?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        size?: "0-99" | "100+" | Partial<{
            $gt: "0-99" | "100+";
            $gte: "0-99" | "100+";
            $lt: "0-99" | "100+";
            $lte: "0-99" | "100+";
            $ne: "0-99" | "100+";
            $in: ("0-99" | "100+")[];
            $nin: ("0-99" | "100+")[];
        } & {}> | undefined;
        userId?: string | Partial<{
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
    id?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    name?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    size?: "0-99" | "100+" | Partial<{
        $gt: "0-99" | "100+";
        $gte: "0-99" | "100+";
        $lt: "0-99" | "100+";
        $lte: "0-99" | "100+";
        $ne: "0-99" | "100+";
        $in: ("0-99" | "100+")[];
        $nin: ("0-99" | "100+")[];
    } & {}> | undefined;
    userId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
} & {}, HookContext>;
