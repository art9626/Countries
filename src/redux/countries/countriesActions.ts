import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { countriesApi } from "../../api/rootApi";
import { InferActionsType, RootStateType } from "../store";

export type CountryType = {
  flags: {
    png: string;
    svg: string;
  }
  capital: string;
  name: string;
  population: number;
  region: string;
  borders: Array<string>;
  alpha3Code: string;
}

export type CountriesActionsType = InferActionsType<typeof countriesActions>;
type ThunkActionType = ThunkAction<void, RootStateType, unknown, CountriesActionsType>;
type DispatchType = ThunkDispatch<RootStateType, unknown, CountriesActionsType>

export const ADD_COUNTRIES = 'countries/ADD_COUNTRIES';
export const TOOGLE_IS_LOADING = 'countries/TOOGLE_IS_LOADING';
export const SET_ERROR = 'countries/SET_ERROR';
export const CLEAR = 'countries/CLEAR';

export const countriesActions = {
  addCountries: (countries: CountryType[]) => ({ type: ADD_COUNTRIES, payload: countries }) as const,
  toggleIsLoading: (status: boolean) => ({ type: TOOGLE_IS_LOADING, status }) as const,
  setError: (message: string | null) => ({ type: SET_ERROR, message }) as const,
  clear: () => ({ type: CLEAR }) as const,
};



export const loadCountries = (): ThunkActionType => (dispatch: DispatchType, getState: () => RootStateType) => {
  dispatch(countriesActions.toggleIsLoading(true));
  if (getState().countries.error) {
    dispatch(countriesActions.setError(null));
  }
  countriesApi.loadCountries(['flags', 'capital', 'border', 'name', 'population', 'region', 'alpha3Code'])
    .then((res) => {
      let countries = res as CountryType[]
      

      // const filters = getState().filters;
      // if (filters.region) {
      //   countries = countries.filter((item) => item.region.toLowerCase() === filters.region);
      // }
      // if (filters.search) {
      //   countries = countries.filter((item) => item.name.toLowerCase().includes(filters.search as string));
      // }

      dispatch(countriesActions.addCountries(countries));
    })
    .catch((err) => {
      dispatch(countriesActions.setError(err.message));
    })
    .finally(() => {
      dispatch(countriesActions.toggleIsLoading(false));
    })
}
