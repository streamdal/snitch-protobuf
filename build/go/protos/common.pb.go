// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.18.1
// source: common.proto

package protos

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Common status codes used in gRPC method responses
type ResponseCode int32

const (
	ResponseCode_RESPONSE_CODE_UNSET                 ResponseCode = 0
	ResponseCode_RESPONSE_CODE_OK                    ResponseCode = 1
	ResponseCode_RESPONSE_CODE_BAD_REQUEST           ResponseCode = 2
	ResponseCode_RESPONSE_CODE_NOT_FOUND             ResponseCode = 3
	ResponseCode_RESPONSE_CODE_INTERNAL_SERVER_ERROR ResponseCode = 4
	ResponseCode_RESPONSE_CODE_GENERIC_ERROR         ResponseCode = 5
)

// Enum value maps for ResponseCode.
var (
	ResponseCode_name = map[int32]string{
		0: "RESPONSE_CODE_UNSET",
		1: "RESPONSE_CODE_OK",
		2: "RESPONSE_CODE_BAD_REQUEST",
		3: "RESPONSE_CODE_NOT_FOUND",
		4: "RESPONSE_CODE_INTERNAL_SERVER_ERROR",
		5: "RESPONSE_CODE_GENERIC_ERROR",
	}
	ResponseCode_value = map[string]int32{
		"RESPONSE_CODE_UNSET":                 0,
		"RESPONSE_CODE_OK":                    1,
		"RESPONSE_CODE_BAD_REQUEST":           2,
		"RESPONSE_CODE_NOT_FOUND":             3,
		"RESPONSE_CODE_INTERNAL_SERVER_ERROR": 4,
		"RESPONSE_CODE_GENERIC_ERROR":         5,
	}
)

func (x ResponseCode) Enum() *ResponseCode {
	p := new(ResponseCode)
	*p = x
	return p
}

func (x ResponseCode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ResponseCode) Descriptor() protoreflect.EnumDescriptor {
	return file_common_proto_enumTypes[0].Descriptor()
}

func (ResponseCode) Type() protoreflect.EnumType {
	return &file_common_proto_enumTypes[0]
}

func (x ResponseCode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ResponseCode.Descriptor instead.
func (ResponseCode) EnumDescriptor() ([]byte, []int) {
	return file_common_proto_rawDescGZIP(), []int{0}
}

// Common response message for many gRPC methods
type StandardResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Co-relation ID for the request / response
	Id      string       `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Code    ResponseCode `protobuf:"varint,2,opt,name=code,proto3,enum=protos.ResponseCode" json:"code,omitempty"`
	Message string       `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *StandardResponse) Reset() {
	*x = StandardResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_common_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StandardResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StandardResponse) ProtoMessage() {}

func (x *StandardResponse) ProtoReflect() protoreflect.Message {
	mi := &file_common_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StandardResponse.ProtoReflect.Descriptor instead.
func (*StandardResponse) Descriptor() ([]byte, []int) {
	return file_common_proto_rawDescGZIP(), []int{0}
}

func (x *StandardResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *StandardResponse) GetCode() ResponseCode {
	if x != nil {
		return x.Code
	}
	return ResponseCode_RESPONSE_CODE_UNSET
}

func (x *StandardResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

// Common auth message used in all gRPC methods
type Auth struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *Auth) Reset() {
	*x = Auth{}
	if protoimpl.UnsafeEnabled {
		mi := &file_common_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Auth) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Auth) ProtoMessage() {}

func (x *Auth) ProtoReflect() protoreflect.Message {
	mi := &file_common_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Auth.ProtoReflect.Descriptor instead.
func (*Auth) Descriptor() ([]byte, []int) {
	return file_common_proto_rawDescGZIP(), []int{1}
}

func (x *Auth) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

var File_common_proto protoreflect.FileDescriptor

var file_common_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x22, 0x66, 0x0a, 0x10, 0x53, 0x74, 0x61, 0x6e, 0x64, 0x61,
	0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x28, 0x0a, 0x04, 0x63, 0x6f,
	0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x14, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x52, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x1c,
	0x0a, 0x04, 0x41, 0x75, 0x74, 0x68, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2a, 0xc3, 0x01, 0x0a,
	0x0c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x17, 0x0a,
	0x13, 0x52, 0x45, 0x53, 0x50, 0x4f, 0x4e, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x55,
	0x4e, 0x53, 0x45, 0x54, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10, 0x52, 0x45, 0x53, 0x50, 0x4f, 0x4e,
	0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x4f, 0x4b, 0x10, 0x01, 0x12, 0x1d, 0x0a, 0x19,
	0x52, 0x45, 0x53, 0x50, 0x4f, 0x4e, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x42, 0x41,
	0x44, 0x5f, 0x52, 0x45, 0x51, 0x55, 0x45, 0x53, 0x54, 0x10, 0x02, 0x12, 0x1b, 0x0a, 0x17, 0x52,
	0x45, 0x53, 0x50, 0x4f, 0x4e, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x4e, 0x4f, 0x54,
	0x5f, 0x46, 0x4f, 0x55, 0x4e, 0x44, 0x10, 0x03, 0x12, 0x27, 0x0a, 0x23, 0x52, 0x45, 0x53, 0x50,
	0x4f, 0x4e, 0x53, 0x45, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x4e,
	0x41, 0x4c, 0x5f, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x5f, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x10,
	0x04, 0x12, 0x1f, 0x0a, 0x1b, 0x52, 0x45, 0x53, 0x50, 0x4f, 0x4e, 0x53, 0x45, 0x5f, 0x43, 0x4f,
	0x44, 0x45, 0x5f, 0x47, 0x45, 0x4e, 0x45, 0x52, 0x49, 0x43, 0x5f, 0x45, 0x52, 0x52, 0x4f, 0x52,
	0x10, 0x05, 0x42, 0x34, 0x5a, 0x32, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x64, 0x61, 0x6c, 0x2f, 0x73, 0x6e, 0x69, 0x74, 0x63,
	0x68, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67,
	0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_common_proto_rawDescOnce sync.Once
	file_common_proto_rawDescData = file_common_proto_rawDesc
)

func file_common_proto_rawDescGZIP() []byte {
	file_common_proto_rawDescOnce.Do(func() {
		file_common_proto_rawDescData = protoimpl.X.CompressGZIP(file_common_proto_rawDescData)
	})
	return file_common_proto_rawDescData
}

var file_common_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_common_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_common_proto_goTypes = []interface{}{
	(ResponseCode)(0),        // 0: protos.ResponseCode
	(*StandardResponse)(nil), // 1: protos.StandardResponse
	(*Auth)(nil),             // 2: protos.Auth
}
var file_common_proto_depIdxs = []int32{
	0, // 0: protos.StandardResponse.code:type_name -> protos.ResponseCode
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_common_proto_init() }
func file_common_proto_init() {
	if File_common_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_common_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StandardResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_common_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Auth); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_common_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_common_proto_goTypes,
		DependencyIndexes: file_common_proto_depIdxs,
		EnumInfos:         file_common_proto_enumTypes,
		MessageInfos:      file_common_proto_msgTypes,
	}.Build()
	File_common_proto = out.File
	file_common_proto_rawDesc = nil
	file_common_proto_goTypes = nil
	file_common_proto_depIdxs = nil
}
