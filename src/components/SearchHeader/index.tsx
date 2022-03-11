import { Link } from 'react-router-dom';

import logo from 'assets/Logo_ML.png';
import searchIcon from 'assets/ic_Search.png';

import TextField from 'components/TextField';
import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SearchHeader = () => {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  const handleInput = useCallback((value: string) => {
    setInputSearch(value);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      navigate({
        pathname: 'items',
        search: `?search=${inputSearch}`
      });
    },
    [inputSearch, navigate]
  );

  return (
    <header className="header-wrapper">
      <menu className="menu-content">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt={'Ícone do Mercado Livre'}
              data-testid="logo-ml"
            />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="Search"
            icon={searchIcon}
            placeholder="Nunca dejes de buscar"
            type="text"
            onInputChange={(text) => handleInput(text)}
          />
        </form>
      </menu>
    </header>
  );
};

export default SearchHeader;
