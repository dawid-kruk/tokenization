import {blockchainConfig} from "../blockchainConfig";
import {ChainInfo} from "@keplr-wallet/types";

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

export async function handleTransaction(func:any) {
    if (typeof func !== "function") {
        console.error('Provided argument is not a function.');
        return;
    }
    GlobalStore.switchLoader()
    try {
        const res = await func()
        GlobalStore.switchLoader()
        alert("Transaction successful!")
        console.log(res)
    } catch (e) {
        console.log(e)
        GlobalStore.switchLoader()
        alert("Error: " + e.toString())
    }
}

declare global { interface Window {keplr:any} }