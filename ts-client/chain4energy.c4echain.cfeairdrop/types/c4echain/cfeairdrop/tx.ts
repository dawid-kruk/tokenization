/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import {
  CampaignCloseAction,
  campaignCloseActionFromJSON,
  campaignCloseActionToJSON,
  CampaignType,
  campaignTypeFromJSON,
  campaignTypeToJSON,
} from "./campaign";
import { ClaimRecord } from "./claim_record";
import { MissionType, missionTypeFromJSON, missionTypeToJSON } from "./mission";

export const protobufPackage = "chain4energy.c4echain.cfeclaim";

export interface MsgClaim {
  claimer: string;
  campaignId: number;
  missionId: number;
}

export interface MsgClaimResponse {
}

export interface MsgInitialClaim {
  claimer: string;
  campaignId: number;
  addressToClaim: string;
}

export interface MsgInitialClaimResponse {
}

export interface MsgCreateCampaign {
  owner: string;
  name: string;
  description: string;
  campaignType: CampaignType;
  feegrantAmount: string;
  initialClaimFreeAmount: string;
  startTime: Date | undefined;
  endTime: Date | undefined;
  lockupPeriod: Duration | undefined;
  vestingPeriod: Duration | undefined;
}

export interface MsgCreateCampaignResponse {
}

export interface MsgAddMissionToCampaign {
  owner: string;
  campaignId: number;
  name: string;
  description: string;
  missionType: MissionType;
  weight: string;
  claimStartDate: Date | undefined;
}

export interface MsgAddMissionToCampaignResponse {
}

export interface MsgAddClaimRecords {
  owner: string;
  campaignId: number;
  claimRecords: ClaimRecord[];
}

export interface MsgAddClaimRecordsResponse {
}

export interface MsgDeleteClaimRecord {
  owner: string;
  campaignId: number;
  userAddress: string;
}

export interface MsgDeleteClaimRecordResponse {
}

export interface MsgCloseCampaign {
  owner: string;
  campaignId: number;
  campaignCloseAction: CampaignCloseAction;
}

export interface MsgCloseCampaignResponse {
}

export interface MsgStartCampaign {
  owner: string;
  campaignId: number;
}

export interface MsgStartCampaignResponse {
}

export interface MsgRemoveCampaign {
  owner: string;
  campaignId: number;
}

export interface MsgRemoveCampaignResponse {
}

export interface MsgEditCampaign {
  owner: string;
  campaignId: number;
  name: string;
  description: string;
  feegrantAmount: string;
  initialClaimFreeAmount: string;
  startTime: Date | undefined;
  endTime: Date | undefined;
  lockupPeriod: Duration | undefined;
  vestingPeriod: Duration | undefined;
}

export interface MsgEditCampaignResponse {
}

function createBaseMsgClaim(): MsgClaim {
  return { claimer: "", campaignId: 0, missionId: 0 };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    if (message.missionId !== 0) {
      writer.uint32(24).uint64(message.missionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.missionId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaim {
    return {
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      missionId: isSet(object.missionId) ? Number(object.missionId) : 0,
    };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.claimer !== undefined && (obj.claimer = message.claimer);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    message.missionId !== undefined && (obj.missionId = Math.round(message.missionId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.claimer = object.claimer ?? "";
    message.campaignId = object.campaignId ?? 0;
    message.missionId = object.missionId ?? 0;
    return message;
  },
};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}

export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgClaimResponse {
    return {};
  },

  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(_: I): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
};

function createBaseMsgInitialClaim(): MsgInitialClaim {
  return { claimer: "", campaignId: 0, addressToClaim: "" };
}

export const MsgInitialClaim = {
  encode(message: MsgInitialClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    if (message.addressToClaim !== "") {
      writer.uint32(26).string(message.addressToClaim);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.addressToClaim = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitialClaim {
    return {
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      addressToClaim: isSet(object.addressToClaim) ? String(object.addressToClaim) : "",
    };
  },

  toJSON(message: MsgInitialClaim): unknown {
    const obj: any = {};
    message.claimer !== undefined && (obj.claimer = message.claimer);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    message.addressToClaim !== undefined && (obj.addressToClaim = message.addressToClaim);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitialClaim>, I>>(object: I): MsgInitialClaim {
    const message = createBaseMsgInitialClaim();
    message.claimer = object.claimer ?? "";
    message.campaignId = object.campaignId ?? 0;
    message.addressToClaim = object.addressToClaim ?? "";
    return message;
  },
};

function createBaseMsgInitialClaimResponse(): MsgInitialClaimResponse {
  return {};
}

export const MsgInitialClaimResponse = {
  encode(_: MsgInitialClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgInitialClaimResponse {
    return {};
  },

  toJSON(_: MsgInitialClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitialClaimResponse>, I>>(_: I): MsgInitialClaimResponse {
    const message = createBaseMsgInitialClaimResponse();
    return message;
  },
};

function createBaseMsgCreateCampaign(): MsgCreateCampaign {
  return {
    owner: "",
    name: "",
    description: "",
    campaignType: 0,
    feegrantAmount: "",
    initialClaimFreeAmount: "",
    startTime: undefined,
    endTime: undefined,
    lockupPeriod: undefined,
    vestingPeriod: undefined,
  };
}

export const MsgCreateCampaign = {
  encode(message: MsgCreateCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.campaignType !== 0) {
      writer.uint32(32).int32(message.campaignType);
    }
    if (message.feegrantAmount !== "") {
      writer.uint32(42).string(message.feegrantAmount);
    }
    if (message.initialClaimFreeAmount !== "") {
      writer.uint32(50).string(message.initialClaimFreeAmount);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.lockupPeriod !== undefined) {
      Duration.encode(message.lockupPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.vestingPeriod !== undefined) {
      Duration.encode(message.vestingPeriod, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCampaign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.campaignType = reader.int32() as any;
          break;
        case 5:
          message.feegrantAmount = reader.string();
          break;
        case 6:
          message.initialClaimFreeAmount = reader.string();
          break;
        case 7:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.lockupPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.vestingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCampaign {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      campaignType: isSet(object.campaignType) ? campaignTypeFromJSON(object.campaignType) : 0,
      feegrantAmount: isSet(object.feegrantAmount) ? String(object.feegrantAmount) : "",
      initialClaimFreeAmount: isSet(object.initialClaimFreeAmount) ? String(object.initialClaimFreeAmount) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      lockupPeriod: isSet(object.lockupPeriod) ? Duration.fromJSON(object.lockupPeriod) : undefined,
      vestingPeriod: isSet(object.vestingPeriod) ? Duration.fromJSON(object.vestingPeriod) : undefined,
    };
  },

  toJSON(message: MsgCreateCampaign): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.campaignType !== undefined && (obj.campaignType = campaignTypeToJSON(message.campaignType));
    message.feegrantAmount !== undefined && (obj.feegrantAmount = message.feegrantAmount);
    message.initialClaimFreeAmount !== undefined && (obj.initialClaimFreeAmount = message.initialClaimFreeAmount);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.lockupPeriod !== undefined
      && (obj.lockupPeriod = message.lockupPeriod ? Duration.toJSON(message.lockupPeriod) : undefined);
    message.vestingPeriod !== undefined
      && (obj.vestingPeriod = message.vestingPeriod ? Duration.toJSON(message.vestingPeriod) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCampaign>, I>>(object: I): MsgCreateCampaign {
    const message = createBaseMsgCreateCampaign();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.campaignType = object.campaignType ?? 0;
    message.feegrantAmount = object.feegrantAmount ?? "";
    message.initialClaimFreeAmount = object.initialClaimFreeAmount ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.lockupPeriod = (object.lockupPeriod !== undefined && object.lockupPeriod !== null)
      ? Duration.fromPartial(object.lockupPeriod)
      : undefined;
    message.vestingPeriod = (object.vestingPeriod !== undefined && object.vestingPeriod !== null)
      ? Duration.fromPartial(object.vestingPeriod)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateCampaignResponse(): MsgCreateCampaignResponse {
  return {};
}

export const MsgCreateCampaignResponse = {
  encode(_: MsgCreateCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCampaignResponse {
    return {};
  },

  toJSON(_: MsgCreateCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCampaignResponse>, I>>(_: I): MsgCreateCampaignResponse {
    const message = createBaseMsgCreateCampaignResponse();
    return message;
  },
};

function createBaseMsgAddMissionToCampaign(): MsgAddMissionToCampaign {
  return { owner: "", campaignId: 0, name: "", description: "", missionType: 0, weight: "", claimStartDate: undefined };
}

export const MsgAddMissionToCampaign = {
  encode(message: MsgAddMissionToCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.missionType !== 0) {
      writer.uint32(40).int32(message.missionType);
    }
    if (message.weight !== "") {
      writer.uint32(50).string(message.weight);
    }
    if (message.claimStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.claimStartDate), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMissionToCampaign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMissionToCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.missionType = reader.int32() as any;
          break;
        case 6:
          message.weight = reader.string();
          break;
        case 7:
          message.claimStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddMissionToCampaign {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      missionType: isSet(object.missionType) ? missionTypeFromJSON(object.missionType) : 0,
      weight: isSet(object.weight) ? String(object.weight) : "",
      claimStartDate: isSet(object.claimStartDate) ? fromJsonTimestamp(object.claimStartDate) : undefined,
    };
  },

  toJSON(message: MsgAddMissionToCampaign): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.missionType !== undefined && (obj.missionType = missionTypeToJSON(message.missionType));
    message.weight !== undefined && (obj.weight = message.weight);
    message.claimStartDate !== undefined && (obj.claimStartDate = message.claimStartDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMissionToCampaign>, I>>(object: I): MsgAddMissionToCampaign {
    const message = createBaseMsgAddMissionToCampaign();
    message.owner = object.owner ?? "";
    message.campaignId = object.campaignId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.missionType = object.missionType ?? 0;
    message.weight = object.weight ?? "";
    message.claimStartDate = object.claimStartDate ?? undefined;
    return message;
  },
};

function createBaseMsgAddMissionToCampaignResponse(): MsgAddMissionToCampaignResponse {
  return {};
}

export const MsgAddMissionToCampaignResponse = {
  encode(_: MsgAddMissionToCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMissionToCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMissionToCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddMissionToCampaignResponse {
    return {};
  },

  toJSON(_: MsgAddMissionToCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMissionToCampaignResponse>, I>>(_: I): MsgAddMissionToCampaignResponse {
    const message = createBaseMsgAddMissionToCampaignResponse();
    return message;
  },
};

function createBaseMsgAddClaimRecords(): MsgAddClaimRecords {
  return { owner: "", campaignId: 0, claimRecords: [] };
}

export const MsgAddClaimRecords = {
  encode(message: MsgAddClaimRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClaimRecords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddClaimRecords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddClaimRecords {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      claimRecords: Array.isArray(object?.claimRecords)
        ? object.claimRecords.map((e: any) => ClaimRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgAddClaimRecords): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    if (message.claimRecords) {
      obj.claimRecords = message.claimRecords.map((e) => e ? ClaimRecord.toJSON(e) : undefined);
    } else {
      obj.claimRecords = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddClaimRecords>, I>>(object: I): MsgAddClaimRecords {
    const message = createBaseMsgAddClaimRecords();
    message.owner = object.owner ?? "";
    message.campaignId = object.campaignId ?? 0;
    message.claimRecords = object.claimRecords?.map((e) => ClaimRecord.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgAddClaimRecordsResponse(): MsgAddClaimRecordsResponse {
  return {};
}

export const MsgAddClaimRecordsResponse = {
  encode(_: MsgAddClaimRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClaimRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddClaimRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddClaimRecordsResponse {
    return {};
  },

  toJSON(_: MsgAddClaimRecordsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddClaimRecordsResponse>, I>>(_: I): MsgAddClaimRecordsResponse {
    const message = createBaseMsgAddClaimRecordsResponse();
    return message;
  },
};

function createBaseMsgDeleteClaimRecord(): MsgDeleteClaimRecord {
  return { owner: "", campaignId: 0, userAddress: "" };
}

export const MsgDeleteClaimRecord = {
  encode(message: MsgDeleteClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    if (message.userAddress !== "") {
      writer.uint32(26).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteClaimRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteClaimRecord {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
    };
  },

  toJSON(message: MsgDeleteClaimRecord): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    message.userAddress !== undefined && (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteClaimRecord>, I>>(object: I): MsgDeleteClaimRecord {
    const message = createBaseMsgDeleteClaimRecord();
    message.owner = object.owner ?? "";
    message.campaignId = object.campaignId ?? 0;
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

function createBaseMsgDeleteClaimRecordResponse(): MsgDeleteClaimRecordResponse {
  return {};
}

export const MsgDeleteClaimRecordResponse = {
  encode(_: MsgDeleteClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteClaimRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteClaimRecordResponse {
    return {};
  },

  toJSON(_: MsgDeleteClaimRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteClaimRecordResponse>, I>>(_: I): MsgDeleteClaimRecordResponse {
    const message = createBaseMsgDeleteClaimRecordResponse();
    return message;
  },
};

function createBaseMsgCloseCampaign(): MsgCloseCampaign {
  return { owner: "", campaignId: 0, campaignCloseAction: 0 };
}

export const MsgCloseCampaign = {
  encode(message: MsgCloseCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    if (message.campaignCloseAction !== 0) {
      writer.uint32(24).int32(message.campaignCloseAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseCampaign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.campaignCloseAction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseCampaign {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      campaignCloseAction: isSet(object.campaignCloseAction)
        ? campaignCloseActionFromJSON(object.campaignCloseAction)
        : 0,
    };
  },

  toJSON(message: MsgCloseCampaign): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    message.campaignCloseAction !== undefined
      && (obj.campaignCloseAction = campaignCloseActionToJSON(message.campaignCloseAction));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseCampaign>, I>>(object: I): MsgCloseCampaign {
    const message = createBaseMsgCloseCampaign();
    message.owner = object.owner ?? "";
    message.campaignId = object.campaignId ?? 0;
    message.campaignCloseAction = object.campaignCloseAction ?? 0;
    return message;
  },
};

function createBaseMsgCloseCampaignResponse(): MsgCloseCampaignResponse {
  return {};
}

export const MsgCloseCampaignResponse = {
  encode(_: MsgCloseCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCloseCampaignResponse {
    return {};
  },

  toJSON(_: MsgCloseCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseCampaignResponse>, I>>(_: I): MsgCloseCampaignResponse {
    const message = createBaseMsgCloseCampaignResponse();
    return message;
  },
};

function createBaseMsgStartCampaign(): MsgStartCampaign {
  return { owner: "", campaignId: 0 };
}

export const MsgStartCampaign = {
  encode(message: MsgStartCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartCampaign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartCampaign {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
    };
  },

  toJSON(message: MsgStartCampaign): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartCampaign>, I>>(object: I): MsgStartCampaign {
    const message = createBaseMsgStartCampaign();
    message.owner = object.owner ?? "";
    message.campaignId = object.campaignId ?? 0;
    return message;
  },
};

function createBaseMsgStartCampaignResponse(): MsgStartCampaignResponse {
  return {};
}

export const MsgStartCampaignResponse = {
  encode(_: MsgStartCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgStartCampaignResponse {
    return {};
  },

  toJSON(_: MsgStartCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartCampaignResponse>, I>>(_: I): MsgStartCampaignResponse {
    const message = createBaseMsgStartCampaignResponse();
    return message;
  },
};

function createBaseMsgRemoveCampaign(): MsgRemoveCampaign {
  return { owner: "", campaignId: 0 };
}

export const MsgRemoveCampaign = {
  encode(message: MsgRemoveCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveCampaign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveCampaign {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
    };
  },

  toJSON(message: MsgRemoveCampaign): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveCampaign>, I>>(object: I): MsgRemoveCampaign {
    const message = createBaseMsgRemoveCampaign();
    message.owner = object.owner ?? "";
    message.campaignId = object.campaignId ?? 0;
    return message;
  },
};

function createBaseMsgRemoveCampaignResponse(): MsgRemoveCampaignResponse {
  return {};
}

export const MsgRemoveCampaignResponse = {
  encode(_: MsgRemoveCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveCampaignResponse {
    return {};
  },

  toJSON(_: MsgRemoveCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveCampaignResponse>, I>>(_: I): MsgRemoveCampaignResponse {
    const message = createBaseMsgRemoveCampaignResponse();
    return message;
  },
};

function createBaseMsgEditCampaign(): MsgEditCampaign {
  return {
    owner: "",
    campaignId: 0,
    name: "",
    description: "",
    feegrantAmount: "",
    initialClaimFreeAmount: "",
    startTime: undefined,
    endTime: undefined,
    lockupPeriod: undefined,
    vestingPeriod: undefined,
  };
}

export const MsgEditCampaign = {
  encode(message: MsgEditCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.campaignId !== 0) {
      writer.uint32(16).uint64(message.campaignId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.feegrantAmount !== "") {
      writer.uint32(42).string(message.feegrantAmount);
    }
    if (message.initialClaimFreeAmount !== "") {
      writer.uint32(50).string(message.initialClaimFreeAmount);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.lockupPeriod !== undefined) {
      Duration.encode(message.lockupPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.vestingPeriod !== undefined) {
      Duration.encode(message.vestingPeriod, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditCampaign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditCampaign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.campaignId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.feegrantAmount = reader.string();
          break;
        case 6:
          message.initialClaimFreeAmount = reader.string();
          break;
        case 7:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.lockupPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.vestingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditCampaign {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      feegrantAmount: isSet(object.feegrantAmount) ? String(object.feegrantAmount) : "",
      initialClaimFreeAmount: isSet(object.initialClaimFreeAmount) ? String(object.initialClaimFreeAmount) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      lockupPeriod: isSet(object.lockupPeriod) ? Duration.fromJSON(object.lockupPeriod) : undefined,
      vestingPeriod: isSet(object.vestingPeriod) ? Duration.fromJSON(object.vestingPeriod) : undefined,
    };
  },

  toJSON(message: MsgEditCampaign): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.campaignId !== undefined && (obj.campaignId = Math.round(message.campaignId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.feegrantAmount !== undefined && (obj.feegrantAmount = message.feegrantAmount);
    message.initialClaimFreeAmount !== undefined && (obj.initialClaimFreeAmount = message.initialClaimFreeAmount);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.lockupPeriod !== undefined
      && (obj.lockupPeriod = message.lockupPeriod ? Duration.toJSON(message.lockupPeriod) : undefined);
    message.vestingPeriod !== undefined
      && (obj.vestingPeriod = message.vestingPeriod ? Duration.toJSON(message.vestingPeriod) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditCampaign>, I>>(object: I): MsgEditCampaign {
    const message = createBaseMsgEditCampaign();
    message.owner = object.owner ?? "";
    message.campaignId = object.campaignId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.feegrantAmount = object.feegrantAmount ?? "";
    message.initialClaimFreeAmount = object.initialClaimFreeAmount ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.lockupPeriod = (object.lockupPeriod !== undefined && object.lockupPeriod !== null)
      ? Duration.fromPartial(object.lockupPeriod)
      : undefined;
    message.vestingPeriod = (object.vestingPeriod !== undefined && object.vestingPeriod !== null)
      ? Duration.fromPartial(object.vestingPeriod)
      : undefined;
    return message;
  },
};

function createBaseMsgEditCampaignResponse(): MsgEditCampaignResponse {
  return {};
}

export const MsgEditCampaignResponse = {
  encode(_: MsgEditCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditCampaignResponse {
    return {};
  },

  toJSON(_: MsgEditCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditCampaignResponse>, I>>(_: I): MsgEditCampaignResponse {
    const message = createBaseMsgEditCampaignResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
  InitialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse>;
  CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
  EditCampaign(request: MsgEditCampaign): Promise<MsgEditCampaignResponse>;
  AddMissionToCampaign(request: MsgAddMissionToCampaign): Promise<MsgAddMissionToCampaignResponse>;
  AddClaimRecords(request: MsgAddClaimRecords): Promise<MsgAddClaimRecordsResponse>;
  DeleteClaimRecord(request: MsgDeleteClaimRecord): Promise<MsgDeleteClaimRecordResponse>;
  CloseCampaign(request: MsgCloseCampaign): Promise<MsgCloseCampaignResponse>;
  StartCampaign(request: MsgStartCampaign): Promise<MsgStartCampaignResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RemoveCampaign(request: MsgRemoveCampaign): Promise<MsgRemoveCampaignResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Claim = this.Claim.bind(this);
    this.InitialClaim = this.InitialClaim.bind(this);
    this.CreateCampaign = this.CreateCampaign.bind(this);
    this.EditCampaign = this.EditCampaign.bind(this);
    this.AddMissionToCampaign = this.AddMissionToCampaign.bind(this);
    this.AddClaimRecords = this.AddClaimRecords.bind(this);
    this.DeleteClaimRecord = this.DeleteClaimRecord.bind(this);
    this.CloseCampaign = this.CloseCampaign.bind(this);
    this.StartCampaign = this.StartCampaign.bind(this);
    this.RemoveCampaign = this.RemoveCampaign.bind(this);
  }
  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "Claim", data);
    return promise.then((data) => MsgClaimResponse.decode(new _m0.Reader(data)));
  }

  InitialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse> {
    const data = MsgInitialClaim.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "InitialClaim", data);
    return promise.then((data) => MsgInitialClaimResponse.decode(new _m0.Reader(data)));
  }

  CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse> {
    const data = MsgCreateCampaign.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "CreateCampaign", data);
    return promise.then((data) => MsgCreateCampaignResponse.decode(new _m0.Reader(data)));
  }

  EditCampaign(request: MsgEditCampaign): Promise<MsgEditCampaignResponse> {
    const data = MsgEditCampaign.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "EditCampaign", data);
    return promise.then((data) => MsgEditCampaignResponse.decode(new _m0.Reader(data)));
  }

  AddMissionToCampaign(request: MsgAddMissionToCampaign): Promise<MsgAddMissionToCampaignResponse> {
    const data = MsgAddMissionToCampaign.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "AddMissionToCampaign", data);
    return promise.then((data) => MsgAddMissionToCampaignResponse.decode(new _m0.Reader(data)));
  }

  AddClaimRecords(request: MsgAddClaimRecords): Promise<MsgAddClaimRecordsResponse> {
    const data = MsgAddClaimRecords.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "AddClaimRecords", data);
    return promise.then((data) => MsgAddClaimRecordsResponse.decode(new _m0.Reader(data)));
  }

  DeleteClaimRecord(request: MsgDeleteClaimRecord): Promise<MsgDeleteClaimRecordResponse> {
    const data = MsgDeleteClaimRecord.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "DeleteClaimRecord", data);
    return promise.then((data) => MsgDeleteClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  CloseCampaign(request: MsgCloseCampaign): Promise<MsgCloseCampaignResponse> {
    const data = MsgCloseCampaign.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "CloseCampaign", data);
    return promise.then((data) => MsgCloseCampaignResponse.decode(new _m0.Reader(data)));
  }

  StartCampaign(request: MsgStartCampaign): Promise<MsgStartCampaignResponse> {
    const data = MsgStartCampaign.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "StartCampaign", data);
    return promise.then((data) => MsgStartCampaignResponse.decode(new _m0.Reader(data)));
  }

  RemoveCampaign(request: MsgRemoveCampaign): Promise<MsgRemoveCampaignResponse> {
    const data = MsgRemoveCampaign.encode(request).finish();
    const promise = this.rpc.request("chain4energy.c4echain.cfeclaim.Msg", "RemoveCampaign", data);
    return promise.then((data) => MsgRemoveCampaignResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
