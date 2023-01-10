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