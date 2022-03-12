import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ProductItemCard from '.';

const mockProps = {
  id: '123',
  image: 'mock.png',
  title: 'titleMock',
  location: 'CityMock',
  price: '$ 10,00',
  freeDelivery: true
};

describe('<ProductItemCard />', () => {
  it('Deve renderizar ProductItemCard', () => {
    render(
      <BrowserRouter>
        <ProductItemCard {...mockProps} />
      </BrowserRouter>
    );

    expect(screen.getByAltText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.price)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.location)).toBeInTheDocument();
    expect(screen.getByAltText('Entrega gratuita')).toBeInTheDocument();
  });

  it('Não deve renderizar ícone de entrega gratis quando freeDelivery for false', () => {
    render(
      <BrowserRouter>
        <ProductItemCard {...mockProps} freeDelivery={false} />
      </BrowserRouter>
    );

    expect(screen.queryByAltText('Entrega gratuita')).not.toBeInTheDocument();
  });
});
