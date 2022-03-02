import { useState } from 'react';
import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  icon,
  iconPosition = 'left',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    if (onInput) {
      onInput(newValue);
    }
  };

  return (
    <div>
      {!!icon && (
        <div>
          <img src={icon} alt="Ícone de uma Lupa" />
        </div>
      )}
      <input
        type="text"
        iconPosition={iconPosition}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default TextField;
