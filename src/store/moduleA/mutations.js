import * as c from "./constants";

export default {
    [c.ADD_ITEM](state, item) {
        state.items = state.items.concat(item);
    },
    [c.REMOVE_ITEM](state, index) {
        state.items = state.items.filter((itm, ind) => index !== ind);
    }
};