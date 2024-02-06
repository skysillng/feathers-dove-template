import type { Static } from '@feathersjs/typebox';
export declare const configurationSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    authentication: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        secret: import("@sinclair/typebox").TString<string>;
        entity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TNull]>>;
        entityId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        service: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        authStrategies: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        parseStrategies: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        jwtOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>;
        jwt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            header: import("@sinclair/typebox").TString<string>;
            schemes: import("@sinclair/typebox").TString<string>;
        }>>;
        local: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            usernameField: import("@sinclair/typebox").TString<string>;
            passwordField: import("@sinclair/typebox").TString<string>;
            hashSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            errorMessage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            entityUsernameField: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            entityPasswordField: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        oauth: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            redirect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            origins: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            defaults: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                key: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                secret: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
        }>>;
    }>>;
    paginate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        default: import("@sinclair/typebox").TNumber;
        max: import("@sinclair/typebox").TNumber;
    }>>;
    origins: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    mongodb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    mysql: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        client: import("@sinclair/typebox").TString<string>;
        connection: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            host: import("@sinclair/typebox").TString<string>;
            port: import("@sinclair/typebox").TNumber;
            user: import("@sinclair/typebox").TString<string>;
            password: import("@sinclair/typebox").TString<string>;
            database: import("@sinclair/typebox").TString<string>;
        }>>]>;
        pool: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            min: import("@sinclair/typebox").TNumber;
            max: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
    postgresql: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        client: import("@sinclair/typebox").TString<string>;
        connection: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            host: import("@sinclair/typebox").TString<string>;
            port: import("@sinclair/typebox").TNumber;
            user: import("@sinclair/typebox").TString<string>;
            password: import("@sinclair/typebox").TString<string>;
            database: import("@sinclair/typebox").TString<string>;
        }>>]>;
        pool: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            min: import("@sinclair/typebox").TNumber;
            max: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
    sqlite: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        client: import("@sinclair/typebox").TString<string>;
        connection: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            host: import("@sinclair/typebox").TString<string>;
            port: import("@sinclair/typebox").TNumber;
            user: import("@sinclair/typebox").TString<string>;
            password: import("@sinclair/typebox").TString<string>;
            database: import("@sinclair/typebox").TString<string>;
        }>>]>;
        pool: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            min: import("@sinclair/typebox").TNumber;
            max: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
    mssql: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        client: import("@sinclair/typebox").TString<string>;
        connection: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            host: import("@sinclair/typebox").TString<string>;
            port: import("@sinclair/typebox").TNumber;
            user: import("@sinclair/typebox").TString<string>;
            password: import("@sinclair/typebox").TString<string>;
            database: import("@sinclair/typebox").TString<string>;
        }>>]>;
        pool: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            min: import("@sinclair/typebox").TNumber;
            max: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
}>, import("@sinclair/typebox").TObject<{
    host: import("@sinclair/typebox").TString<string>;
    port: import("@sinclair/typebox").TNumber;
    public: import("@sinclair/typebox").TString<string>;
    fee: import("@sinclair/typebox").TObject<{
        flat: import("@sinclair/typebox").TNumber;
        '5km': import("@sinclair/typebox").TNumber;
        '10km': import("@sinclair/typebox").TNumber;
        '15km': import("@sinclair/typebox").TNumber;
        small: import("@sinclair/typebox").TNumber;
        medium: import("@sinclair/typebox").TNumber;
        large: import("@sinclair/typebox").TNumber;
        x_large: import("@sinclair/typebox").TNumber;
        xx_large: import("@sinclair/typebox").TNumber;
        huge: import("@sinclair/typebox").TNumber;
        overweight: import("@sinclair/typebox").TNumber;
        '5': import("@sinclair/typebox").TNumber;
        '11': import("@sinclair/typebox").TNumber;
        '16': import("@sinclair/typebox").TNumber;
        '21': import("@sinclair/typebox").TNumber;
        '26': import("@sinclair/typebox").TNumber;
    }>;
    google: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        mapApikey: import("@sinclair/typebox").TString<string>;
        routeUrl: import("@sinclair/typebox").TString<string>;
        routeKey: import("@sinclair/typebox").TString<string>;
    }>>;
    shipday: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        apiKey: import("@sinclair/typebox").TString<string>;
    }>>;
    twilio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        accountSID: import("@sinclair/typebox").TString<string>;
        authToken: import("@sinclair/typebox").TString<string>;
        serviceSID: import("@sinclair/typebox").TString<string>;
    }>>;
    flutterwave: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        baseUrl: import("@sinclair/typebox").TString<string>;
        publicKey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        secretKey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        secretHash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
}>]>;
export type ApplicationConfiguration = Static<typeof configurationSchema>;
export declare const configurationValidator: import("@feathersjs/schema").Validator<any, any>;
