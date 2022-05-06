import { InferActionsType } from './../store';
export const TOGGLE_THEME = 'colorTheme/TOGGLE_THEME';

export type ColorThemeActionsType = InferActionsType<typeof colorThemeActions>;

export const colorThemeActions = {
  toggleTheme: () => ({ type: TOGGLE_THEME }) as const,
}