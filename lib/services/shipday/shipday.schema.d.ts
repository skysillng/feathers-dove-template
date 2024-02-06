import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { ShipdayService } from './shipday.class';
export declare const shipdaySchema: import("@sinclair/typebox").TObject<{
    orderId: import("@sinclair/typebox").TNumber;
    orderNumber: import("@sinclair/typebox").TString<string>;
    companyId: import("@sinclair/typebox").TString<string>;
    areaId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        emailAddress: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    restaurant: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    assignedCarrier: import("@sinclair/typebox").TObject<{
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
    }>;
    distance: import("@sinclair/typebox").TString<"double">;
    activityLog: import("@sinclair/typebox").TObject<{
        placementTime: import("@sinclair/typebox").TString<"date-time">;
        expectedPickupTime: import("@sinclair/typebox").TString<"time">;
        expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
        expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
        assignedTime: import("@sinclair/typebox").TString<"date-time">;
        startTime: import("@sinclair/typebox").TString<"date-time">;
        pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
        arrivedTime: import("@sinclair/typebox").TString<"date-time">;
        deliveryTime: import("@sinclair/typebox").TString<"date-time">;
    }>;
    costing: import("@sinclair/typebox").TObject<{
        totalCost: import("@sinclair/typebox").TString<"double">;
        deliveryFee: import("@sinclair/typebox").TString<"double">;
        tip: import("@sinclair/typebox").TString<"double">;
        discountAmount: import("@sinclair/typebox").TString<"double">;
        tax: import("@sinclair/typebox").TString<"double">;
        cashTip: import("@sinclair/typebox").TString<"double">;
    }>;
    orderItem: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unitPrice: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    assignedCarrierId: import("@sinclair/typebox").TString<"int32">;
    orderStatus: import("@sinclair/typebox").TObject<{
        imcomplete: import("@sinclair/typebox").TBoolean;
        accepted: import("@sinclair/typebox").TBoolean;
        orderState: import("@sinclair/typebox").TUnsafe<string>;
    }>;
    trackingLink: import("@sinclair/typebox").TString<"uri">;
    feedback: import("@sinclair/typebox").TString<string>;
    schedule: import("@sinclair/typebox").TBoolean;
    parentId: import("@sinclair/typebox").TString<"int32">;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryInstruction: import("@sinclair/typebox").TString<string>;
}>;
export type Shipday = Static<typeof shipdaySchema>;
export declare const shipdayValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipdayResolver: import("@feathersjs/schema").Resolver<{
    feedback: string;
    customer: {
        address: string;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        latitude: number;
        longitude: number;
    };
    distance: string;
    etaTime: string;
    orderId: number;
    orderNumber: string;
    companyId: string;
    areaId: string;
    restaurant: {
        id: number;
        address: string;
        name: string;
        phoneNumber: string;
        latitude: number;
        longitude: number;
    };
    assignedCarrier: {
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
    };
    activityLog: {
        startTime: string;
        placementTime: string;
        expectedPickupTime: string;
        expectedDeliveryDate: string;
        expectedDeliveryTime: string;
        assignedTime: string;
        pickedUpTime: string;
        arrivedTime: string;
        deliveryTime: string;
    };
    costing: {
        totalCost: string;
        deliveryFee: string;
        tip: string;
        discountAmount: string;
        tax: string;
        cashTip: string;
    };
    orderItem: {
        details?: string | undefined;
        addOns?: string[] | undefined;
        name: string;
        quantity: string;
        unitPrice: string;
    }[];
    assignedCarrierId: string;
    orderStatus: {
        imcomplete: boolean;
        accepted: boolean;
        orderState: string;
    };
    trackingLink: string;
    schedule: boolean;
    parentId: string;
    deliveryInstruction: string;
}, HookContext<ShipdayService<import("./shipday.class").ShipdayParams>>>;
export declare const shipdayExternalResolver: import("@feathersjs/schema").Resolver<{
    feedback: string;
    customer: {
        address: string;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        latitude: number;
        longitude: number;
    };
    distance: string;
    etaTime: string;
    orderId: number;
    orderNumber: string;
    companyId: string;
    areaId: string;
    restaurant: {
        id: number;
        address: string;
        name: string;
        phoneNumber: string;
        latitude: number;
        longitude: number;
    };
    assignedCarrier: {
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
    };
    activityLog: {
        startTime: string;
        placementTime: string;
        expectedPickupTime: string;
        expectedDeliveryDate: string;
        expectedDeliveryTime: string;
        assignedTime: string;
        pickedUpTime: string;
        arrivedTime: string;
        deliveryTime: string;
    };
    costing: {
        totalCost: string;
        deliveryFee: string;
        tip: string;
        discountAmount: string;
        tax: string;
        cashTip: string;
    };
    orderItem: {
        details?: string | undefined;
        addOns?: string[] | undefined;
        name: string;
        quantity: string;
        unitPrice: string;
    }[];
    assignedCarrierId: string;
    orderStatus: {
        imcomplete: boolean;
        accepted: boolean;
        orderState: string;
    };
    trackingLink: string;
    schedule: boolean;
    parentId: string;
    deliveryInstruction: string;
}, HookContext<ShipdayService<import("./shipday.class").ShipdayParams>>>;
export declare const shipdayDataSchema: import("@sinclair/typebox").TObject<{
    orderNumber: import("@sinclair/typebox").TString<string>;
    customerName: import("@sinclair/typebox").TString<string>;
    customerAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    customerEmail: import("@sinclair/typebox").TString<string>;
    customerPhoneNumber: import("@sinclair/typebox").TString<string>;
    restaurantName: import("@sinclair/typebox").TString<string>;
    restaurantAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    restaurantPhoneNumber: import("@sinclair/typebox").TString<string>;
    expectedDeliveryDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    expectedPickupTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    expectedDeliveryTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    pickupLatitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    pickupLongitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryLatitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryLongitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    orderItem: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unitPrice: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>>;
    tips: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    discountAmount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    totalOrderCost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryInstruction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    assignedCarrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"int32">>;
    assignedCarrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
export type ShipdayData = Static<typeof shipdayDataSchema>;
export declare const shipdayDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipdayDataResolver: import("@feathersjs/schema").Resolver<{
    feedback: string;
    customer: {
        address: string;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        latitude: number;
        longitude: number;
    };
    distance: string;
    etaTime: string;
    orderId: number;
    orderNumber: string;
    companyId: string;
    areaId: string;
    restaurant: {
        id: number;
        address: string;
        name: string;
        phoneNumber: string;
        latitude: number;
        longitude: number;
    };
    assignedCarrier: {
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
    };
    activityLog: {
        startTime: string;
        placementTime: string;
        expectedPickupTime: string;
        expectedDeliveryDate: string;
        expectedDeliveryTime: string;
        assignedTime: string;
        pickedUpTime: string;
        arrivedTime: string;
        deliveryTime: string;
    };
    costing: {
        totalCost: string;
        deliveryFee: string;
        tip: string;
        discountAmount: string;
        tax: string;
        cashTip: string;
    };
    orderItem: {
        details?: string | undefined;
        addOns?: string[] | undefined;
        name: string;
        quantity: string;
        unitPrice: string;
    }[];
    assignedCarrierId: string;
    orderStatus: {
        imcomplete: boolean;
        accepted: boolean;
        orderState: string;
    };
    trackingLink: string;
    schedule: boolean;
    parentId: string;
    deliveryInstruction: string;
}, HookContext<ShipdayService<import("./shipday.class").ShipdayParams>>>;
export declare const shipdayPatchSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    orderId: import("@sinclair/typebox").TNumber;
}>, import("@sinclair/typebox").TObject<{
    orderNumber: import("@sinclair/typebox").TString<string>;
    customerName: import("@sinclair/typebox").TString<string>;
    customerAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    customerEmail: import("@sinclair/typebox").TString<string>;
    customerPhoneNumber: import("@sinclair/typebox").TString<string>;
    restaurantName: import("@sinclair/typebox").TString<string>;
    restaurantAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    restaurantPhoneNumber: import("@sinclair/typebox").TString<string>;
    expectedDeliveryDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    expectedPickupTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    expectedDeliveryTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    pickupLatitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    pickupLongitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryLatitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryLongitude: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    orderItem: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unitPrice: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>>;
    tips: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    discountAmount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    totalOrderCost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryInstruction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    assignedCarrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"int32">>;
    assignedCarrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
}>]>;
export type ShipdayPatch = Static<typeof shipdayPatchSchema>;
export declare const shipdayPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipdayPatchResolver: import("@feathersjs/schema").Resolver<{
    feedback: string;
    customer: {
        address: string;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        latitude: number;
        longitude: number;
    };
    distance: string;
    etaTime: string;
    orderId: number;
    orderNumber: string;
    companyId: string;
    areaId: string;
    restaurant: {
        id: number;
        address: string;
        name: string;
        phoneNumber: string;
        latitude: number;
        longitude: number;
    };
    assignedCarrier: {
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
    };
    activityLog: {
        startTime: string;
        placementTime: string;
        expectedPickupTime: string;
        expectedDeliveryDate: string;
        expectedDeliveryTime: string;
        assignedTime: string;
        pickedUpTime: string;
        arrivedTime: string;
        deliveryTime: string;
    };
    costing: {
        totalCost: string;
        deliveryFee: string;
        tip: string;
        discountAmount: string;
        tax: string;
        cashTip: string;
    };
    orderItem: {
        details?: string | undefined;
        addOns?: string[] | undefined;
        name: string;
        quantity: string;
        unitPrice: string;
    }[];
    assignedCarrierId: string;
    orderStatus: {
        imcomplete: boolean;
        accepted: boolean;
        orderState: string;
    };
    trackingLink: string;
    schedule: boolean;
    parentId: string;
    deliveryInstruction: string;
}, HookContext<ShipdayService<import("./shipday.class").ShipdayParams>>>;
export declare const shipdayQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    orderId: import("@sinclair/typebox").TNumber;
    orderNumber: import("@sinclair/typebox").TString<string>;
    companyId: import("@sinclair/typebox").TString<string>;
    areaId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        emailAddress: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    restaurant: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    assignedCarrier: import("@sinclair/typebox").TObject<{
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
    }>;
    distance: import("@sinclair/typebox").TString<"double">;
    activityLog: import("@sinclair/typebox").TObject<{
        placementTime: import("@sinclair/typebox").TString<"date-time">;
        expectedPickupTime: import("@sinclair/typebox").TString<"time">;
        expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
        expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
        assignedTime: import("@sinclair/typebox").TString<"date-time">;
        startTime: import("@sinclair/typebox").TString<"date-time">;
        pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
        arrivedTime: import("@sinclair/typebox").TString<"date-time">;
        deliveryTime: import("@sinclair/typebox").TString<"date-time">;
    }>;
    costing: import("@sinclair/typebox").TObject<{
        totalCost: import("@sinclair/typebox").TString<"double">;
        deliveryFee: import("@sinclair/typebox").TString<"double">;
        tip: import("@sinclair/typebox").TString<"double">;
        discountAmount: import("@sinclair/typebox").TString<"double">;
        tax: import("@sinclair/typebox").TString<"double">;
        cashTip: import("@sinclair/typebox").TString<"double">;
    }>;
    orderItem: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unitPrice: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    assignedCarrierId: import("@sinclair/typebox").TString<"int32">;
    orderStatus: import("@sinclair/typebox").TObject<{
        imcomplete: import("@sinclair/typebox").TBoolean;
        accepted: import("@sinclair/typebox").TBoolean;
        orderState: import("@sinclair/typebox").TUnsafe<string>;
    }>;
    trackingLink: import("@sinclair/typebox").TString<"uri">;
    feedback: import("@sinclair/typebox").TString<string>;
    schedule: import("@sinclair/typebox").TBoolean;
    parentId: import("@sinclair/typebox").TString<"int32">;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryInstruction: import("@sinclair/typebox").TString<string>;
}>, []>;
export declare const shipdayQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{}>;
    $select: import("@sinclair/typebox").TUnsafe<never[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type ShipdayQuery = Static<typeof shipdayQuerySchema>;
export declare const shipdayQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipdayQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {};
    $select: never[];
    $and: ({} | {
        $or: {}[];
    })[];
    $or: {}[];
}> & {} & {}, HookContext<ShipdayService<import("./shipday.class").ShipdayParams>>>;
