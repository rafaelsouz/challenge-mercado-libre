import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import SearchHeader from 'components/SearchHeader';

import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';
import DetailsProduct from 'pages/DetailsProduct';

const Routes = () => {
  return (
    <BrowserRouter>
      <SearchHeader />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<SearchResult />} />
        <Route path="/items/:id" element={<DetailsProduct />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
