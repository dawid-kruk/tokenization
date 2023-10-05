import {Device} from "../../ts-client/chain4energy.c4echain.cfetokenization";
import {Sg721Client} from "../ts/Sg721.client";
import {blockchainConfig} from "../blockchainConfig";
import {SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate";

export const UserStore = {
    userAddress:"",
    client : {} as Sg721Client,
    device: {} as Device,
    setUserAddress(userAddress:string) {
       this.userAddress = userAddress
    },
    setUserClient(client:SigningCosmWasmClient) {
        this.client = new Sg721Client(client, this.userAddress, blockchainConfig.contractAddress)
    },
    getUserClient() {
        return this.client
    },
    setCurrentDevice(device:Device) {
        this.device = device
    },
}