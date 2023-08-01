import {ref} from "vue";
import {SigningStargateClient} from "@cosmjs/stargate";

export default class UserService {
    userAddress = ""
    client:SigningStargateClient = null

    constructor(userAddress:string , client: SigningStargateClient) {
        this.userAddress = userAddress
        this.client = client
    }

}