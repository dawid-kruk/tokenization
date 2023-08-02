import {reactive, ref} from "vue";
import {SigningStargateClient} from "@cosmjs/stargate";

export const UserStore = {
    userAddress:"",
    client : {} as SigningStargateClient,

    setUserAddress(userAddress:string) {
       this.userAddress = userAddress
    },
    setUserClient(client:SigningStargateClient) {
        this.client = client
    },
    getUserClient() {
        return this.client
    }
}