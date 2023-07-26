// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "info.proto" (package "protos", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Pipeline } from "./pipeline.js";
import { Audience } from "./common.js";
/**
 * @generated from protobuf message protos.ServiceInfo
 */
export interface ServiceInfo {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * @generated from protobuf field: repeated protos.PipelineInfo pipelines = 100;
     */
    pipelines: PipelineInfo[];
    /**
     * @generated from protobuf field: repeated protos.ConsumerInfo consumers = 101;
     */
    consumers: ConsumerInfo[];
    /**
     * @generated from protobuf field: repeated protos.ProducerInfo producers = 102;
     */
    producers: ProducerInfo[];
    /**
     * @generated from protobuf field: repeated protos.ClientInfo clients = 103;
     */
    clients: ClientInfo[]; // number of entries == num instances?
}
/**
 * @generated from protobuf message protos.PipelineInfo
 */
export interface PipelineInfo {
    /**
     * @generated from protobuf field: protos.Audience audience = 1;
     */
    audience?: Audience;
    /**
     * @generated from protobuf field: protos.Pipeline pipeline = 2;
     */
    pipeline?: Pipeline;
}
/**
 * TBD
 *
 * @generated from protobuf message protos.ConsumerInfo
 */
export interface ConsumerInfo {
}
/**
 * TBD
 *
 * @generated from protobuf message protos.ProducerInfo
 */
export interface ProducerInfo {
}
/**
 * This should come from the register call
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
class ServiceInfo$Type extends MessageType<ServiceInfo> {
    constructor() {
        super("protos.ServiceInfo", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 100, name: "pipelines", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PipelineInfo },
            { no: 101, name: "consumers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ConsumerInfo },
            { no: 102, name: "producers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProducerInfo },
            { no: 103, name: "clients", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ClientInfo }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.ServiceInfo
 */
export const ServiceInfo = new ServiceInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PipelineInfo$Type extends MessageType<PipelineInfo> {
    constructor() {
        super("protos.PipelineInfo", [
            { no: 1, name: "audience", kind: "message", T: () => Audience },
            { no: 2, name: "pipeline", kind: "message", T: () => Pipeline }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.PipelineInfo
 */
export const PipelineInfo = new PipelineInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConsumerInfo$Type extends MessageType<ConsumerInfo> {
    constructor() {
        super("protos.ConsumerInfo", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.ConsumerInfo
 */
export const ConsumerInfo = new ConsumerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProducerInfo$Type extends MessageType<ProducerInfo> {
    constructor() {
        super("protos.ProducerInfo", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.ProducerInfo
 */
export const ProducerInfo = new ProducerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientInfo$Type extends MessageType<ClientInfo> {
    constructor() {
        super("protos.ClientInfo", [
            { no: 1, name: "client_type", kind: "enum", T: () => ["protos.ClientType", ClientType, "CLIENT_TYPE_"] },
            { no: 2, name: "library_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "library_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "arch", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "os", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.ClientInfo
 */
export const ClientInfo = new ClientInfo$Type();