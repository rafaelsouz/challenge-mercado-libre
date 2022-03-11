import { render, screen } from '@testing-library/react';
import { useCategories, CategoriesContext } from 'hooks/categories';

import PathCategories from '.';

const mockProps = ['Celular', 'iPhone'];

describe('<ProductItemCard />', () => {
  it('Deve renderizar ProductItemCard', () => {
    render(
      <CategoriesContext.Provider
        value={{ addCategories: jest.fn(), categories: mockProps }}
      >
        <PathCategories />
      </CategoriesContext.Provider>
    );

    expect(screen.getByAltText('Entrega gratuita')).toBeInTheDocument();
  });
});
