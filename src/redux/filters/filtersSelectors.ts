import { RootStateType } from "../store";

export const getSearchFilter = (state: RootStateType) => state.filters.search;
export const getRegionFilter = (state: RootStateType) => state.filters.region;