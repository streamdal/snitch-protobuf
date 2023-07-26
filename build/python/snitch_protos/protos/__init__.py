# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: bus.proto, command.proto, common.proto, external.proto, info.proto, internal.proto, pipeline.proto, wasm.proto
# plugin: python-betterproto
# This file has been @generated

from dataclasses import dataclass
from typing import (
    TYPE_CHECKING,
    AsyncIterator,
    Dict,
    List,
    Optional,
)

import betterproto
import grpclib
from betterproto.grpc.grpclib_server import ServiceBase

from . import steps


if TYPE_CHECKING:
    import grpclib.server
    from betterproto.grpc.grpclib_client import MetadataLike
    from grpclib.metadata import Deadline


class ResponseCode(betterproto.Enum):
    """Common status codes used in gRPC method responses"""

    RESPONSE_CODE_UNSET = 0
    RESPONSE_CODE_OK = 1
    RESPONSE_CODE_BAD_REQUEST = 2
    RESPONSE_CODE_NOT_FOUND = 3
    RESPONSE_CODE_INTERNAL_SERVER_ERROR = 4
    RESPONSE_CODE_GENERIC_ERROR = 5


class OperationType(betterproto.Enum):
    """Each SDK client is a $service + $component + $operation_type"""

    OPERATION_TYPE_UNSET = 0
    OPERATION_TYPE_CONSUMER = 1
    OPERATION_TYPE_PRODUCER = 2


class PipelineStepCondition(betterproto.Enum):
    """
    A condition defines how the SDK should handle a step response -- should it
    continue executing the pipeline, should it abort, should it notify the
    server? Each step can have multiple conditions.
    """

    PIPELINE_STEP_CONDITION_UNSET = 0
    PIPELINE_STEP_CONDITION_ABORT = 1
    PIPELINE_STEP_CONDITION_NOTIFY = 2


class ClientType(betterproto.Enum):
    CLIENT_TYPE_UNSET = 0
    CLIENT_TYPE_SDK = 1
    CLIENT_TYPE_SHIM = 2


class WasmExitCode(betterproto.Enum):
    """
    Included in WASM response; SDK is responsible for interpreting the response
    status and how it relates to the step condition. ie. WASM func returns
    WASM_EXIT_CODE_INTERNAL_ERROR lookup ON_ERROR conditions to determine what
    to do next. ie. WASM func returns WASM_EXIT_CODE_SUCCESS lookup ON_MATCH
    conditions to determine what to do next;
    """

    WASM_EXIT_CODE_UNSET = 0
    WASM_EXIT_CODE_SUCCESS = 1
    WASM_EXIT_CODE_FAILURE = 2
    WASM_EXIT_CODE_INTERNAL_ERROR = 3


@dataclass(eq=False, repr=False)
class StandardResponse(betterproto.Message):
    """Common response message for many gRPC methods"""

    id: str = betterproto.string_field(1)
    """Co-relation ID for the request / response"""

    code: "ResponseCode" = betterproto.enum_field(2)
    message: str = betterproto.string_field(3)


@dataclass(eq=False, repr=False)
class Audience(betterproto.Message):
    """Used to indicate who a command is intended for"""

    service_name: str = betterproto.string_field(1)
    """
    Name of the service -- let's include the service name on all calls, we can
    optimize later ~DS
    """

    component_name: str = betterproto.string_field(2)
    """
    Name of the component the SDK is interacting with (ie. kafka-$topic-name)
    """

    operation_type: "OperationType" = betterproto.enum_field(3)
    """Consumer or Producer"""


@dataclass(eq=False, repr=False)
class Pipeline(betterproto.Message):
    """
    Pipeline is a structure that holds one or more pipeline steps. This
    structure is intended to be immutable; clients are expected to generate
    WASMRequest's that contain a pipeline step.
    """

    id: str = betterproto.string_field(1)
    """Set by snitch-server on Create; must be present on Update calls"""

    name: str = betterproto.string_field(2)
    """Friendly name for the pipeline"""

    steps: List["PipelineStep"] = betterproto.message_field(3)
    """One or more steps to execute"""


@dataclass(eq=False, repr=False)
class PipelineStep(betterproto.Message):
    """A pipeline step is a single step in a pipeline."""

    name: str = betterproto.string_field(1)
    """Friendly name for the step"""

    on_success: List["PipelineStepCondition"] = betterproto.enum_field(2)
    """What should SDK do if step succeeds?"""

    on_failure: List["PipelineStepCondition"] = betterproto.enum_field(3)
    """What should SDK do if step fails?"""

    detective: "steps.DetectiveStep" = betterproto.message_field(1000, group="step")
    transform: "steps.TransformStep" = betterproto.message_field(1001, group="step")
    encode: "steps.EncodeStep" = betterproto.message_field(1002, group="step")
    decode: "steps.DecodeStep" = betterproto.message_field(1003, group="step")
    custom: "steps.CustomStep" = betterproto.message_field(1004, group="step")
    wasm_id: str = betterproto.string_field(10000)
    """WASM module ID (set by snitch-server)"""

    wasm_bytes: bytes = betterproto.bytes_field(10001)
    """WASM module bytes (set by snitch-server)"""

    wasm_function: str = betterproto.string_field(10002)
    """WASM function name to execute (set by snitch-server)"""


@dataclass(eq=False, repr=False)
class Command(betterproto.Message):
    """Command is used by snitch-server for sending commands to SDKs"""

    audience: "Audience" = betterproto.message_field(1)
    """Who is this command intended for?"""

    set_pipeline: "SetPipelineCommand" = betterproto.message_field(100, group="command")
    delete_pipeline: "DeletePipelineCommand" = betterproto.message_field(
        101, group="command"
    )
    pause_pipeline: "PausePipelineCommand" = betterproto.message_field(
        102, group="command"
    )
    unpause_pipeline: "UnpausePipelineCommand" = betterproto.message_field(
        103, group="command"
    )
    keep_alive: "KeepAliveCommand" = betterproto.message_field(104, group="command")


@dataclass(eq=False, repr=False)
class SetPipelineCommand(betterproto.Message):
    """Used for both Add and Update"""

    pipeline: "Pipeline" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class DeletePipelineCommand(betterproto.Message):
    id: str = betterproto.string_field(1)
    """Unique ID for the pipeline"""


@dataclass(eq=False, repr=False)
class PausePipelineCommand(betterproto.Message):
    id: str = betterproto.string_field(1)
    """Unique ID for the pipeline"""


@dataclass(eq=False, repr=False)
class UnpausePipelineCommand(betterproto.Message):
    id: str = betterproto.string_field(1)
    """Unique ID for the pipeline"""


@dataclass(eq=False, repr=False)
class KeepAliveCommand(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class ServiceInfo(betterproto.Message):
    name: str = betterproto.string_field(1)
    description: str = betterproto.string_field(2)
    pipelines: List["PipelineInfo"] = betterproto.message_field(100)
    consumers: List["ConsumerInfo"] = betterproto.message_field(101)
    producers: List["ProducerInfo"] = betterproto.message_field(102)
    clients: List["ClientInfo"] = betterproto.message_field(103)


@dataclass(eq=False, repr=False)
class PipelineInfo(betterproto.Message):
    audience: "Audience" = betterproto.message_field(1)
    pipeline: "Pipeline" = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class ConsumerInfo(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class ProducerInfo(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class ClientInfo(betterproto.Message):
    """This should come from the register call"""

    client_type: "ClientType" = betterproto.enum_field(1)
    library_name: str = betterproto.string_field(2)
    library_version: str = betterproto.string_field(3)
    language: str = betterproto.string_field(4)
    arch: str = betterproto.string_field(5)
    os: str = betterproto.string_field(6)


@dataclass(eq=False, repr=False)
class HeartbeatRequest(betterproto.Message):
    """
    Each consumer and producer should send periodic heartbeats to the server to
    let the server know that they are still active.
    """

    audience: "Audience" = betterproto.message_field(1)
    last_activity_unix_timestamp_utc: int = betterproto.int64_field(2)


@dataclass(eq=False, repr=False)
class NotifyRequest(betterproto.Message):
    pipeline_id: str = betterproto.string_field(1)
    step_name: str = betterproto.string_field(2)
    audience: "Audience" = betterproto.message_field(3)
    occurred_at_unix_ts_utc: int = betterproto.int64_field(4)


@dataclass(eq=False, repr=False)
class Metrics(betterproto.Message):
    name: str = betterproto.string_field(1)
    labels: Dict[str, str] = betterproto.map_field(
        2, betterproto.TYPE_STRING, betterproto.TYPE_STRING
    )
    value: float = betterproto.double_field(3)


@dataclass(eq=False, repr=False)
class MetricsRequest(betterproto.Message):
    metrics: List["Metrics"] = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class RegisterRequest(betterproto.Message):
    service_name: str = betterproto.string_field(1)
    dry_run: bool = betterproto.bool_field(2)
    """
    If set, we know that any pipelines or steps executed in this SDK will NOT
    modify the input/output data. As in, the SDK will log what it _would_ do
    and always return the original data set.
    """

    client_info: "ClientInfo" = betterproto.message_field(3)
    """Info about the client (lib name, lang, os, arch, etc.)"""

    audiences: List["Audience"] = betterproto.message_field(4)
    """
    OPTIONAL -- if these are defined, these will show up in the UI even if
    there is no active .Process() call from the SDK.
    """


@dataclass(eq=False, repr=False)
class DeregisterRequest(betterproto.Message):
    """
    Same as RegisterRequest - used for broadcasting a deregistration event
    """

    service_name: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class BusEvent(betterproto.Message):
    """Type used by `snitch-server` for sending messages on its local bus."""

    source: str = betterproto.string_field(1)
    command_response: "Command" = betterproto.message_field(100, group="event")
    register_request: "RegisterRequest" = betterproto.message_field(101, group="event")
    deregister_request: "DeregisterRequest" = betterproto.message_field(
        102, group="event"
    )
    heartbeat_request: "HeartbeatRequest" = betterproto.message_field(
        103, group="event"
    )
    metadata: Dict[str, str] = betterproto.map_field(
        1000, betterproto.TYPE_STRING, betterproto.TYPE_STRING
    )
    """
    All gRPC metadata is stored in ctx; when request goes outside of gRPC
    bounds, we will translate ctx metadata into this field. Example: 1. Request
    comes into snitch-server via external gRPC to set new pipeline 2. snitch-
    server has to send SetPipeline cmd to SDK via gRPC - it passes    on
    original metadata in request. 3. snitch-server has to broadcast SetPipeline
    cmd to other services via bus 4. Since this is not a gRPC call, snitch-
    server translates ctx metadata to    this field and includes it in the bus
    event.
    """


@dataclass(eq=False, repr=False)
class GetServiceMapRequest(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class GetServiceMapResponse(betterproto.Message):
    service_map: Dict[str, "ServiceInfo"] = betterproto.map_field(
        1, betterproto.TYPE_STRING, betterproto.TYPE_MESSAGE
    )
    """Key == service name"""


@dataclass(eq=False, repr=False)
class GetPipelinesRequest(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class GetPipelinesResponse(betterproto.Message):
    pipelines: List["Pipeline"] = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class GetPipelineRequest(betterproto.Message):
    pipeline_id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class GetPipelineResponse(betterproto.Message):
    pipeline: "Pipeline" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class CreatePipelineRequest(betterproto.Message):
    pipeline: "Pipeline" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class UpdatePipelineRequest(betterproto.Message):
    pipeline: "Pipeline" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class DeletePipelineRequest(betterproto.Message):
    pipeline_id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class AttachPipelineRequest(betterproto.Message):
    pipeline_id: str = betterproto.string_field(1)
    audience: "Audience" = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class DetachPipelineRequest(betterproto.Message):
    pipeline_id: str = betterproto.string_field(1)
    audience: "Audience" = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class PausePipelineRequest(betterproto.Message):
    pipeline_id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class ResumePipelineRequest(betterproto.Message):
    pipeline_id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class TestRequest(betterproto.Message):
    input: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class TestResponse(betterproto.Message):
    output: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class WasmRequest(betterproto.Message):
    """SDK generates a WASM request and passes this to the WASM func"""

    step: "PipelineStep" = betterproto.message_field(1)
    input: bytes = betterproto.bytes_field(2)


@dataclass(eq=False, repr=False)
class WasmResponse(betterproto.Message):
    """Returned by all WASM functions"""

    output: bytes = betterproto.bytes_field(1)
    exit_code: "WasmExitCode" = betterproto.enum_field(2)
    exit_msg: str = betterproto.string_field(3)


class InternalStub(betterproto.ServiceStub):
    async def register(
        self,
        register_request: "RegisterRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> AsyncIterator["Command"]:
        async for response in self._unary_stream(
            "/protos.Internal/Register",
            register_request,
            Command,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        ):
            yield response

    async def heartbeat(
        self,
        heartbeat_request: "HeartbeatRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.Internal/Heartbeat",
            heartbeat_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def notify(
        self,
        notify_request: "NotifyRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.Internal/Notify",
            notify_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def metrics(
        self,
        metrics_request: "MetricsRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.Internal/Metrics",
            metrics_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class ExternalStub(betterproto.ServiceStub):
    async def get_service_map(
        self,
        get_service_map_request: "GetServiceMapRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "GetServiceMapResponse":
        return await self._unary_unary(
            "/protos.External/GetServiceMap",
            get_service_map_request,
            GetServiceMapResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def get_pipelines(
        self,
        get_pipelines_request: "GetPipelinesRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "GetPipelinesResponse":
        return await self._unary_unary(
            "/protos.External/GetPipelines",
            get_pipelines_request,
            GetPipelinesResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def get_pipeline(
        self,
        get_pipeline_request: "GetPipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "GetPipelineResponse":
        return await self._unary_unary(
            "/protos.External/GetPipeline",
            get_pipeline_request,
            GetPipelineResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def create_pipeline(
        self,
        create_pipeline_request: "CreatePipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.External/CreatePipeline",
            create_pipeline_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def update_pipeline(
        self,
        update_pipeline_request: "UpdatePipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.External/UpdatePipeline",
            update_pipeline_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def delete_pipeline(
        self,
        delete_pipeline_request: "DeletePipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.External/DeletePipeline",
            delete_pipeline_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def attach_pipeline(
        self,
        attach_pipeline_request: "AttachPipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.External/AttachPipeline",
            attach_pipeline_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def detach_pipeline(
        self,
        detach_pipeline_request: "DetachPipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.External/DetachPipeline",
            detach_pipeline_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def pause_pipeline(
        self,
        pause_pipeline_request: "PausePipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.External/PausePipeline",
            pause_pipeline_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def resume_pipeline(
        self,
        resume_pipeline_request: "ResumePipelineRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "StandardResponse":
        return await self._unary_unary(
            "/protos.External/ResumePipeline",
            resume_pipeline_request,
            StandardResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def test(
        self,
        test_request: "TestRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "TestResponse":
        return await self._unary_unary(
            "/protos.External/Test",
            test_request,
            TestResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class InternalBase(ServiceBase):
    async def register(
        self, register_request: "RegisterRequest"
    ) -> AsyncIterator["Command"]:
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)
        yield Command()

    async def heartbeat(
        self, heartbeat_request: "HeartbeatRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def notify(self, notify_request: "NotifyRequest") -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def metrics(self, metrics_request: "MetricsRequest") -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_register(
        self, stream: "grpclib.server.Stream[RegisterRequest, Command]"
    ) -> None:
        request = await stream.recv_message()
        await self._call_rpc_handler_server_stream(
            self.register,
            stream,
            request,
        )

    async def __rpc_heartbeat(
        self, stream: "grpclib.server.Stream[HeartbeatRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.heartbeat(request)
        await stream.send_message(response)

    async def __rpc_notify(
        self, stream: "grpclib.server.Stream[NotifyRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.notify(request)
        await stream.send_message(response)

    async def __rpc_metrics(
        self, stream: "grpclib.server.Stream[MetricsRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.metrics(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/protos.Internal/Register": grpclib.const.Handler(
                self.__rpc_register,
                grpclib.const.Cardinality.UNARY_STREAM,
                RegisterRequest,
                Command,
            ),
            "/protos.Internal/Heartbeat": grpclib.const.Handler(
                self.__rpc_heartbeat,
                grpclib.const.Cardinality.UNARY_UNARY,
                HeartbeatRequest,
                StandardResponse,
            ),
            "/protos.Internal/Notify": grpclib.const.Handler(
                self.__rpc_notify,
                grpclib.const.Cardinality.UNARY_UNARY,
                NotifyRequest,
                StandardResponse,
            ),
            "/protos.Internal/Metrics": grpclib.const.Handler(
                self.__rpc_metrics,
                grpclib.const.Cardinality.UNARY_UNARY,
                MetricsRequest,
                StandardResponse,
            ),
        }


class ExternalBase(ServiceBase):
    async def get_service_map(
        self, get_service_map_request: "GetServiceMapRequest"
    ) -> "GetServiceMapResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def get_pipelines(
        self, get_pipelines_request: "GetPipelinesRequest"
    ) -> "GetPipelinesResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def get_pipeline(
        self, get_pipeline_request: "GetPipelineRequest"
    ) -> "GetPipelineResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def create_pipeline(
        self, create_pipeline_request: "CreatePipelineRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def update_pipeline(
        self, update_pipeline_request: "UpdatePipelineRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def delete_pipeline(
        self, delete_pipeline_request: "DeletePipelineRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def attach_pipeline(
        self, attach_pipeline_request: "AttachPipelineRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def detach_pipeline(
        self, detach_pipeline_request: "DetachPipelineRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def pause_pipeline(
        self, pause_pipeline_request: "PausePipelineRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def resume_pipeline(
        self, resume_pipeline_request: "ResumePipelineRequest"
    ) -> "StandardResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def test(self, test_request: "TestRequest") -> "TestResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_get_service_map(
        self,
        stream: "grpclib.server.Stream[GetServiceMapRequest, GetServiceMapResponse]",
    ) -> None:
        request = await stream.recv_message()
        response = await self.get_service_map(request)
        await stream.send_message(response)

    async def __rpc_get_pipelines(
        self, stream: "grpclib.server.Stream[GetPipelinesRequest, GetPipelinesResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.get_pipelines(request)
        await stream.send_message(response)

    async def __rpc_get_pipeline(
        self, stream: "grpclib.server.Stream[GetPipelineRequest, GetPipelineResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.get_pipeline(request)
        await stream.send_message(response)

    async def __rpc_create_pipeline(
        self, stream: "grpclib.server.Stream[CreatePipelineRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.create_pipeline(request)
        await stream.send_message(response)

    async def __rpc_update_pipeline(
        self, stream: "grpclib.server.Stream[UpdatePipelineRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.update_pipeline(request)
        await stream.send_message(response)

    async def __rpc_delete_pipeline(
        self, stream: "grpclib.server.Stream[DeletePipelineRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.delete_pipeline(request)
        await stream.send_message(response)

    async def __rpc_attach_pipeline(
        self, stream: "grpclib.server.Stream[AttachPipelineRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.attach_pipeline(request)
        await stream.send_message(response)

    async def __rpc_detach_pipeline(
        self, stream: "grpclib.server.Stream[DetachPipelineRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.detach_pipeline(request)
        await stream.send_message(response)

    async def __rpc_pause_pipeline(
        self, stream: "grpclib.server.Stream[PausePipelineRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.pause_pipeline(request)
        await stream.send_message(response)

    async def __rpc_resume_pipeline(
        self, stream: "grpclib.server.Stream[ResumePipelineRequest, StandardResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.resume_pipeline(request)
        await stream.send_message(response)

    async def __rpc_test(
        self, stream: "grpclib.server.Stream[TestRequest, TestResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.test(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/protos.External/GetServiceMap": grpclib.const.Handler(
                self.__rpc_get_service_map,
                grpclib.const.Cardinality.UNARY_UNARY,
                GetServiceMapRequest,
                GetServiceMapResponse,
            ),
            "/protos.External/GetPipelines": grpclib.const.Handler(
                self.__rpc_get_pipelines,
                grpclib.const.Cardinality.UNARY_UNARY,
                GetPipelinesRequest,
                GetPipelinesResponse,
            ),
            "/protos.External/GetPipeline": grpclib.const.Handler(
                self.__rpc_get_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                GetPipelineRequest,
                GetPipelineResponse,
            ),
            "/protos.External/CreatePipeline": grpclib.const.Handler(
                self.__rpc_create_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                CreatePipelineRequest,
                StandardResponse,
            ),
            "/protos.External/UpdatePipeline": grpclib.const.Handler(
                self.__rpc_update_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                UpdatePipelineRequest,
                StandardResponse,
            ),
            "/protos.External/DeletePipeline": grpclib.const.Handler(
                self.__rpc_delete_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                DeletePipelineRequest,
                StandardResponse,
            ),
            "/protos.External/AttachPipeline": grpclib.const.Handler(
                self.__rpc_attach_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                AttachPipelineRequest,
                StandardResponse,
            ),
            "/protos.External/DetachPipeline": grpclib.const.Handler(
                self.__rpc_detach_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                DetachPipelineRequest,
                StandardResponse,
            ),
            "/protos.External/PausePipeline": grpclib.const.Handler(
                self.__rpc_pause_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                PausePipelineRequest,
                StandardResponse,
            ),
            "/protos.External/ResumePipeline": grpclib.const.Handler(
                self.__rpc_resume_pipeline,
                grpclib.const.Cardinality.UNARY_UNARY,
                ResumePipelineRequest,
                StandardResponse,
            ),
            "/protos.External/Test": grpclib.const.Handler(
                self.__rpc_test,
                grpclib.const.Cardinality.UNARY_UNARY,
                TestRequest,
                TestResponse,
            ),
        }
