import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  const buttonStyles = clsx(styles.button, variant && styles[variant]);

  return <button className={buttonStyles} {...props} />;
};
