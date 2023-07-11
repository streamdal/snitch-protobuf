// This file is generated by rust-protobuf 3.2.0. Do not edit
// .proto file is parsed by protoc --rust-out=...
// @generated

// https://github.com/rust-lang/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![allow(unused_attributes)]
#![cfg_attr(rustfmt, rustfmt::skip)]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unused_results)]
#![allow(unused_mut)]

//! Generated file from `common.proto`

/// Generated files are compatible only with the same version
/// of protobuf runtime.
const _PROTOBUF_VERSION_CHECK: () = ::protobuf::VERSION_3_2_0;

///  All pipeline steps MUST return this message upon exec completion
#[derive(PartialEq,Clone,Default,Debug)]
// @@protoc_insertion_point(message:protos.StepResponse)
pub struct StepResponse {
    // message fields
    // @@protoc_insertion_point(field:protos.StepResponse.output)
    pub output: ::std::vec::Vec<u8>,
    // @@protoc_insertion_point(field:protos.StepResponse.status)
    pub status: ::protobuf::EnumOrUnknown<StepStatus>,
    // @@protoc_insertion_point(field:protos.StepResponse.status_message)
    pub status_message: ::std::string::String,
    // special fields
    // @@protoc_insertion_point(special_field:protos.StepResponse.special_fields)
    pub special_fields: ::protobuf::SpecialFields,
}

impl<'a> ::std::default::Default for &'a StepResponse {
    fn default() -> &'a StepResponse {
        <StepResponse as ::protobuf::Message>::default_instance()
    }
}

impl StepResponse {
    pub fn new() -> StepResponse {
        ::std::default::Default::default()
    }

    fn generated_message_descriptor_data() -> ::protobuf::reflect::GeneratedMessageDescriptorData {
        let mut fields = ::std::vec::Vec::with_capacity(3);
        let mut oneofs = ::std::vec::Vec::with_capacity(0);
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "output",
            |m: &StepResponse| { &m.output },
            |m: &mut StepResponse| { &mut m.output },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "status",
            |m: &StepResponse| { &m.status },
            |m: &mut StepResponse| { &mut m.status },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "status_message",
            |m: &StepResponse| { &m.status_message },
            |m: &mut StepResponse| { &mut m.status_message },
        ));
        ::protobuf::reflect::GeneratedMessageDescriptorData::new_2::<StepResponse>(
            "StepResponse",
            fields,
            oneofs,
        )
    }
}

impl ::protobuf::Message for StepResponse {
    const NAME: &'static str = "StepResponse";

    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::Result<()> {
        while let Some(tag) = is.read_raw_tag_or_eof()? {
            match tag {
                10 => {
                    self.output = is.read_bytes()?;
                },
                16 => {
                    self.status = is.read_enum_or_unknown()?;
                },
                26 => {
                    self.status_message = is.read_string()?;
                },
                tag => {
                    ::protobuf::rt::read_unknown_or_skip_group(tag, is, self.special_fields.mut_unknown_fields())?;
                },
            };
        }
        ::std::result::Result::Ok(())
    }

    // Compute sizes of nested messages
    #[allow(unused_variables)]
    fn compute_size(&self) -> u64 {
        let mut my_size = 0;
        if !self.output.is_empty() {
            my_size += ::protobuf::rt::bytes_size(1, &self.output);
        }
        if self.status != ::protobuf::EnumOrUnknown::new(StepStatus::STEP_STATUS_UNSET) {
            my_size += ::protobuf::rt::int32_size(2, self.status.value());
        }
        if !self.status_message.is_empty() {
            my_size += ::protobuf::rt::string_size(3, &self.status_message);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.special_fields.unknown_fields());
        self.special_fields.cached_size().set(my_size as u32);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::Result<()> {
        if !self.output.is_empty() {
            os.write_bytes(1, &self.output)?;
        }
        if self.status != ::protobuf::EnumOrUnknown::new(StepStatus::STEP_STATUS_UNSET) {
            os.write_enum(2, ::protobuf::EnumOrUnknown::value(&self.status))?;
        }
        if !self.status_message.is_empty() {
            os.write_string(3, &self.status_message)?;
        }
        os.write_unknown_fields(self.special_fields.unknown_fields())?;
        ::std::result::Result::Ok(())
    }

    fn special_fields(&self) -> &::protobuf::SpecialFields {
        &self.special_fields
    }

    fn mut_special_fields(&mut self) -> &mut ::protobuf::SpecialFields {
        &mut self.special_fields
    }

    fn new() -> StepResponse {
        StepResponse::new()
    }

    fn clear(&mut self) {
        self.output.clear();
        self.status = ::protobuf::EnumOrUnknown::new(StepStatus::STEP_STATUS_UNSET);
        self.status_message.clear();
        self.special_fields.clear();
    }

    fn default_instance() -> &'static StepResponse {
        static instance: StepResponse = StepResponse {
            output: ::std::vec::Vec::new(),
            status: ::protobuf::EnumOrUnknown::from_i32(0),
            status_message: ::std::string::String::new(),
            special_fields: ::protobuf::SpecialFields::new(),
        };
        &instance
    }
}

impl ::protobuf::MessageFull for StepResponse {
    fn descriptor() -> ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().message_by_package_relative_name("StepResponse").unwrap()).clone()
    }
}

impl ::std::fmt::Display for StepResponse {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for StepResponse {
    type RuntimeType = ::protobuf::reflect::rt::RuntimeTypeMessage<Self>;
}

///  Common status codes used in gRPC method responses
#[derive(Clone,Copy,PartialEq,Eq,Debug,Hash)]
// @@protoc_insertion_point(enum:protos.Status)
pub enum Status {
    // @@protoc_insertion_point(enum_value:protos.Status.RESPONSE_STATUS_UNSET)
    RESPONSE_STATUS_UNSET = 0,
    // @@protoc_insertion_point(enum_value:protos.Status.RESPONSE_STATUS_OK)
    RESPONSE_STATUS_OK = 1,
    // @@protoc_insertion_point(enum_value:protos.Status.RESPONSE_STATUS_BAD_REQUEST)
    RESPONSE_STATUS_BAD_REQUEST = 2,
    // @@protoc_insertion_point(enum_value:protos.Status.RESPONSE_STATUS_NOT_FOUND)
    RESPONSE_STATUS_NOT_FOUND = 3,
    // @@protoc_insertion_point(enum_value:protos.Status.RESPONSE_STATUS_INTERNAL_SERVER_ERROR)
    RESPONSE_STATUS_INTERNAL_SERVER_ERROR = 4,
    // @@protoc_insertion_point(enum_value:protos.Status.RESPONSE_STATUS_GENERIC_ERROR)
    RESPONSE_STATUS_GENERIC_ERROR = 5,
}

impl ::protobuf::Enum for Status {
    const NAME: &'static str = "Status";

    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<Status> {
        match value {
            0 => ::std::option::Option::Some(Status::RESPONSE_STATUS_UNSET),
            1 => ::std::option::Option::Some(Status::RESPONSE_STATUS_OK),
            2 => ::std::option::Option::Some(Status::RESPONSE_STATUS_BAD_REQUEST),
            3 => ::std::option::Option::Some(Status::RESPONSE_STATUS_NOT_FOUND),
            4 => ::std::option::Option::Some(Status::RESPONSE_STATUS_INTERNAL_SERVER_ERROR),
            5 => ::std::option::Option::Some(Status::RESPONSE_STATUS_GENERIC_ERROR),
            _ => ::std::option::Option::None
        }
    }

    const VALUES: &'static [Status] = &[
        Status::RESPONSE_STATUS_UNSET,
        Status::RESPONSE_STATUS_OK,
        Status::RESPONSE_STATUS_BAD_REQUEST,
        Status::RESPONSE_STATUS_NOT_FOUND,
        Status::RESPONSE_STATUS_INTERNAL_SERVER_ERROR,
        Status::RESPONSE_STATUS_GENERIC_ERROR,
    ];
}

impl ::protobuf::EnumFull for Status {
    fn enum_descriptor() -> ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().enum_by_package_relative_name("Status").unwrap()).clone()
    }

    fn descriptor(&self) -> ::protobuf::reflect::EnumValueDescriptor {
        let index = *self as usize;
        Self::enum_descriptor().value_by_index(index)
    }
}

impl ::std::default::Default for Status {
    fn default() -> Self {
        Status::RESPONSE_STATUS_UNSET
    }
}

impl Status {
    fn generated_enum_descriptor_data() -> ::protobuf::reflect::GeneratedEnumDescriptorData {
        ::protobuf::reflect::GeneratedEnumDescriptorData::new::<Status>("Status")
    }
}

///  Condition defines how the pipeline should behave when a condition is met
#[derive(Clone,Copy,PartialEq,Eq,Debug,Hash)]
// @@protoc_insertion_point(enum:protos.Condition)
pub enum Condition {
    // @@protoc_insertion_point(enum_value:protos.Condition.CONDITION_UNSET)
    CONDITION_UNSET = 0,
    // @@protoc_insertion_point(enum_value:protos.Condition.CONDITION_ON_ERROR_CONTINUE_PIPELINE)
    CONDITION_ON_ERROR_CONTINUE_PIPELINE = 1,
    // @@protoc_insertion_point(enum_value:protos.Condition.CONDITION_ON_ERROR_ABORT_PIPELINE)
    CONDITION_ON_ERROR_ABORT_PIPELINE = 2,
    // @@protoc_insertion_point(enum_value:protos.Condition.CONDITION_ON_ERROR_NOTIFY_SERVER)
    CONDITION_ON_ERROR_NOTIFY_SERVER = 3,
    // @@protoc_insertion_point(enum_value:protos.Condition.CONDITION_ON_MATCH_CONTINUE_PIPELINE)
    CONDITION_ON_MATCH_CONTINUE_PIPELINE = 4,
    // @@protoc_insertion_point(enum_value:protos.Condition.CONDITION_ON_MATCH_ABORT_PIPELINE)
    CONDITION_ON_MATCH_ABORT_PIPELINE = 5,
    // @@protoc_insertion_point(enum_value:protos.Condition.CONDITION_ON_MATCH_NOTIFY_SERVER)
    CONDITION_ON_MATCH_NOTIFY_SERVER = 6,
}

impl ::protobuf::Enum for Condition {
    const NAME: &'static str = "Condition";

    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<Condition> {
        match value {
            0 => ::std::option::Option::Some(Condition::CONDITION_UNSET),
            1 => ::std::option::Option::Some(Condition::CONDITION_ON_ERROR_CONTINUE_PIPELINE),
            2 => ::std::option::Option::Some(Condition::CONDITION_ON_ERROR_ABORT_PIPELINE),
            3 => ::std::option::Option::Some(Condition::CONDITION_ON_ERROR_NOTIFY_SERVER),
            4 => ::std::option::Option::Some(Condition::CONDITION_ON_MATCH_CONTINUE_PIPELINE),
            5 => ::std::option::Option::Some(Condition::CONDITION_ON_MATCH_ABORT_PIPELINE),
            6 => ::std::option::Option::Some(Condition::CONDITION_ON_MATCH_NOTIFY_SERVER),
            _ => ::std::option::Option::None
        }
    }

    const VALUES: &'static [Condition] = &[
        Condition::CONDITION_UNSET,
        Condition::CONDITION_ON_ERROR_CONTINUE_PIPELINE,
        Condition::CONDITION_ON_ERROR_ABORT_PIPELINE,
        Condition::CONDITION_ON_ERROR_NOTIFY_SERVER,
        Condition::CONDITION_ON_MATCH_CONTINUE_PIPELINE,
        Condition::CONDITION_ON_MATCH_ABORT_PIPELINE,
        Condition::CONDITION_ON_MATCH_NOTIFY_SERVER,
    ];
}

impl ::protobuf::EnumFull for Condition {
    fn enum_descriptor() -> ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().enum_by_package_relative_name("Condition").unwrap()).clone()
    }

    fn descriptor(&self) -> ::protobuf::reflect::EnumValueDescriptor {
        let index = *self as usize;
        Self::enum_descriptor().value_by_index(index)
    }
}

impl ::std::default::Default for Condition {
    fn default() -> Self {
        Condition::CONDITION_UNSET
    }
}

impl Condition {
    fn generated_enum_descriptor_data() -> ::protobuf::reflect::GeneratedEnumDescriptorData {
        ::protobuf::reflect::GeneratedEnumDescriptorData::new::<Condition>("Condition")
    }
}

#[derive(Clone,Copy,PartialEq,Eq,Debug,Hash)]
// @@protoc_insertion_point(enum:protos.StepStatus)
pub enum StepStatus {
    // @@protoc_insertion_point(enum_value:protos.StepStatus.STEP_STATUS_UNSET)
    STEP_STATUS_UNSET = 0,
    // @@protoc_insertion_point(enum_value:protos.StepStatus.STEP_STATUS_SUCCESS)
    STEP_STATUS_SUCCESS = 1,
    // @@protoc_insertion_point(enum_value:protos.StepStatus.STEP_STATUS_FAILURE)
    STEP_STATUS_FAILURE = 2,
    // @@protoc_insertion_point(enum_value:protos.StepStatus.STEP_STATUS_ERROR)
    STEP_STATUS_ERROR = 3,
}

impl ::protobuf::Enum for StepStatus {
    const NAME: &'static str = "StepStatus";

    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<StepStatus> {
        match value {
            0 => ::std::option::Option::Some(StepStatus::STEP_STATUS_UNSET),
            1 => ::std::option::Option::Some(StepStatus::STEP_STATUS_SUCCESS),
            2 => ::std::option::Option::Some(StepStatus::STEP_STATUS_FAILURE),
            3 => ::std::option::Option::Some(StepStatus::STEP_STATUS_ERROR),
            _ => ::std::option::Option::None
        }
    }

    const VALUES: &'static [StepStatus] = &[
        StepStatus::STEP_STATUS_UNSET,
        StepStatus::STEP_STATUS_SUCCESS,
        StepStatus::STEP_STATUS_FAILURE,
        StepStatus::STEP_STATUS_ERROR,
    ];
}

impl ::protobuf::EnumFull for StepStatus {
    fn enum_descriptor() -> ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().enum_by_package_relative_name("StepStatus").unwrap()).clone()
    }

    fn descriptor(&self) -> ::protobuf::reflect::EnumValueDescriptor {
        let index = *self as usize;
        Self::enum_descriptor().value_by_index(index)
    }
}

impl ::std::default::Default for StepStatus {
    fn default() -> Self {
        StepStatus::STEP_STATUS_UNSET
    }
}

impl StepStatus {
    fn generated_enum_descriptor_data() -> ::protobuf::reflect::GeneratedEnumDescriptorData {
        ::protobuf::reflect::GeneratedEnumDescriptorData::new::<StepStatus>("StepStatus")
    }
}

static file_descriptor_proto_data: &'static [u8] = b"\
    \n\x0ccommon.proto\x12\x06protos\"y\n\x0cStepResponse\x12\x16\n\x06outpu\
    t\x18\x01\x20\x01(\x0cR\x06output\x12*\n\x06status\x18\x02\x20\x01(\x0e2\
    \x12.protos.StepStatusR\x06status\x12%\n\x0estatus_message\x18\x03\x20\
    \x01(\tR\rstatusMessage*\xc9\x01\n\x06Status\x12\x19\n\x15RESPONSE_STATU\
    S_UNSET\x10\0\x12\x16\n\x12RESPONSE_STATUS_OK\x10\x01\x12\x1f\n\x1bRESPO\
    NSE_STATUS_BAD_REQUEST\x10\x02\x12\x1d\n\x19RESPONSE_STATUS_NOT_FOUND\
    \x10\x03\x12)\n%RESPONSE_STATUS_INTERNAL_SERVER_ERROR\x10\x04\x12!\n\x1d\
    RESPONSE_STATUS_GENERIC_ERROR\x10\x05*\x8e\x02\n\tCondition\x12\x13\n\
    \x0fCONDITION_UNSET\x10\0\x12(\n$CONDITION_ON_ERROR_CONTINUE_PIPELINE\
    \x10\x01\x12%\n!CONDITION_ON_ERROR_ABORT_PIPELINE\x10\x02\x12$\n\x20COND\
    ITION_ON_ERROR_NOTIFY_SERVER\x10\x03\x12(\n$CONDITION_ON_MATCH_CONTINUE_\
    PIPELINE\x10\x04\x12%\n!CONDITION_ON_MATCH_ABORT_PIPELINE\x10\x05\x12$\n\
    \x20CONDITION_ON_MATCH_NOTIFY_SERVER\x10\x06*l\n\nStepStatus\x12\x15\n\
    \x11STEP_STATUS_UNSET\x10\0\x12\x17\n\x13STEP_STATUS_SUCCESS\x10\x01\x12\
    \x17\n\x13STEP_STATUS_FAILURE\x10\x02\x12\x15\n\x11STEP_STATUS_ERROR\x10\
    \x03B4Z2github.com/streamdal/snitch-protos/build/go/protosJ\xb4\t\n\x06\
    \x12\x04\0\0)\x01\n\x08\n\x01\x0c\x12\x03\0\0\x12\n\x08\n\x01\x02\x12\
    \x03\x02\0\x0f\n\x08\n\x01\x08\x12\x03\x04\0I\n\t\n\x02\x08\x0b\x12\x03\
    \x04\0I\n?\n\x02\x05\0\x12\x04\x07\0\x0e\x01\x1a3\x20Common\x20status\
    \x20codes\x20used\x20in\x20gRPC\x20method\x20responses\n\n\n\n\x03\x05\0\
    \x01\x12\x03\x07\x05\x0b\n\x0b\n\x04\x05\0\x02\0\x12\x03\x08\x02\x1b\n\
    \x0c\n\x05\x05\0\x02\0\x01\x12\x03\x08\x02\x17\n\x0c\n\x05\x05\0\x02\0\
    \x02\x12\x03\x08\x19\x1a\n\x0b\n\x04\x05\0\x02\x01\x12\x03\t\x02\x19\n\
    \x0c\n\x05\x05\0\x02\x01\x01\x12\x03\t\x02\x14\n\x0c\n\x05\x05\0\x02\x01\
    \x02\x12\x03\t\x17\x18\n\x0b\n\x04\x05\0\x02\x02\x12\x03\n\x02\"\n\x0c\n\
    \x05\x05\0\x02\x02\x01\x12\x03\n\x02\x1d\n\x0c\n\x05\x05\0\x02\x02\x02\
    \x12\x03\n\x20!\n\x0b\n\x04\x05\0\x02\x03\x12\x03\x0b\x02\x20\n\x0c\n\
    \x05\x05\0\x02\x03\x01\x12\x03\x0b\x02\x1b\n\x0c\n\x05\x05\0\x02\x03\x02\
    \x12\x03\x0b\x1e\x1f\n\x0b\n\x04\x05\0\x02\x04\x12\x03\x0c\x02,\n\x0c\n\
    \x05\x05\0\x02\x04\x01\x12\x03\x0c\x02'\n\x0c\n\x05\x05\0\x02\x04\x02\
    \x12\x03\x0c*+\n\x0b\n\x04\x05\0\x02\x05\x12\x03\r\x02$\n\x0c\n\x05\x05\
    \0\x02\x05\x01\x12\x03\r\x02\x1f\n\x0c\n\x05\x05\0\x02\x05\x02\x12\x03\r\
    \"#\nV\n\x02\x05\x01\x12\x04\x11\0\x1b\x01\x1aJ\x20Condition\x20defines\
    \x20how\x20the\x20pipeline\x20should\x20behave\x20when\x20a\x20condition\
    \x20is\x20met\n\n\n\n\x03\x05\x01\x01\x12\x03\x11\x05\x0e\n\x0b\n\x04\
    \x05\x01\x02\0\x12\x03\x12\x02\x16\n\x0c\n\x05\x05\x01\x02\0\x01\x12\x03\
    \x12\x02\x11\n\x0c\n\x05\x05\x01\x02\0\x02\x12\x03\x12\x14\x15\n\x0b\n\
    \x04\x05\x01\x02\x01\x12\x03\x13\x02+\n\x0c\n\x05\x05\x01\x02\x01\x01\
    \x12\x03\x13\x02&\n\x0c\n\x05\x05\x01\x02\x01\x02\x12\x03\x13)*\n\x0b\n\
    \x04\x05\x01\x02\x02\x12\x03\x14\x02(\n\x0c\n\x05\x05\x01\x02\x02\x01\
    \x12\x03\x14\x02#\n\x0c\n\x05\x05\x01\x02\x02\x02\x12\x03\x14&'\n\x0b\n\
    \x04\x05\x01\x02\x03\x12\x03\x15\x02'\n\x0c\n\x05\x05\x01\x02\x03\x01\
    \x12\x03\x15\x02\"\n\x0c\n\x05\x05\x01\x02\x03\x02\x12\x03\x15%&\n\x0b\n\
    \x04\x05\x01\x02\x04\x12\x03\x16\x02+\n\x0c\n\x05\x05\x01\x02\x04\x01\
    \x12\x03\x16\x02&\n\x0c\n\x05\x05\x01\x02\x04\x02\x12\x03\x16)*\n\x0b\n\
    \x04\x05\x01\x02\x05\x12\x03\x17\x02(\n\x0c\n\x05\x05\x01\x02\x05\x01\
    \x12\x03\x17\x02#\n\x0c\n\x05\x05\x01\x02\x05\x02\x12\x03\x17&'\n\x0b\n\
    \x04\x05\x01\x02\x06\x12\x03\x18\x02'\n\x0c\n\x05\x05\x01\x02\x06\x01\
    \x12\x03\x18\x02\"\n\x0c\n\x05\x05\x01\x02\x06\x02\x12\x03\x18%&\nN\n\
    \x02\x04\0\x12\x04\x1e\0\"\x01\x1aB\x20All\x20pipeline\x20steps\x20MUST\
    \x20return\x20this\x20message\x20upon\x20exec\x20completion\n\n\n\n\x03\
    \x04\0\x01\x12\x03\x1e\x08\x14\n\x0b\n\x04\x04\0\x02\0\x12\x03\x1f\x02\
    \x13\n\x0c\n\x05\x04\0\x02\0\x05\x12\x03\x1f\x02\x07\n\x0c\n\x05\x04\0\
    \x02\0\x01\x12\x03\x1f\x08\x0e\n\x0c\n\x05\x04\0\x02\0\x03\x12\x03\x1f\
    \x11\x12\n\x0b\n\x04\x04\0\x02\x01\x12\x03\x20\x02\x18\n\x0c\n\x05\x04\0\
    \x02\x01\x06\x12\x03\x20\x02\x0c\n\x0c\n\x05\x04\0\x02\x01\x01\x12\x03\
    \x20\r\x13\n\x0c\n\x05\x04\0\x02\x01\x03\x12\x03\x20\x16\x17\n\x0b\n\x04\
    \x04\0\x02\x02\x12\x03!\x02\x1c\n\x0c\n\x05\x04\0\x02\x02\x05\x12\x03!\
    \x02\x08\n\x0c\n\x05\x04\0\x02\x02\x01\x12\x03!\t\x17\n\x0c\n\x05\x04\0\
    \x02\x02\x03\x12\x03!\x1a\x1b\n\n\n\x02\x05\x02\x12\x04$\0)\x01\n\n\n\
    \x03\x05\x02\x01\x12\x03$\x05\x0f\n\x0b\n\x04\x05\x02\x02\0\x12\x03%\x02\
    \x18\n\x0c\n\x05\x05\x02\x02\0\x01\x12\x03%\x02\x13\n\x0c\n\x05\x05\x02\
    \x02\0\x02\x12\x03%\x16\x17\n\x0b\n\x04\x05\x02\x02\x01\x12\x03&\x02\x1a\
    \n\x0c\n\x05\x05\x02\x02\x01\x01\x12\x03&\x02\x15\n\x0c\n\x05\x05\x02\
    \x02\x01\x02\x12\x03&\x18\x19\n\x0b\n\x04\x05\x02\x02\x02\x12\x03'\x02\
    \x1a\n\x0c\n\x05\x05\x02\x02\x02\x01\x12\x03'\x02\x15\n\x0c\n\x05\x05\
    \x02\x02\x02\x02\x12\x03'\x18\x19\n\x0b\n\x04\x05\x02\x02\x03\x12\x03(\
    \x02\x18\n\x0c\n\x05\x05\x02\x02\x03\x01\x12\x03(\x02\x13\n\x0c\n\x05\
    \x05\x02\x02\x03\x02\x12\x03(\x16\x17b\x06proto3\
";

/// `FileDescriptorProto` object which was a source for this generated file
fn file_descriptor_proto() -> &'static ::protobuf::descriptor::FileDescriptorProto {
    static file_descriptor_proto_lazy: ::protobuf::rt::Lazy<::protobuf::descriptor::FileDescriptorProto> = ::protobuf::rt::Lazy::new();
    file_descriptor_proto_lazy.get(|| {
        ::protobuf::Message::parse_from_bytes(file_descriptor_proto_data).unwrap()
    })
}

/// `FileDescriptor` object which allows dynamic access to files
pub fn file_descriptor() -> &'static ::protobuf::reflect::FileDescriptor {
    static generated_file_descriptor_lazy: ::protobuf::rt::Lazy<::protobuf::reflect::GeneratedFileDescriptor> = ::protobuf::rt::Lazy::new();
    static file_descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::FileDescriptor> = ::protobuf::rt::Lazy::new();
    file_descriptor.get(|| {
        let generated_file_descriptor = generated_file_descriptor_lazy.get(|| {
            let mut deps = ::std::vec::Vec::with_capacity(0);
            let mut messages = ::std::vec::Vec::with_capacity(1);
            messages.push(StepResponse::generated_message_descriptor_data());
            let mut enums = ::std::vec::Vec::with_capacity(3);
            enums.push(Status::generated_enum_descriptor_data());
            enums.push(Condition::generated_enum_descriptor_data());
            enums.push(StepStatus::generated_enum_descriptor_data());
            ::protobuf::reflect::GeneratedFileDescriptor::new_generated(
                file_descriptor_proto(),
                deps,
                messages,
                enums,
            )
        });
        ::protobuf::reflect::FileDescriptor::new_generated_2(generated_file_descriptor)
    })
}
