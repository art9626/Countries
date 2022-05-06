import { CountriesActionsType, ADD_COUNTRIES, CountryType, TOOGLE_IS_LOADING, SET_ERROR, CLEAR } from "./countriesActions";

const initialState = {
  isLoading: false,
  countries: [] as CountryType[],
  error: null as null | string,
}

export const countriesReducer = (state = initialState, action: CountriesActionsType) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }

    case TOOGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.status,
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.message,
      };

    case CLEAR:
      return initialState;
  
    default:
      return state;
  }
}