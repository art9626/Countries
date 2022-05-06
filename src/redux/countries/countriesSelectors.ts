import { createSelector } from "reselect";
import { getFilters } from "../filters/filtersSelectors";
import { RootStateType } from "../store";

export const getCountries = (state: RootStateType) => state.countries.countries;
export const getIsLoading = (state: RootStateType) => state.countries.isLoading;
export const getError = (state: RootStateType) => state.countries.error;

export const getFiltredCountries = createSelector(getCountries, getFilters, (countries, filters) => {
  if (filters.region) {
    countries = countries.filter((item) => item.region.toLowerCase() === filters.region);
  }
  if (filters.search) {
    countries = countries.filter((item) => item.name.toLowerCase().includes(filters.search as string));
  }
  return countries;
})