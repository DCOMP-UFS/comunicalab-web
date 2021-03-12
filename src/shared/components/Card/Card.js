import clsx from 'clsx';
import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={clsx(styles.card, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
