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
    const convertedFee = [{amount: String(1000000), denom: "uc4e"}];
    return {gas: String(1000000), amount: convertedFee};
}

export const PRIVATE_KEY = "PRIVATE_KEY"

export const createKeplrConfig = () =>  {
    return {
        chainId: blockchainConfig.chainId,
        chainName: blockchainConfig.chainId,
        rpc: blockchainConfig.rpcUrl,
        rest: blockchainConfig.restUrl,
        bip44: {
            coinType: 118
        },
        bech32blockchainConfig: {
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
            coinDecimals: blockchainConfig.coinDecimals
        },
        feeCurrencies: [
            {
                coinDenom: blockchainConfig.coinDenom,
                coinMinimalDenom: blockchainConfig.coinMinimalDenom,
                coinDecimals: blockchainConfig.coinDecimals
            }
        ],
        currencies: [
            {
                coinDenom: blockchainConfig.coinDenom,
                coinMinimalDenom: blockchainConfig.coinMinimalDenom,
                coinDecimals: blockchainConfig.coinDecimals
            }
        ],
        coinType: 118,
        gasPriceStep: blockchainConfig.gasPrices,
        walletUrlForStaking: blockchainConfig.walletUrlForStaking
    } as ChainInfo;
}