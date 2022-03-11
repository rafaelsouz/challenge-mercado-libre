import { render, screen } from '@testing-library/react';

import SearchHeader from '.';

describe('<SearchHeader />', () => {
  it('Deve renderizar Header com textField e ícone', () => {
    render(<SearchHeader />);

    expect(
      screen.getByPlaceholderText('Nunca dejes de buscar')
    ).toBeInTheDocument();

    expect(screen.getByTestId('logo-ml')).toBeInTheDocument();
  });
});
