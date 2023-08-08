// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "info.proto" (package "protos", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Pipeline } from "./pipeline.js";
import { Audience } from "./common.js";
/**
 * @generated from protobuf enum protos.PipelineState
 */
export var PipelineState;
(function (PipelineState) {
    /**
     * @generated from protobuf enum value: PIPELINE_STATE_UNSET = 0;
     */
    PipelineState[PipelineState["UNSET"] = 0] = "UNSET";
    /**
     * @generated from protobuf enum value: PIPELINE_STATE_PAUSED = 1;
     */
    PipelineState[PipelineState["PAUSED"] = 1] = "PAUSED";
})(PipelineState || (PipelineState = {}));
/**
 * @generated from protobuf enum protos.ClientType
 */
export var ClientType;
(function (ClientType) {
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_UNSET = 0;
     */
    ClientType[ClientType["UNSET"] = 0] = "UNSET";
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_SDK = 1;
     */
    ClientType[ClientType["SDK"] = 1] = "SDK";
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_SHIM = 2;
     */
    ClientType[ClientType["SHIM"] = 2] = "SHIM";
})(ClientType || (ClientType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class LiveInfo$Type extends MessageType {
    constructor() {
        super("protos.LiveInfo", [
            { no: 1, name: "audience", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Audience },
            { no: 2, name: "client", kind: "message", T: () => ClientInfo }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.LiveInfo
 */
export const LiveInfo = new LiveInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PipelineInfo$Type extends MessageType {
    constructor() {
        super("protos.PipelineInfo", [
            { no: 1, name: "audiences", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Audience },
            { no: 2, name: "pipeline", kind: "message", T: () => Pipeline },
            { no: 3, name: "state", kind: "enum", T: () => ["protos.PipelineState", PipelineState, "PIPELINE_STATE_"] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protos.PipelineInfo
 */
export const PipelineInfo = new PipelineInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientInfo$Type extends MessageType {
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
}
/**
 * @generated MessageType for protobuf message protos.ClientInfo
 */
export const ClientInfo = new ClientInfo$Type();
//# sourceMappingURL=info.js.map