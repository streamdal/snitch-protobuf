// @generated by protobuf-ts 2.9.0 with parameter long_type_string
// @generated from protobuf file "sp_info.proto" (package "protos", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Pipeline } from "./sp_pipeline.ts";
import { Audience } from "./sp_common.ts";
/**
 * @generated from protobuf message protos.LiveInfo
 */
export interface LiveInfo {
    /**
     * If empty, client has not announced any audiences
     *
     * @generated from protobuf field: repeated protos.Audience audiences = 1;
     */
    audiences: Audience[];
    /**
     * @generated from protobuf field: protos.ClientInfo client = 2;
     */
    client?: ClientInfo;
}
/**
 * @generated from protobuf message protos.PipelineInfo
 */
export interface PipelineInfo {
    /**
     * What audience(s) this pipeline is attached to (none if empty)
     *
     * @generated from protobuf field: repeated protos.Audience audiences = 1;
     */
    audiences: Audience[];
    /**
     * Pipeline config
     *
     * @generated from protobuf field: protos.Pipeline pipeline = 2;
     */
    pipeline?: Pipeline;
    /**
     * For what audiences this pipeline is paused (none if empty)
     *
     * @generated from protobuf field: repeated protos.Audience paused = 3;
     */
    paused: Audience[];
}
/**
 * Most of this is constructed by client SDKs and provided during Register call
 *
 * @generated from protobuf message protos.ClientInfo
 */
export interface ClientInfo {
    /**
     * @generated from protobuf field: protos.ClientType client_type = 1;
     */
    clientType: ClientType;
    /**
     * @generated from protobuf field: string library_name = 2;
     */
    libraryName: string;
    /**
     * @generated from protobuf field: string library_version = 3;
     */
    libraryVersion: string;
    /**
     * @generated from protobuf field: string language = 4;
     */
    language: string;
    /**
     * @generated from protobuf field: string arch = 5;
     */
    arch: string;
    /**
     * @generated from protobuf field: string os = 6;
     */
    os: string;
    /**
     * Filled out by snitch_server on GetAll()
     *
     * @generated from protobuf field: optional string _session_id = 7;
     */
    SessionId?: string; // protolint:disable:this FIELD_NAMES_LOWER_SNAKE_CASE
    /**
     * @generated from protobuf field: optional string _service_name = 8;
     */
    ServiceName?: string; // protolint:disable:this FIELD_NAMES_LOWER_SNAKE_CASE
    /**
     * @generated from protobuf field: optional string _node_name = 9;
     */
    NodeName?: string; // protolint:disable:this FIELD_NAMES_LOWER_SNAKE_CASE
}
/**
 * @generated from protobuf enum protos.ClientType
 */
export enum ClientType {
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_UNSET = 0;
     */
    UNSET = 0,
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_SDK = 1;
     */
    SDK = 1,
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_SHIM = 2;
     */
    SHIM = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class LiveInfo$Type extends MessageType<LiveInfo> {
    constructor() {
        super("protos.LiveInfo", [
            { no: 1, name: "audiences", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Audience },
            { no: 2, name: "client", kind: "message", T: () => ClientInfo }
        ]);
    }
    create(value?: PartialMessage<LiveInfo>): LiveInfo {
        const message = { audiences: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LiveInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LiveInfo): LiveInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated protos.Audience audiences */ 1:
                    message.audiences.push(Audience.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* protos.ClientInfo client */ 2:
                    message.client = ClientInfo.internalBinaryRead(reader, reader.uint32(), options, message.client);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LiveInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated protos.Audience audiences = 1; */
        for (let i = 0; i < message.audiences.length; i++)
            Audience.internalBinaryWrite(message.audiences[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* protos.ClientInfo client = 2; */
        if (message.client)
            ClientInfo.internalBinaryWrite(message.client, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.LiveInfo
 */
export const LiveInfo = new LiveInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PipelineInfo$Type extends MessageType<PipelineInfo> {
    constructor() {
        super("protos.PipelineInfo", [
            { no: 1, name: "audiences", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Audience },
            { no: 2, name: "pipeline", kind: "message", T: () => Pipeline },
            { no: 3, name: "paused", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Audience }
        ]);
    }
    create(value?: PartialMessage<PipelineInfo>): PipelineInfo {
        const message = { audiences: [], paused: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PipelineInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PipelineInfo): PipelineInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated protos.Audience audiences */ 1:
                    message.audiences.push(Audience.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* protos.Pipeline pipeline */ 2:
                    message.pipeline = Pipeline.internalBinaryRead(reader, reader.uint32(), options, message.pipeline);
                    break;
                case /* repeated protos.Audience paused */ 3:
                    message.paused.push(Audience.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PipelineInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated protos.Audience audiences = 1; */
        for (let i = 0; i < message.audiences.length; i++)
            Audience.internalBinaryWrite(message.audiences[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* protos.Pipeline pipeline = 2; */
        if (message.pipeline)
            Pipeline.internalBinaryWrite(message.pipeline, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated protos.Audience paused = 3; */
        for (let i = 0; i < message.paused.length; i++)
            Audience.internalBinaryWrite(message.paused[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.PipelineInfo
 */
export const PipelineInfo = new PipelineInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientInfo$Type extends MessageType<ClientInfo> {
    constructor() {
        super("protos.ClientInfo", [
            { no: 1, name: "client_type", kind: "enum", T: () => ["protos.ClientType", ClientType, "CLIENT_TYPE_"] },
            { no: 2, name: "library_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "library_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "arch", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "os", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "_session_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "_service_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "_node_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ClientInfo>): ClientInfo {
        const message = { clientType: 0, libraryName: "", libraryVersion: "", language: "", arch: "", os: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ClientInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientInfo): ClientInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* protos.ClientType client_type */ 1:
                    message.clientType = reader.int32();
                    break;
                case /* string library_name */ 2:
                    message.libraryName = reader.string();
                    break;
                case /* string library_version */ 3:
                    message.libraryVersion = reader.string();
                    break;
                case /* string language */ 4:
                    message.language = reader.string();
                    break;
                case /* string arch */ 5:
                    message.arch = reader.string();
                    break;
                case /* string os */ 6:
                    message.os = reader.string();
                    break;
                case /* optional string _session_id */ 7:
                    message.SessionId = reader.string();
                    break;
                case /* optional string _service_name */ 8:
                    message.ServiceName = reader.string();
                    break;
                case /* optional string _node_name */ 9:
                    message.NodeName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ClientInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* protos.ClientType client_type = 1; */
        if (message.clientType !== 0)
            writer.tag(1, WireType.Varint).int32(message.clientType);
        /* string library_name = 2; */
        if (message.libraryName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.libraryName);
        /* string library_version = 3; */
        if (message.libraryVersion !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.libraryVersion);
        /* string language = 4; */
        if (message.language !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.language);
        /* string arch = 5; */
        if (message.arch !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.arch);
        /* string os = 6; */
        if (message.os !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.os);
        /* optional string _session_id = 7; */
        if (message.SessionId !== undefined)
            writer.tag(7, WireType.LengthDelimited).string(message.SessionId);
        /* optional string _service_name = 8; */
        if (message.ServiceName !== undefined)
            writer.tag(8, WireType.LengthDelimited).string(message.ServiceName);
        /* optional string _node_name = 9; */
        if (message.NodeName !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.NodeName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.ClientInfo
 */
export const ClientInfo = new ClientInfo$Type();
