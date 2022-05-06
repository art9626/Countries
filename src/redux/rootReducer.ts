import { countriesReducer } from './countries/countriesReducer';
import { combineReducers } from "redux";
import { filtersReducer } from './filters/filtersReducer';
import { detailsReducer } from './details/detailsReducer';
import { colorThemeReducer } from './colorTheme/colorThemeReducer';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  filters: filtersReducer,
  details: detailsReducer,
  colorTheme: colorThemeReducer,
});