import { render, screen } from '@testing-library/react';

import PathCategories from '.';

jest.mock('../../hooks/categories', () => {
  return {
    useCategories: () => ({
      categories: ['Celular', 'iPhone']
    })
  };
});

describe('<PathCategories />', () => {
  it('Deve renderizar PathCategories', () => {
    render(<PathCategories />);

    expect(screen.getByText('Celular')).toBeInTheDocument();
    expect(screen.getByText('iPhone')).toBeInTheDocument();
  });
});
