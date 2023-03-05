import { SET_FILTER } from "./filters-constants";

export const setFIlter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
})