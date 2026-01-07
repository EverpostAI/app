
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ContentPlan
 * 
 */
export type ContentPlan = $Result.DefaultSelection<Prisma.$ContentPlanPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model ContentHistory
 * 
 */
export type ContentHistory = $Result.DefaultSelection<Prisma.$ContentHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WeekDay: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay]


export const Platform: {
  TWITTER: 'TWITTER',
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  TIKTOK: 'TIKTOK',
  YOUTUBE: 'YOUTUBE'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const ContentType: {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
  TEXT: 'TEXT',
  THREAD: 'THREAD',
  REEL: 'REEL'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]

}

export type WeekDay = $Enums.WeekDay

export const WeekDay: typeof $Enums.WeekDay

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentPlan`: Exposes CRUD operations for the **ContentPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentPlans
    * const contentPlans = await prisma.contentPlan.findMany()
    * ```
    */
  get contentPlan(): Prisma.ContentPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentHistory`: Exposes CRUD operations for the **ContentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentHistories
    * const contentHistories = await prisma.contentHistory.findMany()
    * ```
    */
  get contentHistory(): Prisma.ContentHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ContentPlan: 'ContentPlan',
    Post: 'Post',
    ContentHistory: 'ContentHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "contentPlan" | "post" | "contentHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ContentPlan: {
        payload: Prisma.$ContentPlanPayload<ExtArgs>
        fields: Prisma.ContentPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>
          }
          findFirst: {
            args: Prisma.ContentPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>
          }
          findMany: {
            args: Prisma.ContentPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>[]
          }
          create: {
            args: Prisma.ContentPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>
          }
          createMany: {
            args: Prisma.ContentPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>[]
          }
          delete: {
            args: Prisma.ContentPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>
          }
          update: {
            args: Prisma.ContentPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>
          }
          deleteMany: {
            args: Prisma.ContentPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>[]
          }
          upsert: {
            args: Prisma.ContentPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPlanPayload>
          }
          aggregate: {
            args: Prisma.ContentPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentPlan>
          }
          groupBy: {
            args: Prisma.ContentPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentPlanCountArgs<ExtArgs>
            result: $Utils.Optional<ContentPlanCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      ContentHistory: {
        payload: Prisma.$ContentHistoryPayload<ExtArgs>
        fields: Prisma.ContentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          findFirst: {
            args: Prisma.ContentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          findMany: {
            args: Prisma.ContentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>[]
          }
          create: {
            args: Prisma.ContentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          createMany: {
            args: Prisma.ContentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>[]
          }
          delete: {
            args: Prisma.ContentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          update: {
            args: Prisma.ContentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ContentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ContentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentHistoryPayload>
          }
          aggregate: {
            args: Prisma.ContentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentHistory>
          }
          groupBy: {
            args: Prisma.ContentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ContentHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    contentPlan?: ContentPlanOmit
    post?: PostOmit
    contentHistory?: ContentHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contentPlans: number
    contentHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentPlans?: boolean | UserCountOutputTypeCountContentPlansArgs
    contentHistories?: boolean | UserCountOutputTypeCountContentHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentHistoryWhereInput
  }


  /**
   * Count Type ContentPlanCountOutputType
   */

  export type ContentPlanCountOutputType = {
    posts: number
  }

  export type ContentPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ContentPlanCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * ContentPlanCountOutputType without action
   */
  export type ContentPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlanCountOutputType
     */
    select?: ContentPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentPlanCountOutputType without action
   */
  export type ContentPlanCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    editsThisWeek: number | null
  }

  export type UserSumAggregateOutputType = {
    editsThisWeek: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    googleId: string | null
    profession: string | null
    freePlanStart: Date | null
    editsThisWeek: number | null
    lastEditReset: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    googleId: string | null
    profession: string | null
    freePlanStart: Date | null
    editsThisWeek: number | null
    lastEditReset: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    googleId: number
    profession: number
    freePlanStart: number
    editsThisWeek: number
    lastEditReset: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    editsThisWeek?: true
  }

  export type UserSumAggregateInputType = {
    editsThisWeek?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleId?: true
    profession?: true
    freePlanStart?: true
    editsThisWeek?: true
    lastEditReset?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleId?: true
    profession?: true
    freePlanStart?: true
    editsThisWeek?: true
    lastEditReset?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleId?: true
    profession?: true
    freePlanStart?: true
    editsThisWeek?: true
    lastEditReset?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    googleId: string | null
    profession: string
    freePlanStart: Date | null
    editsThisWeek: number
    lastEditReset: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    profession?: boolean
    freePlanStart?: boolean
    editsThisWeek?: boolean
    lastEditReset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contentPlans?: boolean | User$contentPlansArgs<ExtArgs>
    contentHistories?: boolean | User$contentHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    profession?: boolean
    freePlanStart?: boolean
    editsThisWeek?: boolean
    lastEditReset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    profession?: boolean
    freePlanStart?: boolean
    editsThisWeek?: boolean
    lastEditReset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    profession?: boolean
    freePlanStart?: boolean
    editsThisWeek?: boolean
    lastEditReset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "googleId" | "profession" | "freePlanStart" | "editsThisWeek" | "lastEditReset" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentPlans?: boolean | User$contentPlansArgs<ExtArgs>
    contentHistories?: boolean | User$contentHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contentPlans: Prisma.$ContentPlanPayload<ExtArgs>[]
      contentHistories: Prisma.$ContentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      googleId: string | null
      profession: string
      freePlanStart: Date | null
      editsThisWeek: number
      lastEditReset: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contentPlans<T extends User$contentPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$contentPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentHistories<T extends User$contentHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$contentHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly profession: FieldRef<"User", 'String'>
    readonly freePlanStart: FieldRef<"User", 'DateTime'>
    readonly editsThisWeek: FieldRef<"User", 'Int'>
    readonly lastEditReset: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contentPlans
   */
  export type User$contentPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    where?: ContentPlanWhereInput
    orderBy?: ContentPlanOrderByWithRelationInput | ContentPlanOrderByWithRelationInput[]
    cursor?: ContentPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentPlanScalarFieldEnum | ContentPlanScalarFieldEnum[]
  }

  /**
   * User.contentHistories
   */
  export type User$contentHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    where?: ContentHistoryWhereInput
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    cursor?: ContentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ContentPlan
   */

  export type AggregateContentPlan = {
    _count: ContentPlanCountAggregateOutputType | null
    _min: ContentPlanMinAggregateOutputType | null
    _max: ContentPlanMaxAggregateOutputType | null
  }

  export type ContentPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentPlanCountAggregateOutputType = {
    id: number
    userId: number
    weekStart: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentPlanMinAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentPlanCountAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentPlan to aggregate.
     */
    where?: ContentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPlans to fetch.
     */
    orderBy?: ContentPlanOrderByWithRelationInput | ContentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentPlans
    **/
    _count?: true | ContentPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentPlanMaxAggregateInputType
  }

  export type GetContentPlanAggregateType<T extends ContentPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateContentPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentPlan[P]>
      : GetScalarType<T[P], AggregateContentPlan[P]>
  }




  export type ContentPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentPlanWhereInput
    orderBy?: ContentPlanOrderByWithAggregationInput | ContentPlanOrderByWithAggregationInput[]
    by: ContentPlanScalarFieldEnum[] | ContentPlanScalarFieldEnum
    having?: ContentPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentPlanCountAggregateInputType | true
    _min?: ContentPlanMinAggregateInputType
    _max?: ContentPlanMaxAggregateInputType
  }

  export type ContentPlanGroupByOutputType = {
    id: string
    userId: string
    weekStart: Date
    createdAt: Date
    updatedAt: Date
    _count: ContentPlanCountAggregateOutputType | null
    _min: ContentPlanMinAggregateOutputType | null
    _max: ContentPlanMaxAggregateOutputType | null
  }

  type GetContentPlanGroupByPayload<T extends ContentPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentPlanGroupByOutputType[P]>
            : GetScalarType<T[P], ContentPlanGroupByOutputType[P]>
        }
      >
    >


  export type ContentPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | ContentPlan$postsArgs<ExtArgs>
    _count?: boolean | ContentPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentPlan"]>

  export type ContentPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentPlan"]>

  export type ContentPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentPlan"]>

  export type ContentPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "weekStart" | "createdAt" | "updatedAt", ExtArgs["result"]["contentPlan"]>
  export type ContentPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | ContentPlan$postsArgs<ExtArgs>
    _count?: boolean | ContentPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      weekStart: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentPlan"]>
    composites: {}
  }

  type ContentPlanGetPayload<S extends boolean | null | undefined | ContentPlanDefaultArgs> = $Result.GetResult<Prisma.$ContentPlanPayload, S>

  type ContentPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentPlanCountAggregateInputType | true
    }

  export interface ContentPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentPlan'], meta: { name: 'ContentPlan' } }
    /**
     * Find zero or one ContentPlan that matches the filter.
     * @param {ContentPlanFindUniqueArgs} args - Arguments to find a ContentPlan
     * @example
     * // Get one ContentPlan
     * const contentPlan = await prisma.contentPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentPlanFindUniqueArgs>(args: SelectSubset<T, ContentPlanFindUniqueArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentPlanFindUniqueOrThrowArgs} args - Arguments to find a ContentPlan
     * @example
     * // Get one ContentPlan
     * const contentPlan = await prisma.contentPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPlanFindFirstArgs} args - Arguments to find a ContentPlan
     * @example
     * // Get one ContentPlan
     * const contentPlan = await prisma.contentPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentPlanFindFirstArgs>(args?: SelectSubset<T, ContentPlanFindFirstArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPlanFindFirstOrThrowArgs} args - Arguments to find a ContentPlan
     * @example
     * // Get one ContentPlan
     * const contentPlan = await prisma.contentPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentPlans
     * const contentPlans = await prisma.contentPlan.findMany()
     * 
     * // Get first 10 ContentPlans
     * const contentPlans = await prisma.contentPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentPlanWithIdOnly = await prisma.contentPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentPlanFindManyArgs>(args?: SelectSubset<T, ContentPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentPlan.
     * @param {ContentPlanCreateArgs} args - Arguments to create a ContentPlan.
     * @example
     * // Create one ContentPlan
     * const ContentPlan = await prisma.contentPlan.create({
     *   data: {
     *     // ... data to create a ContentPlan
     *   }
     * })
     * 
     */
    create<T extends ContentPlanCreateArgs>(args: SelectSubset<T, ContentPlanCreateArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentPlans.
     * @param {ContentPlanCreateManyArgs} args - Arguments to create many ContentPlans.
     * @example
     * // Create many ContentPlans
     * const contentPlan = await prisma.contentPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentPlanCreateManyArgs>(args?: SelectSubset<T, ContentPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentPlans and returns the data saved in the database.
     * @param {ContentPlanCreateManyAndReturnArgs} args - Arguments to create many ContentPlans.
     * @example
     * // Create many ContentPlans
     * const contentPlan = await prisma.contentPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentPlans and only return the `id`
     * const contentPlanWithIdOnly = await prisma.contentPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentPlan.
     * @param {ContentPlanDeleteArgs} args - Arguments to delete one ContentPlan.
     * @example
     * // Delete one ContentPlan
     * const ContentPlan = await prisma.contentPlan.delete({
     *   where: {
     *     // ... filter to delete one ContentPlan
     *   }
     * })
     * 
     */
    delete<T extends ContentPlanDeleteArgs>(args: SelectSubset<T, ContentPlanDeleteArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentPlan.
     * @param {ContentPlanUpdateArgs} args - Arguments to update one ContentPlan.
     * @example
     * // Update one ContentPlan
     * const contentPlan = await prisma.contentPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentPlanUpdateArgs>(args: SelectSubset<T, ContentPlanUpdateArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentPlans.
     * @param {ContentPlanDeleteManyArgs} args - Arguments to filter ContentPlans to delete.
     * @example
     * // Delete a few ContentPlans
     * const { count } = await prisma.contentPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentPlanDeleteManyArgs>(args?: SelectSubset<T, ContentPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentPlans
     * const contentPlan = await prisma.contentPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentPlanUpdateManyArgs>(args: SelectSubset<T, ContentPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentPlans and returns the data updated in the database.
     * @param {ContentPlanUpdateManyAndReturnArgs} args - Arguments to update many ContentPlans.
     * @example
     * // Update many ContentPlans
     * const contentPlan = await prisma.contentPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentPlans and only return the `id`
     * const contentPlanWithIdOnly = await prisma.contentPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentPlan.
     * @param {ContentPlanUpsertArgs} args - Arguments to update or create a ContentPlan.
     * @example
     * // Update or create a ContentPlan
     * const contentPlan = await prisma.contentPlan.upsert({
     *   create: {
     *     // ... data to create a ContentPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentPlan we want to update
     *   }
     * })
     */
    upsert<T extends ContentPlanUpsertArgs>(args: SelectSubset<T, ContentPlanUpsertArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPlanCountArgs} args - Arguments to filter ContentPlans to count.
     * @example
     * // Count the number of ContentPlans
     * const count = await prisma.contentPlan.count({
     *   where: {
     *     // ... the filter for the ContentPlans we want to count
     *   }
     * })
    **/
    count<T extends ContentPlanCountArgs>(
      args?: Subset<T, ContentPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentPlanAggregateArgs>(args: Subset<T, ContentPlanAggregateArgs>): Prisma.PrismaPromise<GetContentPlanAggregateType<T>>

    /**
     * Group by ContentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentPlanGroupByArgs['orderBy'] }
        : { orderBy?: ContentPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentPlan model
   */
  readonly fields: ContentPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends ContentPlan$postsArgs<ExtArgs> = {}>(args?: Subset<T, ContentPlan$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentPlan model
   */
  interface ContentPlanFieldRefs {
    readonly id: FieldRef<"ContentPlan", 'String'>
    readonly userId: FieldRef<"ContentPlan", 'String'>
    readonly weekStart: FieldRef<"ContentPlan", 'DateTime'>
    readonly createdAt: FieldRef<"ContentPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentPlan findUnique
   */
  export type ContentPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ContentPlan to fetch.
     */
    where: ContentPlanWhereUniqueInput
  }

  /**
   * ContentPlan findUniqueOrThrow
   */
  export type ContentPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ContentPlan to fetch.
     */
    where: ContentPlanWhereUniqueInput
  }

  /**
   * ContentPlan findFirst
   */
  export type ContentPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ContentPlan to fetch.
     */
    where?: ContentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPlans to fetch.
     */
    orderBy?: ContentPlanOrderByWithRelationInput | ContentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentPlans.
     */
    cursor?: ContentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentPlans.
     */
    distinct?: ContentPlanScalarFieldEnum | ContentPlanScalarFieldEnum[]
  }

  /**
   * ContentPlan findFirstOrThrow
   */
  export type ContentPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ContentPlan to fetch.
     */
    where?: ContentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPlans to fetch.
     */
    orderBy?: ContentPlanOrderByWithRelationInput | ContentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentPlans.
     */
    cursor?: ContentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentPlans.
     */
    distinct?: ContentPlanScalarFieldEnum | ContentPlanScalarFieldEnum[]
  }

  /**
   * ContentPlan findMany
   */
  export type ContentPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ContentPlans to fetch.
     */
    where?: ContentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPlans to fetch.
     */
    orderBy?: ContentPlanOrderByWithRelationInput | ContentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentPlans.
     */
    cursor?: ContentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPlans.
     */
    skip?: number
    distinct?: ContentPlanScalarFieldEnum | ContentPlanScalarFieldEnum[]
  }

  /**
   * ContentPlan create
   */
  export type ContentPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentPlan.
     */
    data: XOR<ContentPlanCreateInput, ContentPlanUncheckedCreateInput>
  }

  /**
   * ContentPlan createMany
   */
  export type ContentPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentPlans.
     */
    data: ContentPlanCreateManyInput | ContentPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentPlan createManyAndReturn
   */
  export type ContentPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * The data used to create many ContentPlans.
     */
    data: ContentPlanCreateManyInput | ContentPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentPlan update
   */
  export type ContentPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentPlan.
     */
    data: XOR<ContentPlanUpdateInput, ContentPlanUncheckedUpdateInput>
    /**
     * Choose, which ContentPlan to update.
     */
    where: ContentPlanWhereUniqueInput
  }

  /**
   * ContentPlan updateMany
   */
  export type ContentPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentPlans.
     */
    data: XOR<ContentPlanUpdateManyMutationInput, ContentPlanUncheckedUpdateManyInput>
    /**
     * Filter which ContentPlans to update
     */
    where?: ContentPlanWhereInput
    /**
     * Limit how many ContentPlans to update.
     */
    limit?: number
  }

  /**
   * ContentPlan updateManyAndReturn
   */
  export type ContentPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * The data used to update ContentPlans.
     */
    data: XOR<ContentPlanUpdateManyMutationInput, ContentPlanUncheckedUpdateManyInput>
    /**
     * Filter which ContentPlans to update
     */
    where?: ContentPlanWhereInput
    /**
     * Limit how many ContentPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentPlan upsert
   */
  export type ContentPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentPlan to update in case it exists.
     */
    where: ContentPlanWhereUniqueInput
    /**
     * In case the ContentPlan found by the `where` argument doesn't exist, create a new ContentPlan with this data.
     */
    create: XOR<ContentPlanCreateInput, ContentPlanUncheckedCreateInput>
    /**
     * In case the ContentPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentPlanUpdateInput, ContentPlanUncheckedUpdateInput>
  }

  /**
   * ContentPlan delete
   */
  export type ContentPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
    /**
     * Filter which ContentPlan to delete.
     */
    where: ContentPlanWhereUniqueInput
  }

  /**
   * ContentPlan deleteMany
   */
  export type ContentPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentPlans to delete
     */
    where?: ContentPlanWhereInput
    /**
     * Limit how many ContentPlans to delete.
     */
    limit?: number
  }

  /**
   * ContentPlan.posts
   */
  export type ContentPlan$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * ContentPlan without action
   */
  export type ContentPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPlan
     */
    select?: ContentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPlan
     */
    omit?: ContentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPlanInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    planId: string | null
    day: $Enums.WeekDay | null
    platform: $Enums.Platform | null
    contentType: $Enums.ContentType | null
    idea: string | null
    hook: string | null
    scheduledFor: Date | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    day: $Enums.WeekDay | null
    platform: $Enums.Platform | null
    contentType: $Enums.ContentType | null
    idea: string | null
    hook: string | null
    scheduledFor: Date | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    planId: number
    day: number
    platform: number
    contentType: number
    idea: number
    hook: number
    scheduledFor: number
    metadata: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    planId?: true
    day?: true
    platform?: true
    contentType?: true
    idea?: true
    hook?: true
    scheduledFor?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    planId?: true
    day?: true
    platform?: true
    contentType?: true
    idea?: true
    hook?: true
    scheduledFor?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    planId?: true
    day?: true
    platform?: true
    contentType?: true
    idea?: true
    hook?: true
    scheduledFor?: true
    metadata?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    planId: string
    day: $Enums.WeekDay
    platform: $Enums.Platform
    contentType: $Enums.ContentType
    idea: string
    hook: string
    scheduledFor: Date | null
    metadata: JsonValue | null
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    day?: boolean
    platform?: boolean
    contentType?: boolean
    idea?: boolean
    hook?: boolean
    scheduledFor?: boolean
    metadata?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | ContentPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    day?: boolean
    platform?: boolean
    contentType?: boolean
    idea?: boolean
    hook?: boolean
    scheduledFor?: boolean
    metadata?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | ContentPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    day?: boolean
    platform?: boolean
    contentType?: boolean
    idea?: boolean
    hook?: boolean
    scheduledFor?: boolean
    metadata?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | ContentPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    planId?: boolean
    day?: boolean
    platform?: boolean
    contentType?: boolean
    idea?: boolean
    hook?: boolean
    scheduledFor?: boolean
    metadata?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "day" | "platform" | "contentType" | "idea" | "hook" | "scheduledFor" | "metadata" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | ContentPlanDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | ContentPlanDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | ContentPlanDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      plan: Prisma.$ContentPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      day: $Enums.WeekDay
      platform: $Enums.Platform
      contentType: $Enums.ContentType
      idea: string
      hook: string
      scheduledFor: Date | null
      metadata: Prisma.JsonValue | null
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends ContentPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentPlanDefaultArgs<ExtArgs>>): Prisma__ContentPlanClient<$Result.GetResult<Prisma.$ContentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly planId: FieldRef<"Post", 'String'>
    readonly day: FieldRef<"Post", 'WeekDay'>
    readonly platform: FieldRef<"Post", 'Platform'>
    readonly contentType: FieldRef<"Post", 'ContentType'>
    readonly idea: FieldRef<"Post", 'String'>
    readonly hook: FieldRef<"Post", 'String'>
    readonly scheduledFor: FieldRef<"Post", 'DateTime'>
    readonly metadata: FieldRef<"Post", 'Json'>
    readonly completed: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model ContentHistory
   */

  export type AggregateContentHistory = {
    _count: ContentHistoryCountAggregateOutputType | null
    _min: ContentHistoryMinAggregateOutputType | null
    _max: ContentHistoryMaxAggregateOutputType | null
  }

  export type ContentHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentHistoryCountAggregateOutputType = {
    id: number
    userId: number
    theme: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentHistory to aggregate.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentHistories
    **/
    _count?: true | ContentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentHistoryMaxAggregateInputType
  }

  export type GetContentHistoryAggregateType<T extends ContentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateContentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentHistory[P]>
      : GetScalarType<T[P], AggregateContentHistory[P]>
  }




  export type ContentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentHistoryWhereInput
    orderBy?: ContentHistoryOrderByWithAggregationInput | ContentHistoryOrderByWithAggregationInput[]
    by: ContentHistoryScalarFieldEnum[] | ContentHistoryScalarFieldEnum
    having?: ContentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentHistoryCountAggregateInputType | true
    _min?: ContentHistoryMinAggregateInputType
    _max?: ContentHistoryMaxAggregateInputType
  }

  export type ContentHistoryGroupByOutputType = {
    id: string
    userId: string
    theme: string
    createdAt: Date
    updatedAt: Date
    _count: ContentHistoryCountAggregateOutputType | null
    _min: ContentHistoryMinAggregateOutputType | null
    _max: ContentHistoryMaxAggregateOutputType | null
  }

  type GetContentHistoryGroupByPayload<T extends ContentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ContentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ContentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentHistory"]>

  export type ContentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentHistory"]>

  export type ContentHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentHistory"]>

  export type ContentHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "theme" | "createdAt" | "updatedAt", ExtArgs["result"]["contentHistory"]>
  export type ContentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      theme: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentHistory"]>
    composites: {}
  }

  type ContentHistoryGetPayload<S extends boolean | null | undefined | ContentHistoryDefaultArgs> = $Result.GetResult<Prisma.$ContentHistoryPayload, S>

  type ContentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentHistoryCountAggregateInputType | true
    }

  export interface ContentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentHistory'], meta: { name: 'ContentHistory' } }
    /**
     * Find zero or one ContentHistory that matches the filter.
     * @param {ContentHistoryFindUniqueArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentHistoryFindUniqueArgs>(args: SelectSubset<T, ContentHistoryFindUniqueArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentHistoryFindUniqueOrThrowArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryFindFirstArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentHistoryFindFirstArgs>(args?: SelectSubset<T, ContentHistoryFindFirstArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryFindFirstOrThrowArgs} args - Arguments to find a ContentHistory
     * @example
     * // Get one ContentHistory
     * const contentHistory = await prisma.contentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentHistories
     * const contentHistories = await prisma.contentHistory.findMany()
     * 
     * // Get first 10 ContentHistories
     * const contentHistories = await prisma.contentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentHistoryWithIdOnly = await prisma.contentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentHistoryFindManyArgs>(args?: SelectSubset<T, ContentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentHistory.
     * @param {ContentHistoryCreateArgs} args - Arguments to create a ContentHistory.
     * @example
     * // Create one ContentHistory
     * const ContentHistory = await prisma.contentHistory.create({
     *   data: {
     *     // ... data to create a ContentHistory
     *   }
     * })
     * 
     */
    create<T extends ContentHistoryCreateArgs>(args: SelectSubset<T, ContentHistoryCreateArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentHistories.
     * @param {ContentHistoryCreateManyArgs} args - Arguments to create many ContentHistories.
     * @example
     * // Create many ContentHistories
     * const contentHistory = await prisma.contentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentHistoryCreateManyArgs>(args?: SelectSubset<T, ContentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentHistories and returns the data saved in the database.
     * @param {ContentHistoryCreateManyAndReturnArgs} args - Arguments to create many ContentHistories.
     * @example
     * // Create many ContentHistories
     * const contentHistory = await prisma.contentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentHistories and only return the `id`
     * const contentHistoryWithIdOnly = await prisma.contentHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentHistory.
     * @param {ContentHistoryDeleteArgs} args - Arguments to delete one ContentHistory.
     * @example
     * // Delete one ContentHistory
     * const ContentHistory = await prisma.contentHistory.delete({
     *   where: {
     *     // ... filter to delete one ContentHistory
     *   }
     * })
     * 
     */
    delete<T extends ContentHistoryDeleteArgs>(args: SelectSubset<T, ContentHistoryDeleteArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentHistory.
     * @param {ContentHistoryUpdateArgs} args - Arguments to update one ContentHistory.
     * @example
     * // Update one ContentHistory
     * const contentHistory = await prisma.contentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentHistoryUpdateArgs>(args: SelectSubset<T, ContentHistoryUpdateArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentHistories.
     * @param {ContentHistoryDeleteManyArgs} args - Arguments to filter ContentHistories to delete.
     * @example
     * // Delete a few ContentHistories
     * const { count } = await prisma.contentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentHistoryDeleteManyArgs>(args?: SelectSubset<T, ContentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentHistories
     * const contentHistory = await prisma.contentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentHistoryUpdateManyArgs>(args: SelectSubset<T, ContentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentHistories and returns the data updated in the database.
     * @param {ContentHistoryUpdateManyAndReturnArgs} args - Arguments to update many ContentHistories.
     * @example
     * // Update many ContentHistories
     * const contentHistory = await prisma.contentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentHistories and only return the `id`
     * const contentHistoryWithIdOnly = await prisma.contentHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentHistory.
     * @param {ContentHistoryUpsertArgs} args - Arguments to update or create a ContentHistory.
     * @example
     * // Update or create a ContentHistory
     * const contentHistory = await prisma.contentHistory.upsert({
     *   create: {
     *     // ... data to create a ContentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentHistory we want to update
     *   }
     * })
     */
    upsert<T extends ContentHistoryUpsertArgs>(args: SelectSubset<T, ContentHistoryUpsertArgs<ExtArgs>>): Prisma__ContentHistoryClient<$Result.GetResult<Prisma.$ContentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryCountArgs} args - Arguments to filter ContentHistories to count.
     * @example
     * // Count the number of ContentHistories
     * const count = await prisma.contentHistory.count({
     *   where: {
     *     // ... the filter for the ContentHistories we want to count
     *   }
     * })
    **/
    count<T extends ContentHistoryCountArgs>(
      args?: Subset<T, ContentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentHistoryAggregateArgs>(args: Subset<T, ContentHistoryAggregateArgs>): Prisma.PrismaPromise<GetContentHistoryAggregateType<T>>

    /**
     * Group by ContentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ContentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentHistory model
   */
  readonly fields: ContentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentHistory model
   */
  interface ContentHistoryFieldRefs {
    readonly id: FieldRef<"ContentHistory", 'String'>
    readonly userId: FieldRef<"ContentHistory", 'String'>
    readonly theme: FieldRef<"ContentHistory", 'String'>
    readonly createdAt: FieldRef<"ContentHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentHistory findUnique
   */
  export type ContentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory findUniqueOrThrow
   */
  export type ContentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory findFirst
   */
  export type ContentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentHistories.
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentHistories.
     */
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * ContentHistory findFirstOrThrow
   */
  export type ContentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistory to fetch.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentHistories.
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentHistories.
     */
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * ContentHistory findMany
   */
  export type ContentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ContentHistories to fetch.
     */
    where?: ContentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentHistories to fetch.
     */
    orderBy?: ContentHistoryOrderByWithRelationInput | ContentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentHistories.
     */
    cursor?: ContentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentHistories.
     */
    skip?: number
    distinct?: ContentHistoryScalarFieldEnum | ContentHistoryScalarFieldEnum[]
  }

  /**
   * ContentHistory create
   */
  export type ContentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentHistory.
     */
    data: XOR<ContentHistoryCreateInput, ContentHistoryUncheckedCreateInput>
  }

  /**
   * ContentHistory createMany
   */
  export type ContentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentHistories.
     */
    data: ContentHistoryCreateManyInput | ContentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentHistory createManyAndReturn
   */
  export type ContentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ContentHistories.
     */
    data: ContentHistoryCreateManyInput | ContentHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentHistory update
   */
  export type ContentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentHistory.
     */
    data: XOR<ContentHistoryUpdateInput, ContentHistoryUncheckedUpdateInput>
    /**
     * Choose, which ContentHistory to update.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory updateMany
   */
  export type ContentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentHistories.
     */
    data: XOR<ContentHistoryUpdateManyMutationInput, ContentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ContentHistories to update
     */
    where?: ContentHistoryWhereInput
    /**
     * Limit how many ContentHistories to update.
     */
    limit?: number
  }

  /**
   * ContentHistory updateManyAndReturn
   */
  export type ContentHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ContentHistories.
     */
    data: XOR<ContentHistoryUpdateManyMutationInput, ContentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ContentHistories to update
     */
    where?: ContentHistoryWhereInput
    /**
     * Limit how many ContentHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentHistory upsert
   */
  export type ContentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentHistory to update in case it exists.
     */
    where: ContentHistoryWhereUniqueInput
    /**
     * In case the ContentHistory found by the `where` argument doesn't exist, create a new ContentHistory with this data.
     */
    create: XOR<ContentHistoryCreateInput, ContentHistoryUncheckedCreateInput>
    /**
     * In case the ContentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentHistoryUpdateInput, ContentHistoryUncheckedUpdateInput>
  }

  /**
   * ContentHistory delete
   */
  export type ContentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
    /**
     * Filter which ContentHistory to delete.
     */
    where: ContentHistoryWhereUniqueInput
  }

  /**
   * ContentHistory deleteMany
   */
  export type ContentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentHistories to delete
     */
    where?: ContentHistoryWhereInput
    /**
     * Limit how many ContentHistories to delete.
     */
    limit?: number
  }

  /**
   * ContentHistory without action
   */
  export type ContentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentHistory
     */
    select?: ContentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentHistory
     */
    omit?: ContentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    googleId: 'googleId',
    profession: 'profession',
    freePlanStart: 'freePlanStart',
    editsThisWeek: 'editsThisWeek',
    lastEditReset: 'lastEditReset',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContentPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekStart: 'weekStart',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentPlanScalarFieldEnum = (typeof ContentPlanScalarFieldEnum)[keyof typeof ContentPlanScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    day: 'day',
    platform: 'platform',
    contentType: 'contentType',
    idea: 'idea',
    hook: 'hook',
    scheduledFor: 'scheduledFor',
    metadata: 'metadata',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ContentHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    theme: 'theme',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentHistoryScalarFieldEnum = (typeof ContentHistoryScalarFieldEnum)[keyof typeof ContentHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WeekDay'
   */
  export type EnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay'>
    


  /**
   * Reference to a field of type 'WeekDay[]'
   */
  export type ListEnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    profession?: StringFilter<"User"> | string
    freePlanStart?: DateTimeNullableFilter<"User"> | Date | string | null
    editsThisWeek?: IntFilter<"User"> | number
    lastEditReset?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    contentPlans?: ContentPlanListRelationFilter
    contentHistories?: ContentHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    profession?: SortOrder
    freePlanStart?: SortOrderInput | SortOrder
    editsThisWeek?: SortOrder
    lastEditReset?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contentPlans?: ContentPlanOrderByRelationAggregateInput
    contentHistories?: ContentHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    profession?: StringFilter<"User"> | string
    freePlanStart?: DateTimeNullableFilter<"User"> | Date | string | null
    editsThisWeek?: IntFilter<"User"> | number
    lastEditReset?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    contentPlans?: ContentPlanListRelationFilter
    contentHistories?: ContentHistoryListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    profession?: SortOrder
    freePlanStart?: SortOrderInput | SortOrder
    editsThisWeek?: SortOrder
    lastEditReset?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    profession?: StringWithAggregatesFilter<"User"> | string
    freePlanStart?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    editsThisWeek?: IntWithAggregatesFilter<"User"> | number
    lastEditReset?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContentPlanWhereInput = {
    AND?: ContentPlanWhereInput | ContentPlanWhereInput[]
    OR?: ContentPlanWhereInput[]
    NOT?: ContentPlanWhereInput | ContentPlanWhereInput[]
    id?: StringFilter<"ContentPlan"> | string
    userId?: StringFilter<"ContentPlan"> | string
    weekStart?: DateTimeFilter<"ContentPlan"> | Date | string
    createdAt?: DateTimeFilter<"ContentPlan"> | Date | string
    updatedAt?: DateTimeFilter<"ContentPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
  }

  export type ContentPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type ContentPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_weekStart?: ContentPlanUserIdWeekStartCompoundUniqueInput
    AND?: ContentPlanWhereInput | ContentPlanWhereInput[]
    OR?: ContentPlanWhereInput[]
    NOT?: ContentPlanWhereInput | ContentPlanWhereInput[]
    userId?: StringFilter<"ContentPlan"> | string
    weekStart?: DateTimeFilter<"ContentPlan"> | Date | string
    createdAt?: DateTimeFilter<"ContentPlan"> | Date | string
    updatedAt?: DateTimeFilter<"ContentPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
  }, "id" | "userId_weekStart">

  export type ContentPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentPlanCountOrderByAggregateInput
    _max?: ContentPlanMaxOrderByAggregateInput
    _min?: ContentPlanMinOrderByAggregateInput
  }

  export type ContentPlanScalarWhereWithAggregatesInput = {
    AND?: ContentPlanScalarWhereWithAggregatesInput | ContentPlanScalarWhereWithAggregatesInput[]
    OR?: ContentPlanScalarWhereWithAggregatesInput[]
    NOT?: ContentPlanScalarWhereWithAggregatesInput | ContentPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentPlan"> | string
    userId?: StringWithAggregatesFilter<"ContentPlan"> | string
    weekStart?: DateTimeWithAggregatesFilter<"ContentPlan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ContentPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentPlan"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    planId?: StringFilter<"Post"> | string
    day?: EnumWeekDayFilter<"Post"> | $Enums.WeekDay
    platform?: EnumPlatformFilter<"Post"> | $Enums.Platform
    contentType?: EnumContentTypeFilter<"Post"> | $Enums.ContentType
    idea?: StringFilter<"Post"> | string
    hook?: StringFilter<"Post"> | string
    scheduledFor?: DateTimeNullableFilter<"Post"> | Date | string | null
    metadata?: JsonNullableFilter<"Post">
    completed?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    plan?: XOR<ContentPlanScalarRelationFilter, ContentPlanWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    day?: SortOrder
    platform?: SortOrder
    contentType?: SortOrder
    idea?: SortOrder
    hook?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: ContentPlanOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    planId?: StringFilter<"Post"> | string
    day?: EnumWeekDayFilter<"Post"> | $Enums.WeekDay
    platform?: EnumPlatformFilter<"Post"> | $Enums.Platform
    contentType?: EnumContentTypeFilter<"Post"> | $Enums.ContentType
    idea?: StringFilter<"Post"> | string
    hook?: StringFilter<"Post"> | string
    scheduledFor?: DateTimeNullableFilter<"Post"> | Date | string | null
    metadata?: JsonNullableFilter<"Post">
    completed?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    plan?: XOR<ContentPlanScalarRelationFilter, ContentPlanWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    day?: SortOrder
    platform?: SortOrder
    contentType?: SortOrder
    idea?: SortOrder
    hook?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    planId?: StringWithAggregatesFilter<"Post"> | string
    day?: EnumWeekDayWithAggregatesFilter<"Post"> | $Enums.WeekDay
    platform?: EnumPlatformWithAggregatesFilter<"Post"> | $Enums.Platform
    contentType?: EnumContentTypeWithAggregatesFilter<"Post"> | $Enums.ContentType
    idea?: StringWithAggregatesFilter<"Post"> | string
    hook?: StringWithAggregatesFilter<"Post"> | string
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Post">
    completed?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type ContentHistoryWhereInput = {
    AND?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    OR?: ContentHistoryWhereInput[]
    NOT?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    id?: StringFilter<"ContentHistory"> | string
    userId?: StringFilter<"ContentHistory"> | string
    theme?: StringFilter<"ContentHistory"> | string
    createdAt?: DateTimeFilter<"ContentHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ContentHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    OR?: ContentHistoryWhereInput[]
    NOT?: ContentHistoryWhereInput | ContentHistoryWhereInput[]
    userId?: StringFilter<"ContentHistory"> | string
    theme?: StringFilter<"ContentHistory"> | string
    createdAt?: DateTimeFilter<"ContentHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ContentHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentHistoryCountOrderByAggregateInput
    _max?: ContentHistoryMaxOrderByAggregateInput
    _min?: ContentHistoryMinOrderByAggregateInput
  }

  export type ContentHistoryScalarWhereWithAggregatesInput = {
    AND?: ContentHistoryScalarWhereWithAggregatesInput | ContentHistoryScalarWhereWithAggregatesInput[]
    OR?: ContentHistoryScalarWhereWithAggregatesInput[]
    NOT?: ContentHistoryScalarWhereWithAggregatesInput | ContentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentHistory"> | string
    userId?: StringWithAggregatesFilter<"ContentHistory"> | string
    theme?: StringWithAggregatesFilter<"ContentHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContentHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    profession: string
    freePlanStart?: Date | string | null
    editsThisWeek?: number
    lastEditReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentPlans?: ContentPlanCreateNestedManyWithoutUserInput
    contentHistories?: ContentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    profession: string
    freePlanStart?: Date | string | null
    editsThisWeek?: number
    lastEditReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentPlans?: ContentPlanUncheckedCreateNestedManyWithoutUserInput
    contentHistories?: ContentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentPlans?: ContentPlanUpdateManyWithoutUserNestedInput
    contentHistories?: ContentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentPlans?: ContentPlanUncheckedUpdateManyWithoutUserNestedInput
    contentHistories?: ContentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    profession: string
    freePlanStart?: Date | string | null
    editsThisWeek?: number
    lastEditReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPlanCreateInput = {
    id?: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContentPlansInput
    posts?: PostCreateNestedManyWithoutPlanInput
  }

  export type ContentPlanUncheckedCreateInput = {
    id?: string
    userId: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPlanInput
  }

  export type ContentPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentPlansNestedInput
    posts?: PostUpdateManyWithoutPlanNestedInput
  }

  export type ContentPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type ContentPlanCreateManyInput = {
    id?: string
    userId: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    day: $Enums.WeekDay
    platform: $Enums.Platform
    contentType: $Enums.ContentType
    idea: string
    hook: string
    scheduledFor?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: ContentPlanCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    planId: string
    day: $Enums.WeekDay
    platform: $Enums.Platform
    contentType: $Enums.ContentType
    idea: string
    hook: string
    scheduledFor?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    idea?: StringFieldUpdateOperationsInput | string
    hook?: StringFieldUpdateOperationsInput | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: ContentPlanUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    idea?: StringFieldUpdateOperationsInput | string
    hook?: StringFieldUpdateOperationsInput | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    planId: string
    day: $Enums.WeekDay
    platform: $Enums.Platform
    contentType: $Enums.ContentType
    idea: string
    hook: string
    scheduledFor?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    idea?: StringFieldUpdateOperationsInput | string
    hook?: StringFieldUpdateOperationsInput | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    idea?: StringFieldUpdateOperationsInput | string
    hook?: StringFieldUpdateOperationsInput | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryCreateInput = {
    id?: string
    theme: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContentHistoriesInput
  }

  export type ContentHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    theme: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentHistoriesNestedInput
  }

  export type ContentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryCreateManyInput = {
    id?: string
    userId: string
    theme: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContentPlanListRelationFilter = {
    every?: ContentPlanWhereInput
    some?: ContentPlanWhereInput
    none?: ContentPlanWhereInput
  }

  export type ContentHistoryListRelationFilter = {
    every?: ContentHistoryWhereInput
    some?: ContentHistoryWhereInput
    none?: ContentHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContentPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    profession?: SortOrder
    freePlanStart?: SortOrder
    editsThisWeek?: SortOrder
    lastEditReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    editsThisWeek?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    profession?: SortOrder
    freePlanStart?: SortOrder
    editsThisWeek?: SortOrder
    lastEditReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    profession?: SortOrder
    freePlanStart?: SortOrder
    editsThisWeek?: SortOrder
    lastEditReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    editsThisWeek?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentPlanUserIdWeekStartCompoundUniqueInput = {
    userId: string
    weekStart: Date | string
  }

  export type ContentPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContentPlanScalarRelationFilter = {
    is?: ContentPlanWhereInput
    isNot?: ContentPlanWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    day?: SortOrder
    platform?: SortOrder
    contentType?: SortOrder
    idea?: SortOrder
    hook?: SortOrder
    scheduledFor?: SortOrder
    metadata?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    day?: SortOrder
    platform?: SortOrder
    contentType?: SortOrder
    idea?: SortOrder
    hook?: SortOrder
    scheduledFor?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    day?: SortOrder
    platform?: SortOrder
    contentType?: SortOrder
    idea?: SortOrder
    hook?: SortOrder
    scheduledFor?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentPlanCreateWithoutUserInput, ContentPlanUncheckedCreateWithoutUserInput> | ContentPlanCreateWithoutUserInput[] | ContentPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPlanCreateOrConnectWithoutUserInput | ContentPlanCreateOrConnectWithoutUserInput[]
    createMany?: ContentPlanCreateManyUserInputEnvelope
    connect?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
  }

  export type ContentHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentHistoryCreateWithoutUserInput, ContentHistoryUncheckedCreateWithoutUserInput> | ContentHistoryCreateWithoutUserInput[] | ContentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutUserInput | ContentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ContentHistoryCreateManyUserInputEnvelope
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
  }

  export type ContentPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentPlanCreateWithoutUserInput, ContentPlanUncheckedCreateWithoutUserInput> | ContentPlanCreateWithoutUserInput[] | ContentPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPlanCreateOrConnectWithoutUserInput | ContentPlanCreateOrConnectWithoutUserInput[]
    createMany?: ContentPlanCreateManyUserInputEnvelope
    connect?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
  }

  export type ContentHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentHistoryCreateWithoutUserInput, ContentHistoryUncheckedCreateWithoutUserInput> | ContentHistoryCreateWithoutUserInput[] | ContentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutUserInput | ContentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ContentHistoryCreateManyUserInputEnvelope
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContentPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentPlanCreateWithoutUserInput, ContentPlanUncheckedCreateWithoutUserInput> | ContentPlanCreateWithoutUserInput[] | ContentPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPlanCreateOrConnectWithoutUserInput | ContentPlanCreateOrConnectWithoutUserInput[]
    upsert?: ContentPlanUpsertWithWhereUniqueWithoutUserInput | ContentPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentPlanCreateManyUserInputEnvelope
    set?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    disconnect?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    delete?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    connect?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    update?: ContentPlanUpdateWithWhereUniqueWithoutUserInput | ContentPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentPlanUpdateManyWithWhereWithoutUserInput | ContentPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentPlanScalarWhereInput | ContentPlanScalarWhereInput[]
  }

  export type ContentHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentHistoryCreateWithoutUserInput, ContentHistoryUncheckedCreateWithoutUserInput> | ContentHistoryCreateWithoutUserInput[] | ContentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutUserInput | ContentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ContentHistoryUpsertWithWhereUniqueWithoutUserInput | ContentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentHistoryCreateManyUserInputEnvelope
    set?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    disconnect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    delete?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    update?: ContentHistoryUpdateWithWhereUniqueWithoutUserInput | ContentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentHistoryUpdateManyWithWhereWithoutUserInput | ContentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
  }

  export type ContentPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentPlanCreateWithoutUserInput, ContentPlanUncheckedCreateWithoutUserInput> | ContentPlanCreateWithoutUserInput[] | ContentPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPlanCreateOrConnectWithoutUserInput | ContentPlanCreateOrConnectWithoutUserInput[]
    upsert?: ContentPlanUpsertWithWhereUniqueWithoutUserInput | ContentPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentPlanCreateManyUserInputEnvelope
    set?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    disconnect?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    delete?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    connect?: ContentPlanWhereUniqueInput | ContentPlanWhereUniqueInput[]
    update?: ContentPlanUpdateWithWhereUniqueWithoutUserInput | ContentPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentPlanUpdateManyWithWhereWithoutUserInput | ContentPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentPlanScalarWhereInput | ContentPlanScalarWhereInput[]
  }

  export type ContentHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentHistoryCreateWithoutUserInput, ContentHistoryUncheckedCreateWithoutUserInput> | ContentHistoryCreateWithoutUserInput[] | ContentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentHistoryCreateOrConnectWithoutUserInput | ContentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ContentHistoryUpsertWithWhereUniqueWithoutUserInput | ContentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentHistoryCreateManyUserInputEnvelope
    set?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    disconnect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    delete?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    connect?: ContentHistoryWhereUniqueInput | ContentHistoryWhereUniqueInput[]
    update?: ContentHistoryUpdateWithWhereUniqueWithoutUserInput | ContentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentHistoryUpdateManyWithWhereWithoutUserInput | ContentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContentPlansInput = {
    create?: XOR<UserCreateWithoutContentPlansInput, UserUncheckedCreateWithoutContentPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentPlansInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutPlanInput = {
    create?: XOR<PostCreateWithoutPlanInput, PostUncheckedCreateWithoutPlanInput> | PostCreateWithoutPlanInput[] | PostUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPlanInput | PostCreateOrConnectWithoutPlanInput[]
    createMany?: PostCreateManyPlanInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PostCreateWithoutPlanInput, PostUncheckedCreateWithoutPlanInput> | PostCreateWithoutPlanInput[] | PostUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPlanInput | PostCreateOrConnectWithoutPlanInput[]
    createMany?: PostCreateManyPlanInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutContentPlansNestedInput = {
    create?: XOR<UserCreateWithoutContentPlansInput, UserUncheckedCreateWithoutContentPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentPlansInput
    upsert?: UserUpsertWithoutContentPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentPlansInput, UserUpdateWithoutContentPlansInput>, UserUncheckedUpdateWithoutContentPlansInput>
  }

  export type PostUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PostCreateWithoutPlanInput, PostUncheckedCreateWithoutPlanInput> | PostCreateWithoutPlanInput[] | PostUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPlanInput | PostCreateOrConnectWithoutPlanInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPlanInput | PostUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PostCreateManyPlanInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPlanInput | PostUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPlanInput | PostUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PostCreateWithoutPlanInput, PostUncheckedCreateWithoutPlanInput> | PostCreateWithoutPlanInput[] | PostUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPlanInput | PostCreateOrConnectWithoutPlanInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPlanInput | PostUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PostCreateManyPlanInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPlanInput | PostUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPlanInput | PostUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ContentPlanCreateNestedOneWithoutPostsInput = {
    create?: XOR<ContentPlanCreateWithoutPostsInput, ContentPlanUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ContentPlanCreateOrConnectWithoutPostsInput
    connect?: ContentPlanWhereUniqueInput
  }

  export type EnumWeekDayFieldUpdateOperationsInput = {
    set?: $Enums.WeekDay
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContentPlanUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<ContentPlanCreateWithoutPostsInput, ContentPlanUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ContentPlanCreateOrConnectWithoutPostsInput
    upsert?: ContentPlanUpsertWithoutPostsInput
    connect?: ContentPlanWhereUniqueInput
    update?: XOR<XOR<ContentPlanUpdateToOneWithWhereWithoutPostsInput, ContentPlanUpdateWithoutPostsInput>, ContentPlanUncheckedUpdateWithoutPostsInput>
  }

  export type UserCreateNestedOneWithoutContentHistoriesInput = {
    create?: XOR<UserCreateWithoutContentHistoriesInput, UserUncheckedCreateWithoutContentHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContentHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutContentHistoriesInput, UserUncheckedCreateWithoutContentHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentHistoriesInput
    upsert?: UserUpsertWithoutContentHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentHistoriesInput, UserUpdateWithoutContentHistoriesInput>, UserUncheckedUpdateWithoutContentHistoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContentPlanCreateWithoutUserInput = {
    id?: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutPlanInput
  }

  export type ContentPlanUncheckedCreateWithoutUserInput = {
    id?: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPlanInput
  }

  export type ContentPlanCreateOrConnectWithoutUserInput = {
    where: ContentPlanWhereUniqueInput
    create: XOR<ContentPlanCreateWithoutUserInput, ContentPlanUncheckedCreateWithoutUserInput>
  }

  export type ContentPlanCreateManyUserInputEnvelope = {
    data: ContentPlanCreateManyUserInput | ContentPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentHistoryCreateWithoutUserInput = {
    id?: string
    theme: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    theme: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentHistoryCreateOrConnectWithoutUserInput = {
    where: ContentHistoryWhereUniqueInput
    create: XOR<ContentHistoryCreateWithoutUserInput, ContentHistoryUncheckedCreateWithoutUserInput>
  }

  export type ContentHistoryCreateManyUserInputEnvelope = {
    data: ContentHistoryCreateManyUserInput | ContentHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: ContentPlanWhereUniqueInput
    update: XOR<ContentPlanUpdateWithoutUserInput, ContentPlanUncheckedUpdateWithoutUserInput>
    create: XOR<ContentPlanCreateWithoutUserInput, ContentPlanUncheckedCreateWithoutUserInput>
  }

  export type ContentPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: ContentPlanWhereUniqueInput
    data: XOR<ContentPlanUpdateWithoutUserInput, ContentPlanUncheckedUpdateWithoutUserInput>
  }

  export type ContentPlanUpdateManyWithWhereWithoutUserInput = {
    where: ContentPlanScalarWhereInput
    data: XOR<ContentPlanUpdateManyMutationInput, ContentPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type ContentPlanScalarWhereInput = {
    AND?: ContentPlanScalarWhereInput | ContentPlanScalarWhereInput[]
    OR?: ContentPlanScalarWhereInput[]
    NOT?: ContentPlanScalarWhereInput | ContentPlanScalarWhereInput[]
    id?: StringFilter<"ContentPlan"> | string
    userId?: StringFilter<"ContentPlan"> | string
    weekStart?: DateTimeFilter<"ContentPlan"> | Date | string
    createdAt?: DateTimeFilter<"ContentPlan"> | Date | string
    updatedAt?: DateTimeFilter<"ContentPlan"> | Date | string
  }

  export type ContentHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ContentHistoryWhereUniqueInput
    update: XOR<ContentHistoryUpdateWithoutUserInput, ContentHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ContentHistoryCreateWithoutUserInput, ContentHistoryUncheckedCreateWithoutUserInput>
  }

  export type ContentHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ContentHistoryWhereUniqueInput
    data: XOR<ContentHistoryUpdateWithoutUserInput, ContentHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ContentHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ContentHistoryScalarWhereInput
    data: XOR<ContentHistoryUpdateManyMutationInput, ContentHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ContentHistoryScalarWhereInput = {
    AND?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
    OR?: ContentHistoryScalarWhereInput[]
    NOT?: ContentHistoryScalarWhereInput | ContentHistoryScalarWhereInput[]
    id?: StringFilter<"ContentHistory"> | string
    userId?: StringFilter<"ContentHistory"> | string
    theme?: StringFilter<"ContentHistory"> | string
    createdAt?: DateTimeFilter<"ContentHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ContentHistory"> | Date | string
  }

  export type UserCreateWithoutContentPlansInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    profession: string
    freePlanStart?: Date | string | null
    editsThisWeek?: number
    lastEditReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentHistories?: ContentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentPlansInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    profession: string
    freePlanStart?: Date | string | null
    editsThisWeek?: number
    lastEditReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentHistories?: ContentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentPlansInput, UserUncheckedCreateWithoutContentPlansInput>
  }

  export type PostCreateWithoutPlanInput = {
    id?: string
    day: $Enums.WeekDay
    platform: $Enums.Platform
    contentType: $Enums.ContentType
    idea: string
    hook: string
    scheduledFor?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutPlanInput = {
    id?: string
    day: $Enums.WeekDay
    platform: $Enums.Platform
    contentType: $Enums.ContentType
    idea: string
    hook: string
    scheduledFor?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutPlanInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPlanInput, PostUncheckedCreateWithoutPlanInput>
  }

  export type PostCreateManyPlanInputEnvelope = {
    data: PostCreateManyPlanInput | PostCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContentPlansInput = {
    update: XOR<UserUpdateWithoutContentPlansInput, UserUncheckedUpdateWithoutContentPlansInput>
    create: XOR<UserCreateWithoutContentPlansInput, UserUncheckedCreateWithoutContentPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentPlansInput, UserUncheckedUpdateWithoutContentPlansInput>
  }

  export type UserUpdateWithoutContentPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHistories?: ContentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHistories?: ContentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutPlanInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPlanInput, PostUncheckedUpdateWithoutPlanInput>
    create: XOR<PostCreateWithoutPlanInput, PostUncheckedCreateWithoutPlanInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPlanInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPlanInput, PostUncheckedUpdateWithoutPlanInput>
  }

  export type PostUpdateManyWithWhereWithoutPlanInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPlanInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    planId?: StringFilter<"Post"> | string
    day?: EnumWeekDayFilter<"Post"> | $Enums.WeekDay
    platform?: EnumPlatformFilter<"Post"> | $Enums.Platform
    contentType?: EnumContentTypeFilter<"Post"> | $Enums.ContentType
    idea?: StringFilter<"Post"> | string
    hook?: StringFilter<"Post"> | string
    scheduledFor?: DateTimeNullableFilter<"Post"> | Date | string | null
    metadata?: JsonNullableFilter<"Post">
    completed?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type ContentPlanCreateWithoutPostsInput = {
    id?: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContentPlansInput
  }

  export type ContentPlanUncheckedCreateWithoutPostsInput = {
    id?: string
    userId: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentPlanCreateOrConnectWithoutPostsInput = {
    where: ContentPlanWhereUniqueInput
    create: XOR<ContentPlanCreateWithoutPostsInput, ContentPlanUncheckedCreateWithoutPostsInput>
  }

  export type ContentPlanUpsertWithoutPostsInput = {
    update: XOR<ContentPlanUpdateWithoutPostsInput, ContentPlanUncheckedUpdateWithoutPostsInput>
    create: XOR<ContentPlanCreateWithoutPostsInput, ContentPlanUncheckedCreateWithoutPostsInput>
    where?: ContentPlanWhereInput
  }

  export type ContentPlanUpdateToOneWithWhereWithoutPostsInput = {
    where?: ContentPlanWhereInput
    data: XOR<ContentPlanUpdateWithoutPostsInput, ContentPlanUncheckedUpdateWithoutPostsInput>
  }

  export type ContentPlanUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentPlansNestedInput
  }

  export type ContentPlanUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutContentHistoriesInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    profession: string
    freePlanStart?: Date | string | null
    editsThisWeek?: number
    lastEditReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentPlans?: ContentPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentHistoriesInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    profession: string
    freePlanStart?: Date | string | null
    editsThisWeek?: number
    lastEditReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentPlans?: ContentPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentHistoriesInput, UserUncheckedCreateWithoutContentHistoriesInput>
  }

  export type UserUpsertWithoutContentHistoriesInput = {
    update: XOR<UserUpdateWithoutContentHistoriesInput, UserUncheckedUpdateWithoutContentHistoriesInput>
    create: XOR<UserCreateWithoutContentHistoriesInput, UserUncheckedCreateWithoutContentHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentHistoriesInput, UserUncheckedUpdateWithoutContentHistoriesInput>
  }

  export type UserUpdateWithoutContentHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentPlans?: ContentPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: StringFieldUpdateOperationsInput | string
    freePlanStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editsThisWeek?: IntFieldUpdateOperationsInput | number
    lastEditReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentPlans?: ContentPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentPlanCreateManyUserInput = {
    id?: string
    weekStart?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentHistoryCreateManyUserInput = {
    id?: string
    theme: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPlanNestedInput
  }

  export type ContentPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type ContentPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyPlanInput = {
    id?: string
    day: $Enums.WeekDay
    platform: $Enums.Platform
    contentType: $Enums.ContentType
    idea: string
    hook: string
    scheduledFor?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    idea?: StringFieldUpdateOperationsInput | string
    hook?: StringFieldUpdateOperationsInput | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    idea?: StringFieldUpdateOperationsInput | string
    hook?: StringFieldUpdateOperationsInput | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    idea?: StringFieldUpdateOperationsInput | string
    hook?: StringFieldUpdateOperationsInput | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}