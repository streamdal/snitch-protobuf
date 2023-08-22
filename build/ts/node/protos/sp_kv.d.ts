import { MessageType } from "@protobuf-ts/runtime";
/**
 * Represents a single KV object
 *
 * @generated from protobuf message protos.KVObject
 */
export interface KVObject {
    /**
     * Key regex: /^[a-zA-Z0-9_-:]+$/)
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * KV value
     *
     * @generated from protobuf field: bytes value = 2;
     */
    value: Uint8Array;
    /**
     * When was this object created
     *
     * @generated from protobuf field: int64 created_at_unix_ts_nano_utc = 3;
     */
    createdAtUnixTsNanoUtc: bigint;
    /**
     * Last time the object was updated
     *
     * @generated from protobuf field: int64 updated_at_unix_ts_nano_utc = 4;
     */
    updatedAtUnixTsNanoUtc: bigint;
}
/**
 * Container for one or more KVObject's; snitch-server broadcasts KVCommand that
 * contains one or more of these instructions when a "POST /api/v1/kv" request
 * is made.
 *
 * @generated from protobuf message protos.KVInstruction
 */
export interface KVInstruction {
    /**
     * Unique ID for this instruction
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * What kind of an action is this?
     *
     * @generated from protobuf field: protos.KVAction action = 2;
     */
    action: KVAction;
    /**
     * KV object
     *
     * @generated from protobuf field: protos.KVObject object = 3;
     */
    object?: KVObject;
    /**
     * When this instruction was requested (usually will be the HTTP API request time)
     *
     * @generated from protobuf field: int64 requested_at_unix_ts_nano_utc = 4;
     */
    requestedAtUnixTsNanoUtc: bigint;
}
/**
 * Used for broadcasting KV instructions to other snitch-server nodes.
 * NOTE: While this data structure is similar to KVCommand it makes sense to
 * keep them separate. It would cause more confusion if we tried to re-use
 * KVCommand for the purpose of broadcasting AND for sending SDK commands. ~DS
 *
 * This request structure is used for including all updates - create/update/delete.
 *
 * @generated from protobuf message protos.KVRequest
 */
export interface KVRequest {
    /**
     * @generated from protobuf field: repeated protos.KVInstruction instructions = 1;
     */
    instructions: KVInstruction[];
    /**
     * @generated from protobuf field: bool overwrite = 2;
     */
    overwrite: boolean;
}
/**
 * "POST /api/v1/kv" accepts JSON of this type for it's request payload. This is
 * converted by BroadcastKV() to a KVCommand
 *
 * @generated from protobuf message protos.KVCreateHTTPRequest
 */
export interface KVCreateHTTPRequest {
    /**
     * @generated from protobuf field: repeated protos.KVObject kvs = 1;
     */
    kvs: KVObject[];
    /**
     * Whether to treat create as upsert -- ie. do not error if key already exists
     *
     * @generated from protobuf field: bool overwrite = 2;
     */
    overwrite: boolean;
}
/**
 * @generated from protobuf message protos.KVUpdateHTTPRequest
 */
export interface KVUpdateHTTPRequest {
    /**
     * @generated from protobuf field: repeated protos.KVObject kvs = 1;
     */
    kvs: KVObject[];
}
/**
 * @generated from protobuf enum protos.KVAction
 */
export declare enum KVAction {
    /**
     * protolint:disable:this ENUM_FIELD_NAMES_PREFIX
     *
     * @generated from protobuf enum value: KV_ACTION_UNSET = 0;
     */
    KV_ACTION_UNSET = 0,
    /**
     * protolint:disable:this ENUM_FIELD_NAMES_PREFIX
     *
     * @generated from protobuf enum value: KV_ACTION_CREATE = 1;
     */
    KV_ACTION_CREATE = 1,
    /**
     * protolint:disable:this ENUM_FIELD_NAMES_PREFIX
     *
     * @generated from protobuf enum value: KV_ACTION_UPDATE = 2;
     */
    KV_ACTION_UPDATE = 2,
    /**
     * Only "key" and "requested_at_*" needs to be set in *protos.KVInstruction
     *
     * protolint:disable:this ENUM_FIELD_NAMES_PREFIX
     *
     * @generated from protobuf enum value: KV_ACTION_DELETE = 3;
     */
    KV_ACTION_DELETE = 3,
    /**
     * Only "requested_at_*" needs to be set in *protos.KVInstruction
     *
     * protolint:disable:this ENUM_FIELD_NAMES_PREFIX
     *
     * @generated from protobuf enum value: KV_ACTION_DELETE_ALL = 4;
     */
    KV_ACTION_DELETE_ALL = 4
}
declare class KVObject$Type extends MessageType<KVObject> {
    constructor();
}
/**
 * @generated MessageType for protobuf message protos.KVObject
 */
export declare const KVObject: KVObject$Type;
declare class KVInstruction$Type extends MessageType<KVInstruction> {
    constructor();
}
/**
 * @generated MessageType for protobuf message protos.KVInstruction
 */
export declare const KVInstruction: KVInstruction$Type;
declare class KVRequest$Type extends MessageType<KVRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message protos.KVRequest
 */
export declare const KVRequest: KVRequest$Type;
declare class KVCreateHTTPRequest$Type extends MessageType<KVCreateHTTPRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message protos.KVCreateHTTPRequest
 */
export declare const KVCreateHTTPRequest: KVCreateHTTPRequest$Type;
declare class KVUpdateHTTPRequest$Type extends MessageType<KVUpdateHTTPRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message protos.KVUpdateHTTPRequest
 */
export declare const KVUpdateHTTPRequest: KVUpdateHTTPRequest$Type;
export {};