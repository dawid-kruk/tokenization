/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, CertificateType, ExecuteMsg, Timestamp, Uint64, QueryMsg, MigrateMsg, CertificateStatus, UserCertificatesAllResponse, UserCertificates, Certificate, Measurement, FulfilledActivePower, UserDevicesAllResponse, UserDevices, UserDevice, CertificateTypeResponse, CertificateTypeAllResponse, DeviceResponse, Device, DevicesResponse, MarketplaceCertificateResponse, CertificateOffer, MarketplaceCertificatesResponse, ParamsResponse, Params, UserCertificatesResponse, UserDevicesResponse } from "./Sg721.types";
export interface Sg721ReadOnlyInterface {
  contractAddress: string;
  params: () => Promise<ParamsResponse>;
  device: ({
    deviceAddress
  }: {
    deviceAddress: string;
  }) => Promise<DeviceResponse>;
  devices: () => Promise<DevicesResponse>;
  marketplaceCertificates: () => Promise<MarketplaceCertificatesResponse>;
  marketplaceCertificate: ({
    id
  }: {
    id: number;
  }) => Promise<MarketplaceCertificateResponse>;
  certificateType: ({
    id
  }: {
    id: number;
  }) => Promise<CertificateTypeResponse>;
  certificateTypes: () => Promise<CertificateTypeAllResponse>;
  userDevices: ({
    owner
  }: {
    owner: string;
  }) => Promise<UserDevicesResponse>;
  allUserDevices: () => Promise<UserDevicesAllResponse>;
  userCertificates: ({
    owner
  }: {
    owner: string;
  }) => Promise<UserCertificatesResponse>;
  allUserCertificates: () => Promise<UserCertificatesAllResponse>;
}
export class Sg721QueryClient implements Sg721ReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.params = this.params.bind(this);
    this.device = this.device.bind(this);
    this.devices = this.devices.bind(this);
    this.marketplaceCertificates = this.marketplaceCertificates.bind(this);
    this.marketplaceCertificate = this.marketplaceCertificate.bind(this);
    this.certificateType = this.certificateType.bind(this);
    this.certificateTypes = this.certificateTypes.bind(this);
    this.userDevices = this.userDevices.bind(this);
    this.allUserDevices = this.allUserDevices.bind(this);
    this.userCertificates = this.userCertificates.bind(this);
    this.allUserCertificates = this.allUserCertificates.bind(this);
  }

  params = async (): Promise<ParamsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      params: {}
    });
  };
  device = async ({
    deviceAddress
  }: {
    deviceAddress: string;
  }): Promise<DeviceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      device: {
        device_address: deviceAddress
      }
    });
  };
  devices = async (): Promise<DevicesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      devices: {}
    });
  };
  marketplaceCertificates = async (): Promise<MarketplaceCertificatesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      marketplace_certificates: {}
    });
  };
  marketplaceCertificate = async ({
    id
  }: {
    id: number;
  }): Promise<MarketplaceCertificateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      marketplace_certificate: {
        id
      }
    });
  };
  certificateType = async ({
    id
  }: {
    id: number;
  }): Promise<CertificateTypeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      certificate_type: {
        id
      }
    });
  };
  certificateTypes = async (): Promise<CertificateTypeAllResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      certificate_types: {}
    });
  };
  userDevices = async ({
    owner
  }: {
    owner: string;
  }): Promise<UserDevicesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      user_devices: {
        owner
      }
    });
  };
  allUserDevices = async (): Promise<UserDevicesAllResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_user_devices: {}
    });
  };
  userCertificates = async ({
    owner
  }: {
    owner: string;
  }): Promise<UserCertificatesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      user_certificates: {
        owner
      }
    });
  };
  allUserCertificates = async (): Promise<UserCertificatesAllResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_user_certificates: {}
    });
  };
}
export interface Sg721Interface extends Sg721ReadOnlyInterface {
  contractAddress: string;
  sender: string;
  assignDeviceToUser: ({
    deviceAddress,
    userAddress
  }: {
    deviceAddress: string;
    userAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  acceptDevice: ({
    deviceAddress,
    deviceLocation,
    deviceName,
    userAddress
  }: {
    deviceAddress: string;
    deviceLocation: string;
    deviceName: string;
    userAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  createUserCertificates: ({
    allowedAuthorities,
    certificateTypeId,
    deviceAddress,
    measurements,
    owner
  }: {
    allowedAuthorities: string[];
    certificateTypeId: number;
    deviceAddress: string;
    measurements: number[];
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addMeasurement: ({
    activePower,
    deviceAddress,
    metadata,
    reversePower,
    timestamp
  }: {
    activePower: number;
    deviceAddress: string;
    metadata: string;
    reversePower: number;
    timestamp: Timestamp;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addCertificateToMarketplace: ({
    certificateId,
    owner,
    price
  }: {
    certificateId: number;
    owner: string;
    price: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  buyCertificate: ({
    buyer,
    marketplaceCertificateId
  }: {
    buyer: string;
    marketplaceCertificateId: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  burnCertificate: ({
    certificateId,
    deviceAddress,
    owner
  }: {
    certificateId: number;
    deviceAddress: string;
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  authorizeCertificate: ({
    authorizer,
    certificateId,
    userAddress,
    validUntil
  }: {
    authorizer: string;
    certificateId: number;
    userAddress: string;
    validUntil: Timestamp;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class Sg721Client extends Sg721QueryClient implements Sg721Interface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.assignDeviceToUser = this.assignDeviceToUser.bind(this);
    this.acceptDevice = this.acceptDevice.bind(this);
    this.createUserCertificates = this.createUserCertificates.bind(this);
    this.addMeasurement = this.addMeasurement.bind(this);
    this.addCertificateToMarketplace = this.addCertificateToMarketplace.bind(this);
    this.buyCertificate = this.buyCertificate.bind(this);
    this.burnCertificate = this.burnCertificate.bind(this);
    this.authorizeCertificate = this.authorizeCertificate.bind(this);
  }

  assignDeviceToUser = async ({
    deviceAddress,
    userAddress
  }: {
    deviceAddress: string;
    userAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      assign_device_to_user: {
        device_address: deviceAddress,
        user_address: userAddress
      }
    }, fee, memo, _funds);
  };
  acceptDevice = async ({
    deviceAddress,
    deviceLocation,
    deviceName,
    userAddress
  }: {
    deviceAddress: string;
    deviceLocation: string;
    deviceName: string;
    userAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_device: {
        device_address: deviceAddress,
        device_location: deviceLocation,
        device_name: deviceName,
        user_address: userAddress
      }
    }, fee, memo, _funds);
  };
  createUserCertificates = async ({
    allowedAuthorities,
    certificateTypeId,
    deviceAddress,
    measurements,
    owner
  }: {
    allowedAuthorities: string[];
    certificateTypeId: number;
    deviceAddress: string;
    measurements: number[];
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_user_certificates: {
        allowed_authorities: allowedAuthorities,
        certificate_type_id: certificateTypeId,
        device_address: deviceAddress,
        measurements,
        owner
      }
    }, fee, memo, _funds);
  };
  addMeasurement = async ({
    activePower,
    deviceAddress,
    metadata,
    reversePower,
    timestamp
  }: {
    activePower: number;
    deviceAddress: string;
    metadata: string;
    reversePower: number;
    timestamp: Timestamp;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_measurement: {
        active_power: activePower,
        device_address: deviceAddress,
        metadata,
        reverse_power: reversePower,
        timestamp
      }
    }, fee, memo, _funds);
  };
  addCertificateToMarketplace = async ({
    certificateId,
    owner,
    price
  }: {
    certificateId: number;
    owner: string;
    price: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_certificate_to_marketplace: {
        certificate_id: certificateId,
        owner,
        price
      }
    }, fee, memo, _funds);
  };
  buyCertificate = async ({
    buyer,
    marketplaceCertificateId
  }: {
    buyer: string;
    marketplaceCertificateId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      buy_certificate: {
        buyer,
        marketplace_certificate_id: marketplaceCertificateId
      }
    }, fee, memo, _funds);
  };
  burnCertificate = async ({
    certificateId,
    deviceAddress,
    owner
  }: {
    certificateId: number;
    deviceAddress: string;
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      burn_certificate: {
        certificate_id: certificateId,
        device_address: deviceAddress,
        owner
      }
    }, fee, memo, _funds);
  };
  authorizeCertificate = async ({
    authorizer,
    certificateId,
    userAddress,
    validUntil
  }: {
    authorizer: string;
    certificateId: number;
    userAddress: string;
    validUntil: Timestamp;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      authorize_certificate: {
        authorizer,
        certificate_id: certificateId,
        user_address: userAddress,
        valid_until: validUntil
      }
    }, fee, memo, _funds);
  };
}