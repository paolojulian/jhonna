import cn from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

type FontVariants =
  | 'serif'
  | 'body'
  | 'body-wide'
  | 'heading-xs'
  | 'heading-sm'
  | 'heading'
  | 'heading-lg'
  | 'small'
  | 'heading-xl';

const fontVariantsMap = {
  serif: 'font-serif',
  body: 'text-base',
  'body-wide': 'text-sm tracking-[0.40em] font-medium font-heading',
  'heading-sm': 'font-medium font-heading',
  'heading-xs': 'text-sm tracking-[-0.02em] font-medium font-heading',
  heading:
    'text-[1.5rem] md:text-4xl tracking-[-0.02em] font-medium font-heading',
  'heading-lg':
    'text-[2.5rem] md:text-[4rem] tracking-[-0.02em] font-medium leading-[2.75rem] md:leading-[3.5rem] font-heading',
  'heading-xl':
    'text-[4rem] md:text-[7rem] tracking-[-0.02em] leading-[3.5rem] md:leading-[5.5rem] font-medium font-heading',
  small: 'text-sm font-medium font-heading',
} satisfies Record<FontVariants, string>;

export const AppTypographyVariants = cva('font-display', {
  variants: {
    variant: fontVariantsMap,
  },
  defaultVariants: {
    variant: 'body',
  },
});

export interface AppTypographyProps
  extends VariantProps<typeof AppTypographyVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AppTypography({
  as: Element = 'p',
  onClick,
  children,
  className = '',
  variant,
}: AppTypographyProps) {
  return (
    <Element
      className={cn(AppTypographyVariants({ variant, className }))}
      onClick={onClick}
    >
      {children}
    </Element>
  );
}
