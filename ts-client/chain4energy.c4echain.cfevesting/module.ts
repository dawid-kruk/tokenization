// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgMoveAvailableVesting } from "./types/c4echain/cfevesting/tx";
import { MsgSplitVesting } from "./types/c4echain/cfevesting/tx";
import { MsgWithdrawAllAvailable } from "./types/c4echain/cfevesting/tx";
import { MsgUpdateDenomParam } from "./types/c4echain/cfevesting/tx";
import { MsgCreateVestingPool } from "./types/c4echain/cfevesting/tx";
import { MsgMoveAvailableVestingByDenoms } from "./types/c4echain/cfevesting/tx";
import { MsgSendToVestingAccount } from "./types/c4echain/cfevesting/tx";
import { MsgCreateVestingAccount } from "./types/c4echain/cfevesting/tx";

import { AccountVestingPools as typeAccountVestingPools} from "./types"
import { VestingPool as typeVestingPool} from "./types"
import { VestingPoolReservation as typeVestingPoolReservation} from "./types"
import { EventNewVestingAccount as typeEventNewVestingAccount} from "./types"
import { EventNewVestingPool as typeEventNewVestingPool} from "./types"
import { EventNewVestingPeriodFromVestingPool as typeEventNewVestingPeriodFromVestingPool} from "./types"
import { EventWithdrawAvailable as typeEventWithdrawAvailable} from "./types"
import { EventVestingSplit as typeEventVestingSplit} from "./types"
import { GenesisVestingType as typeGenesisVestingType} from "./types"
import { Params as typeParams} from "./types"
import { VestingPoolInfo as typeVestingPoolInfo} from "./types"
import { VestingAccountTrace as typeVestingAccountTrace} from "./types"
import { ContinuousVestingPeriod as typeContinuousVestingPeriod} from "./types"
import { PeriodicContinuousVestingAccount as typePeriodicContinuousVestingAccount} from "./types"
import { VestingTypes as typeVestingTypes} from "./types"
import { VestingType as typeVestingType} from "./types"

export { MsgMoveAvailableVesting, MsgSplitVesting, MsgWithdrawAllAvailable, MsgUpdateDenomParam, MsgCreateVestingPool, MsgMoveAvailableVestingByDenoms, MsgSendToVestingAccount, MsgCreateVestingAccount };

type sendMsgMoveAvailableVestingParams = {
  value: MsgMoveAvailableVesting,
  fee?: StdFee,
  memo?: string
};

type sendMsgSplitVestingParams = {
  value: MsgSplitVesting,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawAllAvailableParams = {
  value: MsgWithdrawAllAvailable,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateDenomParamParams = {
  value: MsgUpdateDenomParam,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateVestingPoolParams = {
  value: MsgCreateVestingPool,
  fee?: StdFee,
  memo?: string
};

type sendMsgMoveAvailableVestingByDenomsParams = {
  value: MsgMoveAvailableVestingByDenoms,
  fee?: StdFee,
  memo?: string
};

type sendMsgSendToVestingAccountParams = {
  value: MsgSendToVestingAccount,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount,
  fee?: StdFee,
  memo?: string
};


type msgMoveAvailableVestingParams = {
  value: MsgMoveAvailableVesting,
};

type msgSplitVestingParams = {
  value: MsgSplitVesting,
};

type msgWithdrawAllAvailableParams = {
  value: MsgWithdrawAllAvailable,
};

type msgUpdateDenomParamParams = {
  value: MsgUpdateDenomParam,
};

type msgCreateVestingPoolParams = {
  value: MsgCreateVestingPool,
};

type msgMoveAvailableVestingByDenomsParams = {
  value: MsgMoveAvailableVestingByDenoms,
};

type msgSendToVestingAccountParams = {
  value: MsgSendToVestingAccount,
};

type msgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgMoveAvailableVesting({ value, fee, memo }: sendMsgMoveAvailableVestingParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMoveAvailableVesting: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMoveAvailableVesting({ value: MsgMoveAvailableVesting.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMoveAvailableVesting: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSplitVesting({ value, fee, memo }: sendMsgSplitVestingParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSplitVesting: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSplitVesting({ value: MsgSplitVesting.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSplitVesting: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawAllAvailable({ value, fee, memo }: sendMsgWithdrawAllAvailableParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawAllAvailable: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawAllAvailable({ value: MsgWithdrawAllAvailable.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawAllAvailable: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateDenomParam({ value, fee, memo }: sendMsgUpdateDenomParamParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateDenomParam: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateDenomParam({ value: MsgUpdateDenomParam.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateDenomParam: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateVestingPool({ value, fee, memo }: sendMsgCreateVestingPoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateVestingPool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateVestingPool({ value: MsgCreateVestingPool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateVestingPool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgMoveAvailableVestingByDenoms({ value, fee, memo }: sendMsgMoveAvailableVestingByDenomsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMoveAvailableVestingByDenoms: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMoveAvailableVestingByDenoms({ value: MsgMoveAvailableVestingByDenoms.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMoveAvailableVestingByDenoms: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSendToVestingAccount({ value, fee, memo }: sendMsgSendToVestingAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSendToVestingAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSendToVestingAccount({ value: MsgSendToVestingAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSendToVestingAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateVestingAccount({ value, fee, memo }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateVestingAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateVestingAccount({ value: MsgCreateVestingAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateVestingAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgMoveAvailableVesting({ value }: msgMoveAvailableVestingParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgMoveAvailableVesting", value: MsgMoveAvailableVesting.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMoveAvailableVesting: Could not create message: ' + e.message)
			}
		},
		
		msgSplitVesting({ value }: msgSplitVestingParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgSplitVesting", value: MsgSplitVesting.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSplitVesting: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawAllAvailable({ value }: msgWithdrawAllAvailableParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgWithdrawAllAvailable", value: MsgWithdrawAllAvailable.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawAllAvailable: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateDenomParam({ value }: msgUpdateDenomParamParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgUpdateDenomParam", value: MsgUpdateDenomParam.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateDenomParam: Could not create message: ' + e.message)
			}
		},
		
		msgCreateVestingPool({ value }: msgCreateVestingPoolParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgCreateVestingPool", value: MsgCreateVestingPool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateVestingPool: Could not create message: ' + e.message)
			}
		},
		
		msgMoveAvailableVestingByDenoms({ value }: msgMoveAvailableVestingByDenomsParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgMoveAvailableVestingByDenoms", value: MsgMoveAvailableVestingByDenoms.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMoveAvailableVestingByDenoms: Could not create message: ' + e.message)
			}
		},
		
		msgSendToVestingAccount({ value }: msgSendToVestingAccountParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgSendToVestingAccount", value: MsgSendToVestingAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSendToVestingAccount: Could not create message: ' + e.message)
			}
		},
		
		msgCreateVestingAccount({ value }: msgCreateVestingAccountParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.c4echain.cfevesting.MsgCreateVestingAccount", value: MsgCreateVestingAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateVestingAccount: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						AccountVestingPools: getStructure(typeAccountVestingPools.fromPartial({})),
						VestingPool: getStructure(typeVestingPool.fromPartial({})),
						VestingPoolReservation: getStructure(typeVestingPoolReservation.fromPartial({})),
						EventNewVestingAccount: getStructure(typeEventNewVestingAccount.fromPartial({})),
						EventNewVestingPool: getStructure(typeEventNewVestingPool.fromPartial({})),
						EventNewVestingPeriodFromVestingPool: getStructure(typeEventNewVestingPeriodFromVestingPool.fromPartial({})),
						EventWithdrawAvailable: getStructure(typeEventWithdrawAvailable.fromPartial({})),
						EventVestingSplit: getStructure(typeEventVestingSplit.fromPartial({})),
						GenesisVestingType: getStructure(typeGenesisVestingType.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						VestingPoolInfo: getStructure(typeVestingPoolInfo.fromPartial({})),
						VestingAccountTrace: getStructure(typeVestingAccountTrace.fromPartial({})),
						ContinuousVestingPeriod: getStructure(typeContinuousVestingPeriod.fromPartial({})),
						PeriodicContinuousVestingAccount: getStructure(typePeriodicContinuousVestingAccount.fromPartial({})),
						VestingTypes: getStructure(typeVestingTypes.fromPartial({})),
						VestingType: getStructure(typeVestingType.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			Chain4EnergyC4EchainCfevesting: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;