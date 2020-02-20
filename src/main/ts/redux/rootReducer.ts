import { combineReducers } from 'redux';

import quotesReducer from './feature/quotes/quotesSlice';

const rootReducer = combineReducers({
  quotes: quotesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
