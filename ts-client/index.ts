// Generated by Ignite ignite.com/cli
import { Registry } from '@cosmjs/proto-signing'
import { IgniteClient } from "./client";
import { MissingWalletError } from "./helpers";
import { Module as Chain4EnergyC4EchainCfeclaim, msgTypes as Chain4EnergyC4EchainCfeclaimMsgTypes } from './chain4energy.c4echain.cfeclaim'
import { Module as Chain4EnergyC4EchainCfedistributor, msgTypes as Chain4EnergyC4EchainCfedistributorMsgTypes } from './chain4energy.c4echain.cfedistributor'
import { Module as Chain4EnergyC4EchainCfeminter, msgTypes as Chain4EnergyC4EchainCfeminterMsgTypes } from './chain4energy.c4echain.cfeminter'
import { Module as Chain4EnergyC4EchainCfesignature, msgTypes as Chain4EnergyC4EchainCfesignatureMsgTypes } from './chain4energy.c4echain.cfesignature'
import { Module as Chain4EnergyC4EchainCfetokenization, msgTypes as Chain4EnergyC4EchainCfetokenizationMsgTypes } from './chain4energy.c4echain.cfetokenization'
import { Module as Chain4EnergyC4EchainCfevesting, msgTypes as Chain4EnergyC4EchainCfevestingMsgTypes } from './chain4energy.c4echain.cfevesting'
import { Module as CosmosAuthV1Beta1, msgTypes as CosmosAuthV1Beta1MsgTypes } from './cosmos.auth.v1beta1'
import { Module as CosmosAuthzV1Beta1, msgTypes as CosmosAuthzV1Beta1MsgTypes } from './cosmos.authz.v1beta1'
import { Module as CosmosBankV1Beta1, msgTypes as CosmosBankV1Beta1MsgTypes } from './cosmos.bank.v1beta1'
import { Module as CosmosBaseTendermintV1Beta1, msgTypes as CosmosBaseTendermintV1Beta1MsgTypes } from './cosmos.base.tendermint.v1beta1'
import { Module as CosmosCrisisV1Beta1, msgTypes as CosmosCrisisV1Beta1MsgTypes } from './cosmos.crisis.v1beta1'
import { Module as CosmosDistributionV1Beta1, msgTypes as CosmosDistributionV1Beta1MsgTypes } from './cosmos.distribution.v1beta1'
import { Module as CosmosEvidenceV1Beta1, msgTypes as CosmosEvidenceV1Beta1MsgTypes } from './cosmos.evidence.v1beta1'
import { Module as CosmosFeegrantV1Beta1, msgTypes as CosmosFeegrantV1Beta1MsgTypes } from './cosmos.feegrant.v1beta1'
import { Module as CosmosGovV1, msgTypes as CosmosGovV1MsgTypes } from './cosmos.gov.v1'
import { Module as CosmosGovV1Beta1, msgTypes as CosmosGovV1Beta1MsgTypes } from './cosmos.gov.v1beta1'
import { Module as CosmosGroupV1, msgTypes as CosmosGroupV1MsgTypes } from './cosmos.group.v1'
import { Module as CosmosNftV1Beta1, msgTypes as CosmosNftV1Beta1MsgTypes } from './cosmos.nft.v1beta1'
import { Module as CosmosParamsV1Beta1, msgTypes as CosmosParamsV1Beta1MsgTypes } from './cosmos.params.v1beta1'
import { Module as CosmosSlashingV1Beta1, msgTypes as CosmosSlashingV1Beta1MsgTypes } from './cosmos.slashing.v1beta1'
import { Module as CosmosStakingV1Beta1, msgTypes as CosmosStakingV1Beta1MsgTypes } from './cosmos.staking.v1beta1'
import { Module as CosmosTxV1Beta1, msgTypes as CosmosTxV1Beta1MsgTypes } from './cosmos.tx.v1beta1'
import { Module as CosmosUpgradeV1Beta1, msgTypes as CosmosUpgradeV1Beta1MsgTypes } from './cosmos.upgrade.v1beta1'
import { Module as CosmosVestingV1Beta1, msgTypes as CosmosVestingV1Beta1MsgTypes } from './cosmos.vesting.v1beta1'
import { Module as IbcApplicationsInterchainAccountsControllerV1, msgTypes as IbcApplicationsInterchainAccountsControllerV1MsgTypes } from './ibc.applications.interchain_accounts.controller.v1'
import { Module as IbcApplicationsInterchainAccountsHostV1, msgTypes as IbcApplicationsInterchainAccountsHostV1MsgTypes } from './ibc.applications.interchain_accounts.host.v1'
import { Module as IbcApplicationsTransferV1, msgTypes as IbcApplicationsTransferV1MsgTypes } from './ibc.applications.transfer.v1'
import { Module as IbcCoreChannelV1, msgTypes as IbcCoreChannelV1MsgTypes } from './ibc.core.channel.v1'
import { Module as IbcCoreClientV1, msgTypes as IbcCoreClientV1MsgTypes } from './ibc.core.client.v1'
import { Module as IbcCoreConnectionV1, msgTypes as IbcCoreConnectionV1MsgTypes } from './ibc.core.connection.v1'


const Client = IgniteClient.plugin([
    Chain4EnergyC4EchainCfeclaim, Chain4EnergyC4EchainCfedistributor, Chain4EnergyC4EchainCfeminter, Chain4EnergyC4EchainCfesignature, Chain4EnergyC4EchainCfetokenization, Chain4EnergyC4EchainCfevesting, CosmosAuthV1Beta1, CosmosAuthzV1Beta1, CosmosBankV1Beta1, CosmosBaseTendermintV1Beta1, CosmosCrisisV1Beta1, CosmosDistributionV1Beta1, CosmosEvidenceV1Beta1, CosmosFeegrantV1Beta1, CosmosGovV1, CosmosGovV1Beta1, CosmosGroupV1, CosmosNftV1Beta1, CosmosParamsV1Beta1, CosmosSlashingV1Beta1, CosmosStakingV1Beta1, CosmosTxV1Beta1, CosmosUpgradeV1Beta1, CosmosVestingV1Beta1, IbcApplicationsInterchainAccountsControllerV1, IbcApplicationsInterchainAccountsHostV1, IbcApplicationsTransferV1, IbcCoreChannelV1, IbcCoreClientV1, IbcCoreConnectionV1
]);

const registry = new Registry([
  ...Chain4EnergyC4EchainCfeclaimMsgTypes,
  ...Chain4EnergyC4EchainCfedistributorMsgTypes,
  ...Chain4EnergyC4EchainCfeminterMsgTypes,
  ...Chain4EnergyC4EchainCfesignatureMsgTypes,
  ...Chain4EnergyC4EchainCfetokenizationMsgTypes,
  ...Chain4EnergyC4EchainCfevestingMsgTypes,
  ...CosmosAuthV1Beta1MsgTypes,
  ...CosmosAuthzV1Beta1MsgTypes,
  ...CosmosBankV1Beta1MsgTypes,
  ...CosmosBaseTendermintV1Beta1MsgTypes,
  ...CosmosCrisisV1Beta1MsgTypes,
  ...CosmosDistributionV1Beta1MsgTypes,
  ...CosmosEvidenceV1Beta1MsgTypes,
  ...CosmosFeegrantV1Beta1MsgTypes,
  ...CosmosGovV1MsgTypes,
  ...CosmosGovV1Beta1MsgTypes,
  ...CosmosGroupV1MsgTypes,
  ...CosmosNftV1Beta1MsgTypes,
  ...CosmosParamsV1Beta1MsgTypes,
  ...CosmosSlashingV1Beta1MsgTypes,
  ...CosmosStakingV1Beta1MsgTypes,
  ...CosmosTxV1Beta1MsgTypes,
  ...CosmosUpgradeV1Beta1MsgTypes,
  ...CosmosVestingV1Beta1MsgTypes,
  ...IbcApplicationsInterchainAccountsControllerV1MsgTypes,
  ...IbcApplicationsInterchainAccountsHostV1MsgTypes,
  ...IbcApplicationsTransferV1MsgTypes,
  ...IbcCoreChannelV1MsgTypes,
  ...IbcCoreClientV1MsgTypes,
  ...IbcCoreConnectionV1MsgTypes,
  
])

export {
    Client,
    registry,
    MissingWalletError
}
