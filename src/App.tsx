import { BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import './sass/main.scss';

const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

export default App;
