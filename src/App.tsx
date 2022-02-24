import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "styles/global";

import Routes from "./routes";

const App = () => (
  <Router>
    <Routes />

    <GlobalStyles />
  </Router>
);

export default App;
