import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppState } from '../../redux/rootReducer';
import { getQuote } from '../../redux/feature/quotes/quotesSlice';
import QuoteType from '../../types/QuoteType';

const Quote = styled.div`
  padding: 15px 0;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const quote: QuoteType | null = useSelector((state: AppState) => state.quotes.quote);

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return (
    <>
      <b>Home Page</b>
      <hr />
      <Quote>
        {quote && `"${quote.quoteText}" (c) ${quote.quoteAuthor}`}
      </Quote>

      <Link to='/other-page'>Other page</Link>
    </>
  );
};

export default Home;
