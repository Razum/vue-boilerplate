import actions from "@/store/moduleA/actions";
import getters from "@/store/moduleA/getters";
import mutations from "@/store/moduleA/mutations";

export default {
    namespaced: true,
    state: () => ({
        items: [],
        counter: 0
    }),
    mutations,
    actions,
    getters
};