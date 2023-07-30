// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "internal.proto" (package "protos", syntax proto3)
// tslint:disable
import { StandardResponse } from "./common.ts";
import { Command } from "./command.ts";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { ClientInfo } from "./info.ts";
import { Audience } from "./common.ts";
/**
 * @generated from protobuf message protos.NewAudienceRequest
 */
export interface NewAudienceRequest {
    /**
     * The session that is performing this call
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * Newly created audience.
     *
     * @generated from protobuf field: protos.Audience audience = 2;
     */
    audience?: Audience;
}
/**
 * Each consumer and producer should send periodic heartbeats to the server
 * to let the server know that they are still active.
 *
 * @generated from protobuf message protos.HeartbeatRequest
 */
export interface HeartbeatRequest {
    /**
     * Session ID for this instance of the SDK.
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
}
/**
 * @generated from protobuf message protos.NotifyRequest
 */
export interface NotifyRequest {
    /**
     * @generated from protobuf field: string pipeline_id = 1;
     */
    pipelineId: string;
    /**
     * @generated from protobuf field: string step_name = 2;
     */
    stepName: string;
    /**
     * @generated from protobuf field: protos.Audience audience = 3;
     */
    audience?: Audience;
    /**
     * @generated from protobuf field: int64 occurred_at_unix_ts_utc = 4;
     */
    occurredAtUnixTsUtc: bigint;
}
/**
 * @generated from protobuf message protos.Metrics
 */
export interface Metrics {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: map<string, string> labels = 2;
     */
    labels: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: double value = 3;
     */
    value: number;
}
/**
 * @generated from protobuf message protos.MetricsRequest
 */
export interface MetricsRequest {
    /**
     * @generated from protobuf field: repeated protos.Metrics metrics = 1;
     */
    metrics: Metrics[];
}
/**
 * @generated from protobuf message protos.RegisterRequest
 */
export interface RegisterRequest {
    /**
     * REQUIRED -- Name of the service that is registering.
     *
     * @generated from protobuf field: string service_name = 1;
     */
    serviceName: string;
    /**
     * REQUIRED -- Unique ID for this SDK instance.
     *
     * This should be generated every time the SDK is instantiated (oe. every
     * time a NEW registration is performed).
     *
     * @generated from protobuf field: string session_id = 2;
     */
    sessionId: string;
    /**
     * REQUIRED -- Info about the client (lib name, lang, os, arch, etc.)
     *
     * @generated from protobuf field: protos.ClientInfo client_info = 3;
     */
    clientInfo?: ClientInfo;
    /**
     * OPTIONAL -- if these are defined, these will show up in the UI even if
     * there is no active .Process() call from the SDK.
     *
     * @generated from protobuf field: repeated protos.Audience audiences = 4;
     */
    audiences: Audience[];
    /**
     * OPTIONAL -- If set, we know that any pipelines or steps executed in this
     * SDK will NOT modify the input/output data. As in, the SDK will log what it
     * _would_ do and always return the original data set.
     *
     * @generated from protobuf field: bool dry_run = 5;
     */
    dryRun: boolean;
}
/**
 * Same as RegisterRequest - used for broadcasting a deregistration event
 *
 * @generated from protobuf message protos.DeregisterRequest
 */
export interface DeregisterRequest {
    /**
     * @generated from protobuf field: string service_name = 1;
     */
    serviceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class NewAudienceRequest$Type extends MessageType<NewAudienceRequest> {
    constructor() {
        super("protos.NewAudienceRequest", [
            { no: 1, name: "session_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "audience", kind: "message", T: () => Audience }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.NewAudienceRequest
 */
export const NewAudienceRequest = new NewAudienceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HeartbeatRequest$Type extends MessageType<HeartbeatRequest> {
    constructor() {
        super("protos.HeartbeatRequest", [
            { no: 1, name: "session_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.HeartbeatRequest
 */
export const HeartbeatRequest = new HeartbeatRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NotifyRequest$Type extends MessageType<NotifyRequest> {
    constructor() {
        super("protos.NotifyRequest", [
            { no: 1, name: "pipeline_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "step_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "audience", kind: "message", T: () => Audience },
            { no: 4, name: "occurred_at_unix_ts_utc", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.NotifyRequest
 */
export const NotifyRequest = new NotifyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Metrics$Type extends MessageType<Metrics> {
    constructor() {
        super("protos.Metrics", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "labels", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 3, name: "value", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.Metrics
 */
export const Metrics = new Metrics$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MetricsRequest$Type extends MessageType<MetricsRequest> {
    constructor() {
        super("protos.MetricsRequest", [
            { no: 1, name: "metrics", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Metrics }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.MetricsRequest
 */
export const MetricsRequest = new MetricsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterRequest$Type extends MessageType<RegisterRequest> {
    constructor() {
        super("protos.RegisterRequest", [
            { no: 1, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "session_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "client_info", kind: "message", T: () => ClientInfo },
            { no: 4, name: "audiences", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Audience },
            { no: 5, name: "dry_run", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.RegisterRequest
 */
export const RegisterRequest = new RegisterRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeregisterRequest$Type extends MessageType<DeregisterRequest> {
    constructor() {
        super("protos.DeregisterRequest", [
            { no: 1, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.DeregisterRequest
 */
export const DeregisterRequest = new DeregisterRequest$Type();
/**
 * @generated ServiceType for protobuf service protos.Internal
 */
export const Internal = new ServiceType("protos.Internal", [
    { name: "Register", serverStreaming: true, options: {}, I: RegisterRequest, O: Command },
    { name: "NewAudience", options: {}, I: NewAudienceRequest, O: StandardResponse },
    { name: "Heartbeat", options: {}, I: HeartbeatRequest, O: StandardResponse },
    { name: "Notify", options: {}, I: NotifyRequest, O: StandardResponse },
    { name: "Metrics", options: {}, I: MetricsRequest, O: StandardResponse }
]);
