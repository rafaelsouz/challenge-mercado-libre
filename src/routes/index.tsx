import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import AppProvider from 'hooks';

import SearchHeader from 'components/SearchHeader';

import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';
import DetailsProduct from 'pages/DetailsProduct';

const Routes = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <SearchHeader />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchResult />} />
          <Route path="/items/:id" element={<DetailsProduct />} />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
};

export default Routes;
