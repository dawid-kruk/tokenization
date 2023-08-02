import {reactive, ref} from "vue";
import {SigningStargateClient} from "@cosmjs/stargate";
import {Device} from "../../ts-client/chain4energy.c4echain.cfetokenization";

export const UserStore = {
    userAddress:"",
    client : {} as SigningStargateClient,
    blockchainEndpoint: "http://localhost:1317",
    device: {} as Device,
    setUserAddress(userAddress:string) {
       this.userAddress = userAddress
    },
    setUserClient(client:SigningStargateClient) {
        this.client = client
    },
    getUserClient() {
        return this.client
    },
    setCurrentDevice(device:Device) {
        this.device = device
    },
    async getUserCertificates() {
        try {
            const response = await fetch(this.blockchainEndpoint + "/c4e/tokenization/v1beta1/user_certificates/" + this.userAddress);
            return response.json()
        } catch (error) {
            console.error("Error in getUserCertificates:", error);
            throw error; // Re-throwing the error or handle it as you see fit
        }
    },

    async getAllUserCertificates() {
        try {
            const response = await fetch(this.blockchainEndpoint + "/c4e/tokenization/v1beta1/user_certificates");
            return response.json();
        } catch (error) {
            console.error("Error in getAllUserCertificates:", error);
            throw error;
        }
    },

    async getDevice(deviceAddress: string) {
        try {
            const response = await fetch(this.blockchainEndpoint + "/c4e/tokenization/v1beta1/device/" + deviceAddress);
            const resJson = await response.json();
            return resJson.device;
        } catch (error) {
            console.error("Error in getDevice:", error);
            throw error;
        }
    },

    async getUserDevices() {
        try {
            const response = await fetch(this.blockchainEndpoint + "/c4e/tokenization/v1beta1/user_devices/" + this.userAddress);
            const resJson = await response.json();
            return resJson.UserDevices.devices;
        } catch (error) {
            console.error("Error in getUserDevices:", error);
            throw error;
        }
    },

    async getMarketplaceCertificates(id: number) {
        try {
            const response = await fetch(this.blockchainEndpoint + "/c4e/tokenization/v1beta1/marketplace_certificates/" + id);
            return response.json();
        } catch (error) {
            console.error("Error in getMarketplaceCertificates:", error);
            throw error;
        }
    },

    async getAllMarketplaceCertificates() {
        try {
            const response = await fetch(this.blockchainEndpoint + "/c4e/tokenization/v1beta1/marketplace_certificates");
            return response.json();
        } catch (error) {
            console.error("Error in getAllMarketplaceCertificates:", error);
            throw error;
        }
    },

    async getAllCertificateTypes() {
        try {
            const response = await fetch(this.blockchainEndpoint + "/c4e/tokenization/v1beta1/certificate_type");
            const resJson = await response.json();
            return resJson.CertificateType;
        } catch (error) {
            console.error("Error in getAllCertificateTypes:", error);
            throw error;
        }
    },
}