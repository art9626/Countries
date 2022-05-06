import { ColorThemeActionsType, TOGGLE_THEME } from "./colorThemeActions";

export const colorThemeReducer = (state = 'light', action: ColorThemeActionsType) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';
  
    default:
      return state;
  }
};