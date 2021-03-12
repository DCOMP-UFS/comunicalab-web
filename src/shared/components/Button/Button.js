import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <button className={clsx(styles.button, className)} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
