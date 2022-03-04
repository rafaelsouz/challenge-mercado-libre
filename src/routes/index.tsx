import { Route, Routes as Switch } from 'react-router-dom';

import SearchHeader from 'components/SearchHeader';

import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';

const Routes = () => {
  return (
    <>
      <SearchHeader />
      <Switch>
        <Route path="/" element={Home} />
        <Route path="/items" element={SearchResult} />
        <Route path="/items/:id" element={SearchResult} />
      </Switch>
    </>
  );
};

export default Routes;
