import { createSlice } from '@reduxjs/toolkit';

import * as Endpoint from '../../../constants/Endpoints';
import { extractActionTypes } from '../FeatureUtil';
import { axiosGet } from '../../middleware/api';
import QuoteType from '../../../types/QuoteType';

type QuotesState = {
  quote: QuoteType | null;
  isLoading: boolean;
};

const initialState: QuotesState = {
  quote: null,
  isLoading: false,
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    getQuoteRequest(state) {
      state.isLoading = true;
    },
    getQuoteSuccess(state, action) {
      state.quote = action.payload.data;
      state.isLoading = false;
    },
    getQuoteFailed(state) {
      state.isLoading = false;
    },
  }
});

export default quotesSlice.reducer;

export const getQuote = () => {
  const PATH = `${Endpoint.QUOTE}`;
  const TYPES = extractActionTypes(quotesSlice.actions);

  return axiosGet(PATH, TYPES);
};
