import clsx from 'clsx';
import React from 'react';
import styles from './CardDivider.module.css';

const CardDivider = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={clsx(styles.rulerWrapper, className)} {...otherProps}>
      <span className={styles.cardDivider}></span>
    </div>
  );
};

export default CardDivider;
