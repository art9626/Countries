import { InferActionsType } from "../store";

export const SET_SEARCH_FILTER = 'filters/SET_SEARCH_FILTER';
export const SET_REGION_FILTER = 'filters/SET_REGION_FILTER';
export const CLEAR = 'filters/CLEAR';

export type FiltersActionsType = InferActionsType<typeof filtersActions>;

export const filtersActions = {
  setSearchFilter: (filter: string) => ({ type: SET_SEARCH_FILTER, payload: filter }) as const,
  setRegionFilter: (filter: string) => ({ type: SET_REGION_FILTER, payload: filter }) as const,
  clear: () => ({ type: CLEAR }) as const,
}