import { BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import './sass/main.scss';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

export default App;
