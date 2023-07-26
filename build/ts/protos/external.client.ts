// @generated by protobuf-ts 2.9.0 with parameter optimize_code_size
// @generated from protobuf file "external.proto" (package "protos", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { External } from "./external.js";
import type { TestResponse } from "./external.js";
import type { TestRequest } from "./external.js";
import type { ResumePipelineRequest } from "./external.js";
import type { PausePipelineRequest } from "./external.js";
import type { DetachPipelineRequest } from "./external.js";
import type { AttachPipelineRequest } from "./external.js";
import type { DeletePipelineRequest } from "./external.js";
import type { UpdatePipelineRequest } from "./external.js";
import type { StandardResponse } from "./common.js";
import type { CreatePipelineRequest } from "./external.js";
import type { GetPipelineResponse } from "./external.js";
import type { GetPipelineRequest } from "./external.js";
import type { GetPipelinesResponse } from "./external.js";
import type { GetPipelinesRequest } from "./external.js";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetServiceMapResponse } from "./external.js";
import type { GetServiceMapRequest } from "./external.js";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service protos.External
 */
export interface IExternalClient {
    /**
     * Build a service map
     *
     * @generated from protobuf rpc: GetServiceMap(protos.GetServiceMapRequest) returns (protos.GetServiceMapResponse);
     */
    getServiceMap(input: GetServiceMapRequest, options?: RpcOptions): UnaryCall<GetServiceMapRequest, GetServiceMapResponse>;
    /**
     * @generated from protobuf rpc: GetPipelines(protos.GetPipelinesRequest) returns (protos.GetPipelinesResponse);
     */
    getPipelines(input: GetPipelinesRequest, options?: RpcOptions): UnaryCall<GetPipelinesRequest, GetPipelinesResponse>;
    /**
     * @generated from protobuf rpc: GetPipeline(protos.GetPipelineRequest) returns (protos.GetPipelineResponse);
     */
    getPipeline(input: GetPipelineRequest, options?: RpcOptions): UnaryCall<GetPipelineRequest, GetPipelineResponse>;
    /**
     * @generated from protobuf rpc: CreatePipeline(protos.CreatePipelineRequest) returns (protos.StandardResponse);
     */
    createPipeline(input: CreatePipelineRequest, options?: RpcOptions): UnaryCall<CreatePipelineRequest, StandardResponse>;
    /**
     * @generated from protobuf rpc: UpdatePipeline(protos.UpdatePipelineRequest) returns (protos.StandardResponse);
     */
    updatePipeline(input: UpdatePipelineRequest, options?: RpcOptions): UnaryCall<UpdatePipelineRequest, StandardResponse>;
    /**
     * @generated from protobuf rpc: DeletePipeline(protos.DeletePipelineRequest) returns (protos.StandardResponse);
     */
    deletePipeline(input: DeletePipelineRequest, options?: RpcOptions): UnaryCall<DeletePipelineRequest, StandardResponse>;
    /**
     * @generated from protobuf rpc: AttachPipeline(protos.AttachPipelineRequest) returns (protos.StandardResponse);
     */
    attachPipeline(input: AttachPipelineRequest, options?: RpcOptions): UnaryCall<AttachPipelineRequest, StandardResponse>;
    /**
     * @generated from protobuf rpc: DetachPipeline(protos.DetachPipelineRequest) returns (protos.StandardResponse);
     */
    detachPipeline(input: DetachPipelineRequest, options?: RpcOptions): UnaryCall<DetachPipelineRequest, StandardResponse>;
    /**
     * @generated from protobuf rpc: PausePipeline(protos.PausePipelineRequest) returns (protos.StandardResponse);
     */
    pausePipeline(input: PausePipelineRequest, options?: RpcOptions): UnaryCall<PausePipelineRequest, StandardResponse>;
    /**
     * @generated from protobuf rpc: ResumePipeline(protos.ResumePipelineRequest) returns (protos.StandardResponse);
     */
    resumePipeline(input: ResumePipelineRequest, options?: RpcOptions): UnaryCall<ResumePipelineRequest, StandardResponse>;
    /**
     * Test method
     *
     * @generated from protobuf rpc: Test(protos.TestRequest) returns (protos.TestResponse);
     */
    test(input: TestRequest, options?: RpcOptions): UnaryCall<TestRequest, TestResponse>;
}
/**
 * @generated from protobuf service protos.External
 */
export class ExternalClient implements IExternalClient, ServiceInfo {
    typeName = External.typeName;
    methods = External.methods;
    options = External.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Build a service map
     *
     * @generated from protobuf rpc: GetServiceMap(protos.GetServiceMapRequest) returns (protos.GetServiceMapResponse);
     */
    getServiceMap(input: GetServiceMapRequest, options?: RpcOptions): UnaryCall<GetServiceMapRequest, GetServiceMapResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetServiceMapRequest, GetServiceMapResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetPipelines(protos.GetPipelinesRequest) returns (protos.GetPipelinesResponse);
     */
    getPipelines(input: GetPipelinesRequest, options?: RpcOptions): UnaryCall<GetPipelinesRequest, GetPipelinesResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPipelinesRequest, GetPipelinesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetPipeline(protos.GetPipelineRequest) returns (protos.GetPipelineResponse);
     */
    getPipeline(input: GetPipelineRequest, options?: RpcOptions): UnaryCall<GetPipelineRequest, GetPipelineResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPipelineRequest, GetPipelineResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreatePipeline(protos.CreatePipelineRequest) returns (protos.StandardResponse);
     */
    createPipeline(input: CreatePipelineRequest, options?: RpcOptions): UnaryCall<CreatePipelineRequest, StandardResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreatePipelineRequest, StandardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePipeline(protos.UpdatePipelineRequest) returns (protos.StandardResponse);
     */
    updatePipeline(input: UpdatePipelineRequest, options?: RpcOptions): UnaryCall<UpdatePipelineRequest, StandardResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdatePipelineRequest, StandardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeletePipeline(protos.DeletePipelineRequest) returns (protos.StandardResponse);
     */
    deletePipeline(input: DeletePipelineRequest, options?: RpcOptions): UnaryCall<DeletePipelineRequest, StandardResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeletePipelineRequest, StandardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AttachPipeline(protos.AttachPipelineRequest) returns (protos.StandardResponse);
     */
    attachPipeline(input: AttachPipelineRequest, options?: RpcOptions): UnaryCall<AttachPipelineRequest, StandardResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<AttachPipelineRequest, StandardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DetachPipeline(protos.DetachPipelineRequest) returns (protos.StandardResponse);
     */
    detachPipeline(input: DetachPipelineRequest, options?: RpcOptions): UnaryCall<DetachPipelineRequest, StandardResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<DetachPipelineRequest, StandardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: PausePipeline(protos.PausePipelineRequest) returns (protos.StandardResponse);
     */
    pausePipeline(input: PausePipelineRequest, options?: RpcOptions): UnaryCall<PausePipelineRequest, StandardResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<PausePipelineRequest, StandardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ResumePipeline(protos.ResumePipelineRequest) returns (protos.StandardResponse);
     */
    resumePipeline(input: ResumePipelineRequest, options?: RpcOptions): UnaryCall<ResumePipelineRequest, StandardResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<ResumePipelineRequest, StandardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Test method
     *
     * @generated from protobuf rpc: Test(protos.TestRequest) returns (protos.TestResponse);
     */
    test(input: TestRequest, options?: RpcOptions): UnaryCall<TestRequest, TestResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<TestRequest, TestResponse>("unary", this._transport, method, opt, input);
    }
}
