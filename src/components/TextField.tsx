import { useState } from 'react';
import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  icon?: string;
  iconPosition?: 'left' | 'right';
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ icon, onInput, ...props }: TextFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    if (onInput) {
      onInput(newValue);
    }
  };

  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!icon && (
        <div className="icon">
          <img src={icon} alt="Ícone" />
        </div>
      )}
    </div>
  );
};

export default TextField;
