import React, { useState } from 'react';
import styles from './OsImageListItem.module.css';
import PropsType from 'prop-types';
import dayjs from 'dayjs';
import { Redirect } from 'react-router';
import ModalDelete from '../../../../utils/components/ModalDelete';
import api from '../../../../services/api';
import OsImageDropdown from '../OsImageDropdown/OsImageDropdown';

const OsImageListItem = (props) => {
  const [redirectTo, setRedirectTo] = useState('');
  const [showModal, setShowModal] = useState(false);

  if (redirectTo !== '') {
    return <Redirect to={redirectTo} />;
  }

  const onViewHandler = () => setRedirectTo(`/Imagens/Visualizar/${props.id}`);
  const onEditHandler = () => setRedirectTo(`/Imagens/Editar/${props.id}`);
  const onDeleteHandler = () => setShowModal(true);

  const onDeleteCancel = () => setShowModal(false);
  const onDeleteConfirm = () => {
    api.delete(`/osImage/${props.id}`);
    setShowModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <p className={styles.title}>{props.name}</p>
        <p className={styles.info}>
          <strong>Data de criação: </strong>
          <span>{dayjs(props.builtAt).format('D/M/YYYY')}</span>
        </p>
      </div>
      <OsImageDropdown
        onView={onViewHandler}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
      <ModalDelete
        title="Excluir Imagem?"
        show={showModal}
        onClose={onDeleteCancel}
        onConfirm={onDeleteConfirm}
      >
        Tem certeza que deseja excluir permanentemente esta Imagem?
      </ModalDelete>
    </div>
  );
};

OsImageListItem.propTypes = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  builtAt: PropsType.string.isRequired,
};

export default OsImageListItem;
