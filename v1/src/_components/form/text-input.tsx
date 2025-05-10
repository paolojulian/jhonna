import classNames from 'classnames';
import React, { FunctionComponent, InputHTMLAttributes } from 'react';

export type TextInputProps = {
  isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: FunctionComponent<TextInputProps> = ({
  isError,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classNames(
        'transition focus:outline-none bg-inherit px-3 py-2 border-b placeholder-bg-light text-bg',
        isError
          ? 'border-red-500'
          : 'border-bg-dark focus:border-accent text-bg'
      )}
    />
  );
};

export default TextInput;
