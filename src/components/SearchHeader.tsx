import logo from 'assets/Logo_ML.png';
import { Link } from 'react-router-dom';

const SearchHeader = () => {
  return (
    <menu>
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>

      <div>
        <input type="text" />
      </div>
    </menu>
  );
};

export default SearchHeader;
