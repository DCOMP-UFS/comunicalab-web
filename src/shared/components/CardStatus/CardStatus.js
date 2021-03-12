import clsx from 'clsx';
import React from 'react';
import styles from './CardStatus.module.css';

const CardStatus = (props) => {
  const { className, ...otherProps } = props;

  let status;
  if (props.status === 'ok') {
    status = styles.cardStatusOk;
  } else if (props.status === 'caution') {
    status = styles.cardStatusCaution;
  }

  return <span className={clsx(status, className)} {...otherProps}></span>;
};

export default CardStatus;
