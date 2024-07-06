import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({ variant = 'primary', size = 'small', ...props }: ButtonProps) => {
  const buttonStyles = clsx(styles.button, variant && styles[variant], size && styles[size]);

  return <button className={buttonStyles} {...props} />;
};
