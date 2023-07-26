// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "info.proto" (package "protos", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Pipeline } from "./pipeline.js";
import { Audience } from "./common.js";
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
class ServiceInfo$Type extends MessageType {
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
class PipelineInfo$Type extends MessageType {
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
class ConsumerInfo$Type extends MessageType {
    constructor() {
        super("protos.ConsumerInfo", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.ConsumerInfo
 */
export const ConsumerInfo = new ConsumerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProducerInfo$Type extends MessageType {
    constructor() {
        super("protos.ProducerInfo", []);
    }
}
/**
 * @generated MessageType for protobuf message protos.ProducerInfo
 */
export const ProducerInfo = new ProducerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientInfo$Type extends MessageType {
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
//# sourceMappingURL=info.js.map