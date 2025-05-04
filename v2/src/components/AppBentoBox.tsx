import cn from '@/utils/cn';
import { FC, HtmlHTMLAttributes } from 'react';

type AppBentoBoxProps = HtmlHTMLAttributes<HTMLDivElement>;

const AppBentoBox: FC<AppBentoBoxProps> = ({ className, ...props }) => {
  return (
    <div className={cn('rounded-2xl bg-gray-50 overflow-hidden', className)} {...props} />
  );
};

export default AppBentoBox;
