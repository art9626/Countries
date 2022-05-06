import { InferActionsType } from "../store";
import { FiltersType } from "./filtersReducer";

export const SET_FILTERS = 'filters/SET_FILTERS';
export const CLEAR = 'filters/CLEAR';

export type FiltersActionsType = InferActionsType<typeof filtersActions>;

export const filtersActions = {
  setFilters: (filters: FiltersType) => ({ type: SET_FILTERS, payload: filters }) as const,
  clear: () => ({ type: CLEAR }) as const,
}