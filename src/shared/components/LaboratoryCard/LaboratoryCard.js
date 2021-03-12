import clsx from 'clsx';
import React from 'react';
import Card from '../Card/Card';
import CardDivider from '../CardDivider/CardDivider';
import CardStatus from '../CardStatus/CardStatus';
import styles from './LaboratoryCard.module.css';

const LaboratoryCard = (props) => {
  const { className, laboratory, children, ...otherProps } = props;

  return (
    <Card className={clsx(styles.labCard, className)} {...otherProps}>
      <CardStatus status={!laboratory.isInUse ? 'ok' : 'caution'} />
      <CardDivider />
      <div className={styles.labContentWrapper}>
        <p className={styles.labTitle}>{laboratory.name}</p>
        <p className={styles.labSubtitle}>Departamento</p>
        <p className={styles.labInfo}>
          <strong>Status: </strong>
          <span>{!laboratory.isInUse ? 'Livre' : 'Reservado'}</span>
        </p>
        <p className={styles.labInfo}>
          <strong>Capacidade: </strong>
          <span>{laboratory.capacity}</span>
        </p>
      </div>
      {children}
    </Card>
  );
};

export default LaboratoryCard;
