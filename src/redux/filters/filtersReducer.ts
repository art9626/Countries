import { CLEAR, FiltersActionsType, SET_FILTERS } from "./filtersActions"

export type FiltersType = {
  search: null | string;
  region: null | string;
}

const initialState = {
  search: null,
  region: null,
} as FiltersType;

export const filtersReducer = (state = initialState, action: FiltersActionsType) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
         ...action.payload,
      }

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}