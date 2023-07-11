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

//! Generated file from `steps/custom.proto`

/// Generated files are compatible only with the same version
/// of protobuf runtime.
const _PROTOBUF_VERSION_CHECK: () = ::protobuf::VERSION_3_2_0;

///  WIP
#[derive(PartialEq,Clone,Default,Debug)]
// @@protoc_insertion_point(message:protos.steps.CustomStep)
pub struct CustomStep {
    // message fields
    // @@protoc_insertion_point(field:protos.steps.CustomStep.id)
    pub id: ::std::string::String,
    // @@protoc_insertion_point(field:protos.steps.CustomStep.conditions)
    pub conditions: ::std::vec::Vec<::protobuf::EnumOrUnknown<super::common::Condition>>,
    // special fields
    // @@protoc_insertion_point(special_field:protos.steps.CustomStep.special_fields)
    pub special_fields: ::protobuf::SpecialFields,
}

impl<'a> ::std::default::Default for &'a CustomStep {
    fn default() -> &'a CustomStep {
        <CustomStep as ::protobuf::Message>::default_instance()
    }
}

impl CustomStep {
    pub fn new() -> CustomStep {
        ::std::default::Default::default()
    }

    fn generated_message_descriptor_data() -> ::protobuf::reflect::GeneratedMessageDescriptorData {
        let mut fields = ::std::vec::Vec::with_capacity(2);
        let mut oneofs = ::std::vec::Vec::with_capacity(0);
        fields.push(::protobuf::reflect::rt::v2::make_simpler_field_accessor::<_, _>(
            "id",
            |m: &CustomStep| { &m.id },
            |m: &mut CustomStep| { &mut m.id },
        ));
        fields.push(::protobuf::reflect::rt::v2::make_vec_simpler_accessor::<_, _>(
            "conditions",
            |m: &CustomStep| { &m.conditions },
            |m: &mut CustomStep| { &mut m.conditions },
        ));
        ::protobuf::reflect::GeneratedMessageDescriptorData::new_2::<CustomStep>(
            "CustomStep",
            fields,
            oneofs,
        )
    }
}

impl ::protobuf::Message for CustomStep {
    const NAME: &'static str = "CustomStep";

    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::Result<()> {
        while let Some(tag) = is.read_raw_tag_or_eof()? {
            match tag {
                10 => {
                    self.id = is.read_string()?;
                },
                16 => {
                    self.conditions.push(is.read_enum_or_unknown()?);
                },
                18 => {
                    ::protobuf::rt::read_repeated_packed_enum_or_unknown_into(is, &mut self.conditions)?
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
        if !self.id.is_empty() {
            my_size += ::protobuf::rt::string_size(1, &self.id);
        }
        for value in &self.conditions {
            my_size += ::protobuf::rt::int32_size(2, value.value());
        };
        my_size += ::protobuf::rt::unknown_fields_size(self.special_fields.unknown_fields());
        self.special_fields.cached_size().set(my_size as u32);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::Result<()> {
        if !self.id.is_empty() {
            os.write_string(1, &self.id)?;
        }
        for v in &self.conditions {
            os.write_enum(2, ::protobuf::EnumOrUnknown::value(v))?;
        };
        os.write_unknown_fields(self.special_fields.unknown_fields())?;
        ::std::result::Result::Ok(())
    }

    fn special_fields(&self) -> &::protobuf::SpecialFields {
        &self.special_fields
    }

    fn mut_special_fields(&mut self) -> &mut ::protobuf::SpecialFields {
        &mut self.special_fields
    }

    fn new() -> CustomStep {
        CustomStep::new()
    }

    fn clear(&mut self) {
        self.id.clear();
        self.conditions.clear();
        self.special_fields.clear();
    }

    fn default_instance() -> &'static CustomStep {
        static instance: CustomStep = CustomStep {
            id: ::std::string::String::new(),
            conditions: ::std::vec::Vec::new(),
            special_fields: ::protobuf::SpecialFields::new(),
        };
        &instance
    }
}

impl ::protobuf::MessageFull for CustomStep {
    fn descriptor() -> ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::Lazy<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::Lazy::new();
        descriptor.get(|| file_descriptor().message_by_package_relative_name("CustomStep").unwrap()).clone()
    }
}

impl ::std::fmt::Display for CustomStep {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for CustomStep {
    type RuntimeType = ::protobuf::reflect::rt::RuntimeTypeMessage<Self>;
}

static file_descriptor_proto_data: &'static [u8] = b"\
    \n\x12steps/custom.proto\x12\x0cprotos.steps\x1a\x0ccommon.proto\"O\n\nC\
    ustomStep\x12\x0e\n\x02id\x18\x01\x20\x01(\tR\x02id\x121\n\nconditions\
    \x18\x02\x20\x03(\x0e2\x11.protos.ConditionR\nconditionsB:Z8github.com/s\
    treamdal/snitch-protos/build/go/protos/stepsJ\xd7\x01\n\x06\x12\x04\0\0\
    \x0c\x01\n\x08\n\x01\x0c\x12\x03\0\0\x12\n\x08\n\x01\x02\x12\x03\x02\0\
    \x15\n\t\n\x02\x03\0\x12\x03\x04\0\x16\n\x08\n\x01\x08\x12\x03\x06\0O\n\
    \t\n\x02\x08\x0b\x12\x03\x06\0O\n\x11\n\x02\x04\0\x12\x04\t\0\x0c\x01\
    \x1a\x05\x20WIP\n\n\n\n\x03\x04\0\x01\x12\x03\t\x08\x12\n\x0b\n\x04\x04\
    \0\x02\0\x12\x03\n\x02\x10\n\x0c\n\x05\x04\0\x02\0\x05\x12\x03\n\x02\x08\
    \n\x0c\n\x05\x04\0\x02\0\x01\x12\x03\n\t\x0b\n\x0c\n\x05\x04\0\x02\0\x03\
    \x12\x03\n\x0e\x0f\n\x0b\n\x04\x04\0\x02\x01\x12\x03\x0b\x02+\n\x0c\n\
    \x05\x04\0\x02\x01\x04\x12\x03\x0b\x02\n\n\x0c\n\x05\x04\0\x02\x01\x06\
    \x12\x03\x0b\x0b\x1b\n\x0c\n\x05\x04\0\x02\x01\x01\x12\x03\x0b\x1c&\n\
    \x0c\n\x05\x04\0\x02\x01\x03\x12\x03\x0b)*b\x06proto3\
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
            let mut deps = ::std::vec::Vec::with_capacity(1);
            deps.push(super::common::file_descriptor().clone());
            let mut messages = ::std::vec::Vec::with_capacity(1);
            messages.push(CustomStep::generated_message_descriptor_data());
            let mut enums = ::std::vec::Vec::with_capacity(0);
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
