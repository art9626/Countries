import { rootReducer } from './rootReducer';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

export type RootStateType = ReturnType<typeof store.getState>;
export type InferActionsType<T> = T extends {[key: string]: (...arg: any) => infer U} ? U : never;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)