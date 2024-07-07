import { ComponentProps } from 'react';
import { ButtonVariants, variants } from './button-variants';

type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ variant = 'primary', size, ...props }: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};
