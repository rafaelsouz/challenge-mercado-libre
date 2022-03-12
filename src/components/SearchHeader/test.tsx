import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SearchHeader from '.';

describe('<SearchHeader />', () => {
  it('Deve renderizar Header com textField e ícone', () => {
    render(
      <BrowserRouter>
        <SearchHeader />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText('Nunca dejes de buscar')
    ).toBeInTheDocument();

    expect(screen.getByTestId('logo-ml')).toBeInTheDocument();
  });
});
