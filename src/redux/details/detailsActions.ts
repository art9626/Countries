import { CountriesActionsType } from './../countries/countriesActions';
import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { InferActionsType, RootStateType } from "../store";
import { detailsApi } from '../../api/rootApi';

export type CountryDataType = {
  flags: {
    png: string;
    svg: string;
  }
  nativeName: string;
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: Array<string>;
  currencies: Array<{ code: string, name: string, symbol: string }>;
  languages: Array<{ iso639_1: string, iso639_2: string, name: string, nativeName: string }>;
  borders?: Array<string>;
}

export type BordersDataType = Array<{ name: string, alpha3Code: string }>;

export type DetailsActionsType = InferActionsType<typeof detailsActions>;
type ActionsType = DetailsActionsType | CountriesActionsType;
type ThunkActionType = ThunkAction<void, RootStateType, unknown, ActionsType>;
type DispatchType = ThunkDispatch<RootStateType, unknown, ActionsType>


export const ADD_COUNTRY_DATA = 'details/ADD_DATA';
export const ADD_BORDERS_DATA = 'details/ADD_BORDERS_DATA';
export const TOGGLE_IS_LOADING = 'details/TOGGLE_IS_LOADING';
export const SET_ERROR = 'details/SET_ERROR';
export const CLEAR = 'details/CLEAR';

export const detailsActions = {
  addCountryData: (data: CountryDataType | null) => ({ type: ADD_COUNTRY_DATA, payload: data }) as const,
  addBordersData: (data: BordersDataType | null) => ({ type: ADD_BORDERS_DATA, payload: data }) as const,
  toggleIsLoading: (status: boolean) => ({ type: TOGGLE_IS_LOADING, status }) as const,
  setError: (message: string | null) => ({ type: SET_ERROR, message }) as const,
  clear : () => ({ type: CLEAR }) as const,
}



export const loadDetails = (name: string): ThunkActionType => (dispatch: DispatchType, getState: () => RootStateType) => {
  dispatch(detailsActions.toggleIsLoading(true));
  if (getState().details.error) {
    dispatch(detailsActions.setError(null));
  }

  detailsApi.getDetailsData(name as string, ['name', 'alpha3Code'])
    .then((responses) => {
      dispatch(detailsActions.addCountryData(responses[0]));
      dispatch(detailsActions.addBordersData(responses[1]));
    })
    .catch((err) => {
      dispatch(detailsActions.setError(err.message));
    })
    .finally(() => {
      dispatch(detailsActions.toggleIsLoading(false));
    })
}

