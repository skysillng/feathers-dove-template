import { HookContext } from './declarations';
export declare const defineAbilitiesFor: (user: any) => import("@casl/ability").MongoAbility<import("@casl/ability").AbilityTuple, import("@casl/ability").MongoQuery>;
export declare const authorizeHook: (context: HookContext) => Promise<void>;
