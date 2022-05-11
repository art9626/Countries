import { CLEAR, FiltersActionsType, SET_REGION_FILTER, SET_SEARCH_FILTER } from "./filtersActions"

export type FiltersType = {
  search: string;
  region: string;
}

const initialState = {
  search: '',
  region: '',
} as FiltersType;

export const filtersReducer = (state = initialState, action: FiltersActionsType) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return {
        ...state,
        search: action.payload,
      }

    case SET_REGION_FILTER:
      return {
        ...state,
        region: action.payload,
      }

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}