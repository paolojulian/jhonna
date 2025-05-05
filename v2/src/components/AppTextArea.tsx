'use client';
import AppTypography from '@/components/AppTypography';
import cn from '@/utils/cn';
import { FC, TextareaHTMLAttributes, useEffect, useState } from 'react';

type AppTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  onChangeText?: (text?: string | number) => void;
  id: string;
  label: string;
  value?: string | number;
  isFullWidth?: boolean;
  errorMessage?: string;
};

const AppTextarea: FC<AppTextareaProps> = ({
  onChangeText = () => {},
  onChange,
  id,
  label,
  className,
  isFullWidth = true,
  errorMessage,
  value,
  ...props
}) => {
  const [localValue, setLocalValue] = useState<string | number | undefined>(
    value
  );

  const hasValue: boolean = !!localValue;
  const hasError: boolean = !!errorMessage;
  const resolvedLabel: string = hasError && errorMessage ? errorMessage : label;

  useEffect(() => {
    if (localValue !== value) {
      onChangeText(localValue);
    }
  }, [localValue]);

  const handleChange: TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'] =
    (e) => {
      onChange?.(e);
      setLocalValue(e.target?.value);
    };

  return (
    <div
      data-element-name='AppTextarea'
      className={cn('relative', 'group', {
        'w-full': isFullWidth,
      })}
    >
      <textarea
        onChange={handleChange}
        id={id}
        rows={4}
        className={cn(
          'peer',
          'placeholder-transparent rounded-2xl',
          'pt-7 px-4 pb-2 border border-peacoat/50 resize-none',
          'focus:placeholder-neutral-500',
          'group-focus-within:outline-none',
          'group-focus-within:border-black',
          'group-focus-within:ring-1',
          'group-focus-within:focus:border-black',
          {
            'w-full': isFullWidth,
            'border-red-500 outline outline-red-500': !!hasError,
          },
          className
        )}
        value={value}
        {...props}
      />

      {/* Focused label */}
      <div
        className={cn(
          'absolute left-4 top-2',
          'text-peacoat',
          'pointer-events-none transition-all ease-in-out',
          'peer-placeholder-shown:opacity-0',
          'peer-placeholder-shown:scale-0',
          'peer-focus:opacity-100',
          'peer-focus:scale-100',
          {
            'text-red-500': hasError,
            'opacity-0 scale-0': !hasValue,
            'opacity-100 scale-100': !!hasValue,
          }
        )}
      >
        <AppTypography variant={'heading-xs'}>{resolvedLabel}</AppTypography>
      </div>

      {/* Placeholder label */}
      <label
        aria-label={id}
        htmlFor={id}
        className={cn(
          'absolute left-4 top-2',
          'text-peacoat',
          'pointer-events-none transition-all ease-in-out',
          'peer-placeholder-shown:opacity-100',
          'peer-placeholder-shown:scale-100',
          'peer-focus:opacity-0',
          'peer-focus:scale-0',
          {
            'text-red-500': hasError,
            'opacity-0 scale-0': hasValue,
            'opacity-100 scale-100': !hasValue,
          }
        )}
      >
        <AppTypography>{resolvedLabel}</AppTypography>
      </label>
    </div>
  );
};

export default AppTextarea;
