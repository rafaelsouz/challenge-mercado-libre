import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from '.';

describe('<TextField />', () => {
  it('Deve renderizar com placeholder', () => {
    render(<TextField placeholder="placeholder test" />);

    expect(screen.getByPlaceholderText('placeholder test')).toBeInTheDocument();
  });

  it('Muda o valor quando digitado dentro do input', async () => {
    const onInput = jest.fn();

    render(<TextField onInputChange={onInput} id="TextField" />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('É acessível com o tab', () => {
    render(<TextField id="TextField" placeholder="TextField" />);

    const input = screen.getByPlaceholderText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('deve renderizar com ícone', () => {
    const searchIcon = 'imagem.png';

    render(<TextField icon={searchIcon} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
