import * as c from "./constants";

export default {
    add({ commit }, item) {
        commit(c.ADD_ITEM, item);
    },
    remove({commit}, index) {
        commit(c.REMOVE_ITEM, index);
    }
};