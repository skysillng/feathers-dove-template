import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const ShipmentStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly NOT_ASSIGNED: "NOT_ASSIGNED";
    readonly NOT_ACCEPTED: "NOT_ACCEPTED";
    readonly NOT_STARTED_YET: "NOT_STARTED_YET";
    readonly STARTED: "STARTED";
    readonly PICKED_UP: "PICKED_UP";
    readonly READY_TO_DELIVER: "READY_TO_DELIVER";
    readonly ALREADY_DELIVERED: "ALREADY_DELIVERED";
    readonly FAILED_DELIVERY: "FAILED_DELIVERY";
    readonly INCOMPLETE: "INCOMPLETE";
};
export type ShipmentStatus = typeof ShipmentStatus;
export declare const shipmentSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
    pickup: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString<string>;
        instruction: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    delivery: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    category: import("@sinclair/typebox").TString<string>;
    other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    size: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
    }>>>;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryFee: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tax: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tip: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    total: import("@sinclair/typebox").TString<string>;
    createdAt: import("@sinclair/typebox").TString<"date-time">;
    updatedAt: import("@sinclair/typebox").TString<"date-time">;
    transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        objectId: import("@sinclair/typebox").TString<string>;
        objectType: import("@sinclair/typebox").TString<string>;
        amount: import("@sinclair/typebox").TNumber;
        currency: import("@sinclair/typebox").TString<string>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
    }>>;
    carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>>;
}>;
export type Shipment = Static<typeof shipmentSchema>;
export declare const shipmentValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipmentResolver: import("@feathersjs/schema").Resolver<{
    status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
    other?: string | undefined;
    items?: {
        detail: string;
        quantity: string | number;
    }[] | undefined;
    transaction?: {
        status?: "failed" | "pending" | "successful" | undefined;
        id: string;
        currency: string;
        objectId: string;
        objectType: string;
        amount: number;
    } | undefined;
    transactionId?: string | undefined;
    carrierId?: string | undefined;
    carrier?: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    } | undefined;
    id: string;
    total: string;
    size: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
    userId: string;
    etaTime: string;
    deliveryFee: string | number;
    tip: string | number;
    tax: string | number;
    pickup: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        date: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
        instruction: string;
    };
    delivery: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
    };
    category: string;
    createdAt: string;
    updatedAt: string;
}, HookContext>;
export declare const shipmentExternalResolver: import("@feathersjs/schema").Resolver<{
    status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
    other?: string | undefined;
    items?: {
        detail: string;
        quantity: string | number;
    }[] | undefined;
    transaction?: {
        status?: "failed" | "pending" | "successful" | undefined;
        id: string;
        currency: string;
        objectId: string;
        objectType: string;
        amount: number;
    } | undefined;
    transactionId?: string | undefined;
    carrierId?: string | undefined;
    carrier?: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    } | undefined;
    id: string;
    total: string;
    size: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
    userId: string;
    etaTime: string;
    deliveryFee: string | number;
    tip: string | number;
    tax: string | number;
    pickup: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        date: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
        instruction: string;
    };
    delivery: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
    };
    category: string;
    createdAt: string;
    updatedAt: string;
}, HookContext>;
export declare const shipmentDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
    pickup: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString<string>;
        instruction: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    delivery: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    category: import("@sinclair/typebox").TString<string>;
    other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    size: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
    }>>>;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryFee: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tax: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tip: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    total: import("@sinclair/typebox").TString<string>;
    createdAt: import("@sinclair/typebox").TString<"date-time">;
    updatedAt: import("@sinclair/typebox").TString<"date-time">;
    transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        objectId: import("@sinclair/typebox").TString<string>;
        objectType: import("@sinclair/typebox").TString<string>;
        amount: import("@sinclair/typebox").TNumber;
        currency: import("@sinclair/typebox").TString<string>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
    }>>;
    carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>>;
}>, ["pickup", "delivery", "category", "other", "items", "size", "tip"]>;
export type ShipmentData = Static<typeof shipmentDataSchema>;
export declare const shipmentDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipmentDataResolver: import("@feathersjs/schema").Resolver<{
    status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
    other?: string | undefined;
    items?: {
        detail: string;
        quantity: string | number;
    }[] | undefined;
    transaction?: {
        status?: "failed" | "pending" | "successful" | undefined;
        id: string;
        currency: string;
        objectId: string;
        objectType: string;
        amount: number;
    } | undefined;
    transactionId?: string | undefined;
    carrierId?: string | undefined;
    carrier?: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    } | undefined;
    id: string;
    total: string;
    size: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
    userId: string;
    etaTime: string;
    deliveryFee: string | number;
    tip: string | number;
    tax: string | number;
    pickup: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        date: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
        instruction: string;
    };
    delivery: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
    };
    category: string;
    createdAt: string;
    updatedAt: string;
}, HookContext>;
export declare const shipmentPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
    pickup: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString<string>;
        instruction: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    delivery: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    category: import("@sinclair/typebox").TString<string>;
    other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    size: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
    }>>>;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryFee: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tax: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tip: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    total: import("@sinclair/typebox").TString<string>;
    createdAt: import("@sinclair/typebox").TString<"date-time">;
    updatedAt: import("@sinclair/typebox").TString<"date-time">;
    transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        objectId: import("@sinclair/typebox").TString<string>;
        objectType: import("@sinclair/typebox").TString<string>;
        amount: import("@sinclair/typebox").TNumber;
        currency: import("@sinclair/typebox").TString<string>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
    }>>;
    carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>>;
}>, ["id", "items"]>>;
export type ShipmentPatch = Static<typeof shipmentPatchSchema>;
export declare const shipmentPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipmentPatchResolver: import("@feathersjs/schema").Resolver<{
    status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
    other?: string | undefined;
    items?: {
        detail: string;
        quantity: string | number;
    }[] | undefined;
    transaction?: {
        status?: "failed" | "pending" | "successful" | undefined;
        id: string;
        currency: string;
        objectId: string;
        objectType: string;
        amount: number;
    } | undefined;
    transactionId?: string | undefined;
    carrierId?: string | undefined;
    carrier?: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    } | undefined;
    id: string;
    total: string;
    size: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
    userId: string;
    etaTime: string;
    deliveryFee: string | number;
    tip: string | number;
    tax: string | number;
    pickup: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        date: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
        instruction: string;
    };
    delivery: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
    };
    category: string;
    createdAt: string;
    updatedAt: string;
}, HookContext>;
export declare const shipmentEstimateSchema: import("@sinclair/typebox").TObject<{
    origin: import("@sinclair/typebox").TObject<{
        lat: import("@sinclair/typebox").TNumber;
        lng: import("@sinclair/typebox").TNumber;
    }>;
    destination: import("@sinclair/typebox").TObject<{
        lat: import("@sinclair/typebox").TNumber;
        lng: import("@sinclair/typebox").TNumber;
    }>;
    size: import("@sinclair/typebox").TString<string>;
    orderCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ShipmentEstimate = Static<typeof shipmentEstimateSchema>;
export declare const shipmentEstimateValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipmentEstimateResolver: import("@feathersjs/schema").Resolver<{
    userId?: string | undefined;
    orderCount?: number | undefined;
    origin: {
        lat: number;
        lng: number;
    };
    size: string;
    destination: {
        lat: number;
        lng: number;
    };
}, HookContext>;
export declare const shipmentPay: import("@sinclair/typebox").TObject<{
    shipmentId: import("@sinclair/typebox").TString<string>;
    redirect_url: import("@sinclair/typebox").TString<string>;
}>;
export type ShipmentPay = Static<typeof shipmentPay>;
export declare const shipmentPayValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipmentPayResolver: import("@feathersjs/schema").Resolver<{
    redirect_url: string;
    shipmentId: string;
}, HookContext>;
export declare const shipmentQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    userId: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
    pickup: import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString<string>;
        instruction: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    delivery: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    category: import("@sinclair/typebox").TString<string>;
    other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    size: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
    }>>>;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryFee: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tax: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    tip: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
    total: import("@sinclair/typebox").TString<string>;
    createdAt: import("@sinclair/typebox").TString<"date-time">;
    updatedAt: import("@sinclair/typebox").TString<"date-time">;
    transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        objectId: import("@sinclair/typebox").TString<string>;
        objectType: import("@sinclair/typebox").TString<string>;
        amount: import("@sinclair/typebox").TNumber;
        currency: import("@sinclair/typebox").TString<string>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
    }>>;
    carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>>;
}>, []>;
export declare const shipmentQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        tip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        pickup: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        delivery: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "total" | "size" | "status" | "other" | "items" | "transaction" | "userId" | "etaTime" | "deliveryFee" | "tip" | "tax" | "pickup" | "delivery" | "category" | "createdAt" | "updatedAt" | "transactionId" | "carrierId" | "carrier")[]>;
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
        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $gte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $lt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $lte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $ne: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>>;
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
        etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"time">;
            $gte: import("@sinclair/typebox").TString<"time">;
            $lt: import("@sinclair/typebox").TString<"time">;
            $lte: import("@sinclair/typebox").TString<"time">;
            $ne: import("@sinclair/typebox").TString<"time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        tip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        pickup: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        delivery: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"date-time">;
            $gte: import("@sinclair/typebox").TString<"date-time">;
            $lt: import("@sinclair/typebox").TString<"date-time">;
            $lte: import("@sinclair/typebox").TString<"date-time">;
            $ne: import("@sinclair/typebox").TString<"date-time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"date-time">;
            $gte: import("@sinclair/typebox").TString<"date-time">;
            $lt: import("@sinclair/typebox").TString<"date-time">;
            $lte: import("@sinclair/typebox").TString<"date-time">;
            $ne: import("@sinclair/typebox").TString<"date-time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>>;
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
            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
                $gte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
                $lt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
                $lte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
                $ne: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    detail: import("@sinclair/typebox").TString<string>;
                    quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
                }>>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    detail: import("@sinclair/typebox").TString<string>;
                    quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
                }>>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    detail: import("@sinclair/typebox").TString<string>;
                    quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
                }>>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    detail: import("@sinclair/typebox").TString<string>;
                    quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
                }>>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    detail: import("@sinclair/typebox").TString<string>;
                    quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
                }>>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    detail: import("@sinclair/typebox").TString<string>;
                    quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
                }>>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    detail: import("@sinclair/typebox").TString<string>;
                    quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
                }>>>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString<string>;
                    objectId: import("@sinclair/typebox").TString<string>;
                    objectType: import("@sinclair/typebox").TString<string>;
                    amount: import("@sinclair/typebox").TNumber;
                    currency: import("@sinclair/typebox").TString<string>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
                }>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString<string>;
                    objectId: import("@sinclair/typebox").TString<string>;
                    objectType: import("@sinclair/typebox").TString<string>;
                    amount: import("@sinclair/typebox").TNumber;
                    currency: import("@sinclair/typebox").TString<string>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
                }>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString<string>;
                    objectId: import("@sinclair/typebox").TString<string>;
                    objectType: import("@sinclair/typebox").TString<string>;
                    amount: import("@sinclair/typebox").TNumber;
                    currency: import("@sinclair/typebox").TString<string>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
                }>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString<string>;
                    objectId: import("@sinclair/typebox").TString<string>;
                    objectType: import("@sinclair/typebox").TString<string>;
                    amount: import("@sinclair/typebox").TNumber;
                    currency: import("@sinclair/typebox").TString<string>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
                }>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString<string>;
                    objectId: import("@sinclair/typebox").TString<string>;
                    objectType: import("@sinclair/typebox").TString<string>;
                    amount: import("@sinclair/typebox").TNumber;
                    currency: import("@sinclair/typebox").TString<string>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
                }>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString<string>;
                    objectId: import("@sinclair/typebox").TString<string>;
                    objectType: import("@sinclair/typebox").TString<string>;
                    amount: import("@sinclair/typebox").TNumber;
                    currency: import("@sinclair/typebox").TString<string>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
                }>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString<string>;
                    objectId: import("@sinclair/typebox").TString<string>;
                    objectType: import("@sinclair/typebox").TString<string>;
                    amount: import("@sinclair/typebox").TNumber;
                    currency: import("@sinclair/typebox").TString<string>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
                }>>>;
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
            etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<"time">;
                $gte: import("@sinclair/typebox").TString<"time">;
                $lt: import("@sinclair/typebox").TString<"time">;
                $lte: import("@sinclair/typebox").TString<"time">;
                $ne: import("@sinclair/typebox").TString<"time">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            tip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            pickup: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString<string>;
                    instruction: import("@sinclair/typebox").TString<string>;
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $gte: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString<string>;
                    instruction: import("@sinclair/typebox").TString<string>;
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $lt: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString<string>;
                    instruction: import("@sinclair/typebox").TString<string>;
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $lte: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString<string>;
                    instruction: import("@sinclair/typebox").TString<string>;
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $ne: import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString<string>;
                    instruction: import("@sinclair/typebox").TString<string>;
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString<string>;
                    instruction: import("@sinclair/typebox").TString<string>;
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    date: import("@sinclair/typebox").TString<string>;
                    instruction: import("@sinclair/typebox").TString<string>;
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            delivery: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $gte: import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $lt: import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $lte: import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $ne: import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString<string>;
                    phone: import("@sinclair/typebox").TString<string>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                    address: import("@sinclair/typebox").TString<string>;
                    city: import("@sinclair/typebox").TString<string>;
                    state: import("@sinclair/typebox").TString<string>;
                    postalCode: import("@sinclair/typebox").TString<string>;
                    geopoint: import("@sinclair/typebox").TObject<{
                        lat: import("@sinclair/typebox").TNumber;
                        lng: import("@sinclair/typebox").TNumber;
                    }>;
                }>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<"date-time">;
                $gte: import("@sinclair/typebox").TString<"date-time">;
                $lt: import("@sinclair/typebox").TString<"date-time">;
                $lte: import("@sinclair/typebox").TString<"date-time">;
                $ne: import("@sinclair/typebox").TString<"date-time">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<"date-time">;
                $gte: import("@sinclair/typebox").TString<"date-time">;
                $lt: import("@sinclair/typebox").TString<"date-time">;
                $lte: import("@sinclair/typebox").TString<"date-time">;
                $ne: import("@sinclair/typebox").TString<"date-time">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TInteger;
                    personalId: import("@sinclair/typebox").TInteger;
                    name: import("@sinclair/typebox").TString<string>;
                    codeName: import("@sinclair/typebox").TString<string>;
                    phoneNumber: import("@sinclair/typebox").TString<string>;
                    companyId: import("@sinclair/typebox").TInteger;
                    areaId: import("@sinclair/typebox").TInteger;
                    isOnShift: import("@sinclair/typebox").TBoolean;
                    email: import("@sinclair/typebox").TString<string>;
                    carrierPhoto: import("@sinclair/typebox").TString<string>;
                    isActive: import("@sinclair/typebox").TBoolean;
                }>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TInteger;
                    personalId: import("@sinclair/typebox").TInteger;
                    name: import("@sinclair/typebox").TString<string>;
                    codeName: import("@sinclair/typebox").TString<string>;
                    phoneNumber: import("@sinclair/typebox").TString<string>;
                    companyId: import("@sinclair/typebox").TInteger;
                    areaId: import("@sinclair/typebox").TInteger;
                    isOnShift: import("@sinclair/typebox").TBoolean;
                    email: import("@sinclair/typebox").TString<string>;
                    carrierPhoto: import("@sinclair/typebox").TString<string>;
                    isActive: import("@sinclair/typebox").TBoolean;
                }>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TInteger;
                    personalId: import("@sinclair/typebox").TInteger;
                    name: import("@sinclair/typebox").TString<string>;
                    codeName: import("@sinclair/typebox").TString<string>;
                    phoneNumber: import("@sinclair/typebox").TString<string>;
                    companyId: import("@sinclair/typebox").TInteger;
                    areaId: import("@sinclair/typebox").TInteger;
                    isOnShift: import("@sinclair/typebox").TBoolean;
                    email: import("@sinclair/typebox").TString<string>;
                    carrierPhoto: import("@sinclair/typebox").TString<string>;
                    isActive: import("@sinclair/typebox").TBoolean;
                }>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TInteger;
                    personalId: import("@sinclair/typebox").TInteger;
                    name: import("@sinclair/typebox").TString<string>;
                    codeName: import("@sinclair/typebox").TString<string>;
                    phoneNumber: import("@sinclair/typebox").TString<string>;
                    companyId: import("@sinclair/typebox").TInteger;
                    areaId: import("@sinclair/typebox").TInteger;
                    isOnShift: import("@sinclair/typebox").TBoolean;
                    email: import("@sinclair/typebox").TString<string>;
                    carrierPhoto: import("@sinclair/typebox").TString<string>;
                    isActive: import("@sinclair/typebox").TBoolean;
                }>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TInteger;
                    personalId: import("@sinclair/typebox").TInteger;
                    name: import("@sinclair/typebox").TString<string>;
                    codeName: import("@sinclair/typebox").TString<string>;
                    phoneNumber: import("@sinclair/typebox").TString<string>;
                    companyId: import("@sinclair/typebox").TInteger;
                    areaId: import("@sinclair/typebox").TInteger;
                    isOnShift: import("@sinclair/typebox").TBoolean;
                    email: import("@sinclair/typebox").TString<string>;
                    carrierPhoto: import("@sinclair/typebox").TString<string>;
                    isActive: import("@sinclair/typebox").TBoolean;
                }>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TInteger;
                    personalId: import("@sinclair/typebox").TInteger;
                    name: import("@sinclair/typebox").TString<string>;
                    codeName: import("@sinclair/typebox").TString<string>;
                    phoneNumber: import("@sinclair/typebox").TString<string>;
                    companyId: import("@sinclair/typebox").TInteger;
                    areaId: import("@sinclair/typebox").TInteger;
                    isOnShift: import("@sinclair/typebox").TBoolean;
                    email: import("@sinclair/typebox").TString<string>;
                    carrierPhoto: import("@sinclair/typebox").TString<string>;
                    isActive: import("@sinclair/typebox").TBoolean;
                }>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TInteger;
                    personalId: import("@sinclair/typebox").TInteger;
                    name: import("@sinclair/typebox").TString<string>;
                    codeName: import("@sinclair/typebox").TString<string>;
                    phoneNumber: import("@sinclair/typebox").TString<string>;
                    companyId: import("@sinclair/typebox").TInteger;
                    areaId: import("@sinclair/typebox").TInteger;
                    isOnShift: import("@sinclair/typebox").TBoolean;
                    email: import("@sinclair/typebox").TString<string>;
                    carrierPhoto: import("@sinclair/typebox").TString<string>;
                    isActive: import("@sinclair/typebox").TBoolean;
                }>>>;
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
        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $gte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $lt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $lte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $ne: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                detail: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
            }>>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString<string>;
                objectId: import("@sinclair/typebox").TString<string>;
                objectType: import("@sinclair/typebox").TString<string>;
                amount: import("@sinclair/typebox").TNumber;
                currency: import("@sinclair/typebox").TString<string>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
            }>>>;
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
        etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"time">;
            $gte: import("@sinclair/typebox").TString<"time">;
            $lt: import("@sinclair/typebox").TString<"time">;
            $lte: import("@sinclair/typebox").TString<"time">;
            $ne: import("@sinclair/typebox").TString<"time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        tip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        pickup: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                date: import("@sinclair/typebox").TString<string>;
                instruction: import("@sinclair/typebox").TString<string>;
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        delivery: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                phone: import("@sinclair/typebox").TString<string>;
                email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                address: import("@sinclair/typebox").TString<string>;
                city: import("@sinclair/typebox").TString<string>;
                state: import("@sinclair/typebox").TString<string>;
                postalCode: import("@sinclair/typebox").TString<string>;
                geopoint: import("@sinclair/typebox").TObject<{
                    lat: import("@sinclair/typebox").TNumber;
                    lng: import("@sinclair/typebox").TNumber;
                }>;
            }>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"date-time">;
            $gte: import("@sinclair/typebox").TString<"date-time">;
            $lt: import("@sinclair/typebox").TString<"date-time">;
            $lte: import("@sinclair/typebox").TString<"date-time">;
            $ne: import("@sinclair/typebox").TString<"date-time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"date-time">;
            $gte: import("@sinclair/typebox").TString<"date-time">;
            $lt: import("@sinclair/typebox").TString<"date-time">;
            $lte: import("@sinclair/typebox").TString<"date-time">;
            $ne: import("@sinclair/typebox").TString<"date-time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>>;
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
    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
        $gte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
        $lt: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
        $lte: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
        $ne: import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<"Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE">>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    other: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        detail: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
    }>>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            detail: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TInteger]>;
        }>>>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    transaction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        objectId: import("@sinclair/typebox").TString<string>;
        objectType: import("@sinclair/typebox").TString<string>;
        amount: import("@sinclair/typebox").TNumber;
        currency: import("@sinclair/typebox").TString<string>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
    }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            objectId: import("@sinclair/typebox").TString<string>;
            objectType: import("@sinclair/typebox").TString<string>;
            amount: import("@sinclair/typebox").TNumber;
            currency: import("@sinclair/typebox").TString<string>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<"failed" | "pending" | "successful">>;
        }>>>;
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
    etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"time">;
        $gte: import("@sinclair/typebox").TString<"time">;
        $lt: import("@sinclair/typebox").TString<"time">;
        $lte: import("@sinclair/typebox").TString<"time">;
        $ne: import("@sinclair/typebox").TString<"time">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    tip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TNumber]>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    pickup: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString<string>;
        instruction: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            date: import("@sinclair/typebox").TString<string>;
            instruction: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    delivery: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        phone: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        address: import("@sinclair/typebox").TString<string>;
        city: import("@sinclair/typebox").TString<string>;
        state: import("@sinclair/typebox").TString<string>;
        postalCode: import("@sinclair/typebox").TString<string>;
        geopoint: import("@sinclair/typebox").TObject<{
            lat: import("@sinclair/typebox").TNumber;
            lng: import("@sinclair/typebox").TNumber;
        }>;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            phone: import("@sinclair/typebox").TString<string>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            address: import("@sinclair/typebox").TString<string>;
            city: import("@sinclair/typebox").TString<string>;
            state: import("@sinclair/typebox").TString<string>;
            postalCode: import("@sinclair/typebox").TString<string>;
            geopoint: import("@sinclair/typebox").TObject<{
                lat: import("@sinclair/typebox").TNumber;
                lng: import("@sinclair/typebox").TNumber;
            }>;
        }>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"date-time">;
        $gte: import("@sinclair/typebox").TString<"date-time">;
        $lt: import("@sinclair/typebox").TString<"date-time">;
        $lte: import("@sinclair/typebox").TString<"date-time">;
        $ne: import("@sinclair/typebox").TString<"date-time">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"date-time">;
        $gte: import("@sinclair/typebox").TString<"date-time">;
        $lt: import("@sinclair/typebox").TString<"date-time">;
        $lte: import("@sinclair/typebox").TString<"date-time">;
        $ne: import("@sinclair/typebox").TString<"date-time">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    transactionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    carrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    carrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type ShipmentQuery = Static<typeof shipmentQuerySchema>;
export declare const shipmentQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipmentQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        total?: number | undefined;
        size?: number | undefined;
        status?: number | undefined;
        other?: number | undefined;
        items?: number | undefined;
        transaction?: number | undefined;
        userId?: number | undefined;
        etaTime?: number | undefined;
        deliveryFee?: number | undefined;
        tip?: number | undefined;
        tax?: number | undefined;
        pickup?: number | undefined;
        delivery?: number | undefined;
        category?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        transactionId?: number | undefined;
        carrierId?: number | undefined;
        carrier?: number | undefined;
    };
    $select: ("id" | "total" | "size" | "status" | "other" | "items" | "transaction" | "userId" | "etaTime" | "deliveryFee" | "tip" | "tax" | "pickup" | "delivery" | "category" | "createdAt" | "updatedAt" | "transactionId" | "carrierId" | "carrier")[];
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
        total?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        size?: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight" | Partial<{
            $gt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $gte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $lt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $lte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $ne: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $in: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
            $nin: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
        } & {}> | undefined;
        status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | Partial<{
            $gt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $gte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $lt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $lte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $ne?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $in: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
            $nin: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
        } & {}> | undefined;
        other?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        items?: {
            detail: string;
            quantity: string | number;
        }[] | Partial<{
            $gt?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $gte?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $lt?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $lte?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $ne?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $in: {
                detail: string;
                quantity: string | number;
            }[][];
            $nin: {
                detail: string;
                quantity: string | number;
            }[][];
        } & {}> | undefined;
        transaction?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | Partial<{
            $gt?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $gte?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $lt?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $lte?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $ne?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $in: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            }[];
            $nin: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            }[];
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
        etaTime?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        deliveryFee?: string | number | Partial<{
            $gt: string | number;
            $gte: string | number;
            $lt: string | number;
            $lte: string | number;
            $ne: string | number;
            $in: (string | number)[];
            $nin: (string | number)[];
        } & {}> | undefined;
        tip?: string | number | Partial<{
            $gt: string | number;
            $gte: string | number;
            $lt: string | number;
            $lte: string | number;
            $ne: string | number;
            $in: (string | number)[];
            $nin: (string | number)[];
        } & {}> | undefined;
        tax?: string | number | Partial<{
            $gt: string | number;
            $gte: string | number;
            $lt: string | number;
            $lte: string | number;
            $ne: string | number;
            $in: (string | number)[];
            $nin: (string | number)[];
        } & {}> | undefined;
        pickup?: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        } | Partial<{
            $gt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $gte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $lt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $lte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $ne: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $in: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            }[];
            $nin: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            }[];
        } & {}> | undefined;
        delivery?: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        } | Partial<{
            $gt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $gte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $lt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $lte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $ne: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $in: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            }[];
            $nin: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            }[];
        } & {}> | undefined;
        category?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        createdAt?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        updatedAt?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        transactionId?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        carrierId?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        carrier?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | Partial<{
            $gt?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $gte?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $lt?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $lte?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $ne?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $in: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
            $nin: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
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
            total?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            size?: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight" | Partial<{
                $gt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
                $gte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
                $lt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
                $lte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
                $ne: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
                $in: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
                $nin: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
            } & {}> | undefined;
            status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | Partial<{
                $gt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
                $gte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
                $lt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
                $lte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
                $ne?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
                $in: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
                $nin: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
            } & {}> | undefined;
            other?: string | Partial<{
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            items?: {
                detail: string;
                quantity: string | number;
            }[] | Partial<{
                $gt?: {
                    detail: string;
                    quantity: string | number;
                }[] | undefined;
                $gte?: {
                    detail: string;
                    quantity: string | number;
                }[] | undefined;
                $lt?: {
                    detail: string;
                    quantity: string | number;
                }[] | undefined;
                $lte?: {
                    detail: string;
                    quantity: string | number;
                }[] | undefined;
                $ne?: {
                    detail: string;
                    quantity: string | number;
                }[] | undefined;
                $in: {
                    detail: string;
                    quantity: string | number;
                }[][];
                $nin: {
                    detail: string;
                    quantity: string | number;
                }[][];
            } & {}> | undefined;
            transaction?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | Partial<{
                $gt?: {
                    status?: "failed" | "pending" | "successful" | undefined;
                    id: string;
                    currency: string;
                    objectId: string;
                    objectType: string;
                    amount: number;
                } | undefined;
                $gte?: {
                    status?: "failed" | "pending" | "successful" | undefined;
                    id: string;
                    currency: string;
                    objectId: string;
                    objectType: string;
                    amount: number;
                } | undefined;
                $lt?: {
                    status?: "failed" | "pending" | "successful" | undefined;
                    id: string;
                    currency: string;
                    objectId: string;
                    objectType: string;
                    amount: number;
                } | undefined;
                $lte?: {
                    status?: "failed" | "pending" | "successful" | undefined;
                    id: string;
                    currency: string;
                    objectId: string;
                    objectType: string;
                    amount: number;
                } | undefined;
                $ne?: {
                    status?: "failed" | "pending" | "successful" | undefined;
                    id: string;
                    currency: string;
                    objectId: string;
                    objectType: string;
                    amount: number;
                } | undefined;
                $in: {
                    status?: "failed" | "pending" | "successful" | undefined;
                    id: string;
                    currency: string;
                    objectId: string;
                    objectType: string;
                    amount: number;
                }[];
                $nin: {
                    status?: "failed" | "pending" | "successful" | undefined;
                    id: string;
                    currency: string;
                    objectId: string;
                    objectType: string;
                    amount: number;
                }[];
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
            etaTime?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            deliveryFee?: string | number | Partial<{
                $gt: string | number;
                $gte: string | number;
                $lt: string | number;
                $lte: string | number;
                $ne: string | number;
                $in: (string | number)[];
                $nin: (string | number)[];
            } & {}> | undefined;
            tip?: string | number | Partial<{
                $gt: string | number;
                $gte: string | number;
                $lt: string | number;
                $lte: string | number;
                $ne: string | number;
                $in: (string | number)[];
                $nin: (string | number)[];
            } & {}> | undefined;
            tax?: string | number | Partial<{
                $gt: string | number;
                $gte: string | number;
                $lt: string | number;
                $lte: string | number;
                $ne: string | number;
                $in: (string | number)[];
                $nin: (string | number)[];
            } & {}> | undefined;
            pickup?: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            } | Partial<{
                $gt: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    date: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                    instruction: string;
                };
                $gte: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    date: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                    instruction: string;
                };
                $lt: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    date: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                    instruction: string;
                };
                $lte: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    date: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                    instruction: string;
                };
                $ne: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    date: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                    instruction: string;
                };
                $in: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    date: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                    instruction: string;
                }[];
                $nin: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    date: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                    instruction: string;
                }[];
            } & {}> | undefined;
            delivery?: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            } | Partial<{
                $gt: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                };
                $gte: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                };
                $lt: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                };
                $lte: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                };
                $ne: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                };
                $in: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                }[];
                $nin: {
                    email?: string | undefined;
                    state: string;
                    address: string;
                    name: string;
                    phone: string;
                    city: string;
                    postalCode: string;
                    geopoint: {
                        lat: number;
                        lng: number;
                    };
                }[];
            } & {}> | undefined;
            category?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            createdAt?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            updatedAt?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            transactionId?: string | Partial<{
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            carrierId?: string | Partial<{
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            carrier?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | Partial<{
                $gt?: {
                    id: number;
                    name: string;
                    email: string;
                    companyId: number;
                    areaId: number;
                    phoneNumber: string;
                    personalId: number;
                    codeName: string;
                    isOnShift: boolean;
                    carrierPhoto: string;
                    isActive: boolean;
                } | undefined;
                $gte?: {
                    id: number;
                    name: string;
                    email: string;
                    companyId: number;
                    areaId: number;
                    phoneNumber: string;
                    personalId: number;
                    codeName: string;
                    isOnShift: boolean;
                    carrierPhoto: string;
                    isActive: boolean;
                } | undefined;
                $lt?: {
                    id: number;
                    name: string;
                    email: string;
                    companyId: number;
                    areaId: number;
                    phoneNumber: string;
                    personalId: number;
                    codeName: string;
                    isOnShift: boolean;
                    carrierPhoto: string;
                    isActive: boolean;
                } | undefined;
                $lte?: {
                    id: number;
                    name: string;
                    email: string;
                    companyId: number;
                    areaId: number;
                    phoneNumber: string;
                    personalId: number;
                    codeName: string;
                    isOnShift: boolean;
                    carrierPhoto: string;
                    isActive: boolean;
                } | undefined;
                $ne?: {
                    id: number;
                    name: string;
                    email: string;
                    companyId: number;
                    areaId: number;
                    phoneNumber: string;
                    personalId: number;
                    codeName: string;
                    isOnShift: boolean;
                    carrierPhoto: string;
                    isActive: boolean;
                } | undefined;
                $in: {
                    id: number;
                    name: string;
                    email: string;
                    companyId: number;
                    areaId: number;
                    phoneNumber: string;
                    personalId: number;
                    codeName: string;
                    isOnShift: boolean;
                    carrierPhoto: string;
                    isActive: boolean;
                }[];
                $nin: {
                    id: number;
                    name: string;
                    email: string;
                    companyId: number;
                    areaId: number;
                    phoneNumber: string;
                    personalId: number;
                    codeName: string;
                    isOnShift: boolean;
                    carrierPhoto: string;
                    isActive: boolean;
                }[];
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
        total?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        size?: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight" | Partial<{
            $gt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $gte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $lt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $lte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $ne: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
            $in: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
            $nin: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
        } & {}> | undefined;
        status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | Partial<{
            $gt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $gte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $lt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $lte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $ne?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
            $in: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
            $nin: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
        } & {}> | undefined;
        other?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        items?: {
            detail: string;
            quantity: string | number;
        }[] | Partial<{
            $gt?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $gte?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $lt?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $lte?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $ne?: {
                detail: string;
                quantity: string | number;
            }[] | undefined;
            $in: {
                detail: string;
                quantity: string | number;
            }[][];
            $nin: {
                detail: string;
                quantity: string | number;
            }[][];
        } & {}> | undefined;
        transaction?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | Partial<{
            $gt?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $gte?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $lt?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $lte?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $ne?: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            } | undefined;
            $in: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            }[];
            $nin: {
                status?: "failed" | "pending" | "successful" | undefined;
                id: string;
                currency: string;
                objectId: string;
                objectType: string;
                amount: number;
            }[];
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
        etaTime?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        deliveryFee?: string | number | Partial<{
            $gt: string | number;
            $gte: string | number;
            $lt: string | number;
            $lte: string | number;
            $ne: string | number;
            $in: (string | number)[];
            $nin: (string | number)[];
        } & {}> | undefined;
        tip?: string | number | Partial<{
            $gt: string | number;
            $gte: string | number;
            $lt: string | number;
            $lte: string | number;
            $ne: string | number;
            $in: (string | number)[];
            $nin: (string | number)[];
        } & {}> | undefined;
        tax?: string | number | Partial<{
            $gt: string | number;
            $gte: string | number;
            $lt: string | number;
            $lte: string | number;
            $ne: string | number;
            $in: (string | number)[];
            $nin: (string | number)[];
        } & {}> | undefined;
        pickup?: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        } | Partial<{
            $gt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $gte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $lt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $lte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $ne: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            };
            $in: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            }[];
            $nin: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                date: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
                instruction: string;
            }[];
        } & {}> | undefined;
        delivery?: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        } | Partial<{
            $gt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $gte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $lt: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $lte: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $ne: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            };
            $in: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            }[];
            $nin: {
                email?: string | undefined;
                state: string;
                address: string;
                name: string;
                phone: string;
                city: string;
                postalCode: string;
                geopoint: {
                    lat: number;
                    lng: number;
                };
            }[];
        } & {}> | undefined;
        category?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        createdAt?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        updatedAt?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        transactionId?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        carrierId?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        carrier?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | Partial<{
            $gt?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $gte?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $lt?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $lte?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $ne?: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            } | undefined;
            $in: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
            $nin: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
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
    total?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    size?: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight" | Partial<{
        $gt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
        $gte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
        $lt: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
        $lte: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
        $ne: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
        $in: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
        $nin: ("Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight")[];
    } & {}> | undefined;
    status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | Partial<{
        $gt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
        $gte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
        $lt?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
        $lte?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
        $ne?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
        $in: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
        $nin: ("ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE")[];
    } & {}> | undefined;
    other?: string | Partial<{
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    items?: {
        detail: string;
        quantity: string | number;
    }[] | Partial<{
        $gt?: {
            detail: string;
            quantity: string | number;
        }[] | undefined;
        $gte?: {
            detail: string;
            quantity: string | number;
        }[] | undefined;
        $lt?: {
            detail: string;
            quantity: string | number;
        }[] | undefined;
        $lte?: {
            detail: string;
            quantity: string | number;
        }[] | undefined;
        $ne?: {
            detail: string;
            quantity: string | number;
        }[] | undefined;
        $in: {
            detail: string;
            quantity: string | number;
        }[][];
        $nin: {
            detail: string;
            quantity: string | number;
        }[][];
    } & {}> | undefined;
    transaction?: {
        status?: "failed" | "pending" | "successful" | undefined;
        id: string;
        currency: string;
        objectId: string;
        objectType: string;
        amount: number;
    } | Partial<{
        $gt?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | undefined;
        $gte?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | undefined;
        $lt?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | undefined;
        $lte?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | undefined;
        $ne?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | undefined;
        $in: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        }[];
        $nin: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        }[];
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
    etaTime?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    deliveryFee?: string | number | Partial<{
        $gt: string | number;
        $gte: string | number;
        $lt: string | number;
        $lte: string | number;
        $ne: string | number;
        $in: (string | number)[];
        $nin: (string | number)[];
    } & {}> | undefined;
    tip?: string | number | Partial<{
        $gt: string | number;
        $gte: string | number;
        $lt: string | number;
        $lte: string | number;
        $ne: string | number;
        $in: (string | number)[];
        $nin: (string | number)[];
    } & {}> | undefined;
    tax?: string | number | Partial<{
        $gt: string | number;
        $gte: string | number;
        $lt: string | number;
        $lte: string | number;
        $ne: string | number;
        $in: (string | number)[];
        $nin: (string | number)[];
    } & {}> | undefined;
    pickup?: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        date: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
        instruction: string;
    } | Partial<{
        $gt: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        };
        $gte: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        };
        $lt: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        };
        $lte: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        };
        $ne: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        };
        $in: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        }[];
        $nin: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        }[];
    } & {}> | undefined;
    delivery?: {
        email?: string | undefined;
        state: string;
        address: string;
        name: string;
        phone: string;
        city: string;
        postalCode: string;
        geopoint: {
            lat: number;
            lng: number;
        };
    } | Partial<{
        $gt: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        };
        $gte: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        };
        $lt: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        };
        $lte: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        };
        $ne: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        };
        $in: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        }[];
        $nin: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        }[];
    } & {}> | undefined;
    category?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    createdAt?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    updatedAt?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    transactionId?: string | Partial<{
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    carrierId?: string | Partial<{
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    carrier?: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    } | Partial<{
        $gt?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | undefined;
        $gte?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | undefined;
        $lt?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | undefined;
        $lte?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | undefined;
        $ne?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | undefined;
        $in: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        }[];
        $nin: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        }[];
    } & {}> | undefined;
} & {}, HookContext>;
