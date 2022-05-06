import { RootStateType } from "../store";

export const getCountryData = (state: RootStateType) => state.details.countryData;
export const getBordersData = (state: RootStateType) => state.details.bordersData;
export const getIsLoading = (state: RootStateType) => state.details.isLoading;
export const getError = (state: RootStateType) => state.details.error;