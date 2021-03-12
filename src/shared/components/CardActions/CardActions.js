import clsx from 'clsx';
import React from 'react';
import styles from './CardActions.module.css';

const CardActions = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={clsx(styles.cardActions, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default CardActions;
