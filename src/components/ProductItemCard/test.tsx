import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    render(<ProductItemCard {...mockProps} />);

    expect(screen.getByAltText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.price)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.location)).toBeInTheDocument();
    expect(screen.getByAltText('Entrega gratuita')).toBeInTheDocument();
  });

  it('Não deve renderizar ícone de entrega gratis quando freeDelivery for false', () => {
    render(<ProductItemCard {...mockProps} freeDelivery={false} />);

    expect(screen.getByAltText('Entrega gratuita')).not.toBeInTheDocument();
  });
});
