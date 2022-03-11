import { useState } from 'react';
import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  onClickIcon?: () => void;
  icon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ icon, onInputChange, ...props }: TextFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
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
          <button>
            <img src={icon} alt="Ícone" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TextField;
