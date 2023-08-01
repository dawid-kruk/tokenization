import {reactive, ref} from "vue";
import {SigningStargateClient} from "@cosmjs/stargate";

export  const GlobalStore = reactive({
    loader:false,
    switchLoader() {
        this.loader = !this.loader
    }
})