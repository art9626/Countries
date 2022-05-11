import { getRegionFilter, getSearchFilter } from './../filters/filtersSelectors';
import { createSelector } from "reselect";
import { RootStateType } from "../store";

export const getCountries = (state: RootStateType) => state.countries.countries;
export const getIsLoading = (state: RootStateType) => state.countries.isLoading;
export const getError = (state: RootStateType) => state.countries.error;

export const getFiltredCountries = createSelector(getCountries, getSearchFilter, getRegionFilter, (countries, search, region) => {
  if (region) {
    countries = countries.filter((item) => item.region.toLowerCase() === region);
  }
  if (search) {
    countries = countries.filter((item) => item.name.toLowerCase().includes(search));
  }
  return countries;
})