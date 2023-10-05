import {blockchainConfig} from "../blockchainConfig";
import {ChainInfo} from "@keplr-wallet/types";

export const hexToBytes = (hex): Uint8Array => {
    let bytes = [];
    let c = 0;
    for (; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return new Uint8Array(bytes);
}

export function bytesToHex(byteArray) {
    return Array.from(byteArray, function(byte) {
        // @ts-ignore
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
}

export const getFees = () => {
    const convertedFee = [{amount: String(0), denom: "uc4e"}];
    return {gas: String(1000000), amount: convertedFee};
}

export const createKeplrConfig = () =>  {
    return {
        chainId: blockchainConfig.chainId,
        chainName: blockchainConfig.chainId,
        rpc: blockchainConfig.rpcUrl,
        rest: blockchainConfig.restUrl,
        bip44: {
            coinType: 118
        },
        bech32Config: {
            bech32PrefixAccAddr: blockchainConfig.addressPrefix,
            bech32PrefixAccPub: blockchainConfig.addressPrefix + "pub",
            bech32PrefixValAddr: blockchainConfig.addressPrefix + "valoper",
            bech32PrefixValPub: blockchainConfig.addressPrefix + "valoperpub",
            bech32PrefixConsAddr: blockchainConfig.addressPrefix + "valcons",
            bech32PrefixConsPub: blockchainConfig.addressPrefix + "valconspub"
        },
        stakeCurrency: {
            coinDenom: blockchainConfig.coinDenom,
            coinMinimalDenom: blockchainConfig.coinMinimalDenom,
            coinDecimals: blockchainConfig.coinDecimals,
            gasPriceStep: { low: 0, avergage: 0.025, high: 0.04 }
        },
        feeCurrencies: [
            {
                coinDenom: blockchainConfig.coinDenom,
                coinMinimalDenom: blockchainConfig.coinMinimalDenom,
                coinGeckoId: "c4e",
                coinDecimals: blockchainConfig.coinDecimals,
                gasPriceStep: {
                    low: 0,
                    average: 0.025,
                    high: 0.04,
                },
            }
        ],
        currencies: [
            {
                coinDenom: blockchainConfig.coinDenom,
                coinMinimalDenom: blockchainConfig.coinMinimalDenom,
                coinDecimals: blockchainConfig.coinDecimals
            }
        ],
        walletUrlForStaking: blockchainConfig.walletUrlForStaking
    } as unknown as ChainInfo;
}

import {GlobalStore} from "../services/global_store";
import {UserStore} from "../services/user_store";

export async function confirmTransaction(msg:any) {
        GlobalStore.switchLoader()
        try {
            console.log(msg)
            console.log(UserStore.getUserClient())
            const res = await  UserStore.getUserClient().signAndBroadcast(UserStore.userAddress, [msg], getFees())
            console.log(res)
            GlobalStore.switchLoader()
            if (res.code === 0) {
              alert("Transaction successful!")
            } else {
              console.log(res.rawLog)
              alert("Transaction error! Raw error log:" + res.rawLog)
            }
        } catch (e) {
            console.log(e)
            GlobalStore.switchLoader()
            console.log(e.toString())
            alert("Error: " + e.toString())
        }
}

export const createEncodedMsg = (objectToEncode: any, typeUrl:string) => {
    return {
        typeUrl: typeUrl,
        value: objectToEncode,
    };
}


declare global { interface Window {keplr:any} }