import { DetailsActionsType, CountryDataType, BordersDataType, ADD_COUNTRY_DATA, ADD_BORDERS_DATA, TOGGLE_IS_LOADING, CLEAR, SET_ERROR } from "./detailsActions"

const initialState = {
  countryData: null as CountryDataType | null,
  bordersData: null as BordersDataType | null,
  isLoading: false,
  error: null as null | string,
}

export const detailsReducer = (state = initialState, action: DetailsActionsType) => {
  switch (action.type) {
    case ADD_COUNTRY_DATA:
      return {
        ...state,
        countryData: action.payload,
      };

    case ADD_BORDERS_DATA:
      return {
        ...state,
        bordersData: action.payload,
      };

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };

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