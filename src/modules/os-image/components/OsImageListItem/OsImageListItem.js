import React, { useState } from 'react';
import styles from './OsImageListItem.module.css';
import dayjs from 'dayjs';
import { Redirect } from 'react-router';
import ModalDelete from '../../../../utils/components/ModalDelete';
import Dropdown from '../../../../shared/components/Dropdown/Dropdown';
import osImageIcon from '../../../../assets/os-image-icon.png';
import clsx from 'clsx';

const OsImageListItem = (props) => {
  const { className, osImage, ...otherProps } = props;

  const [redirectTo, setRedirectTo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  if (redirectTo !== '') {
    return <Redirect to={redirectTo} push />;
  } else {
    const handleDropdownClick = (event) => setAnchorEl(event.currentTarget);
    const handleDropdownClose = () => {
      setAnchorEl(null);
    };

    const handleEdit = () => {
      handleDropdownClose();
      setRedirectTo(`/Imagens/${osImage.id}/Editar`);
    };

    const handleAddToLab = () => {
      handleDropdownClose();
      setRedirectTo(`/Imagens/${osImage.id}/RegistrarEmLaboratorio`);
    };

    const handleDelete = () => {
      handleDropdownClose();
      setShowModal(true);
    };
    const handleDeletionCancel = () => setShowModal(false);
    const handleDeletionConfirm = () => {
      osImage.remove();
      setShowModal(false);
    };

    return (
      <div className={clsx(styles.wrapper, className)} {...otherProps}>
        <div className={styles.iconWrapper}>
          <img
            className={styles.icon}
            src={osImageIcon}
            alt="Ícone de Imagem de SO"
          />
        </div>
        <div className={styles.rulerWrapper}>
          <div className={styles.ruler}></div>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.title}>{osImage.name}</p>
          <p className={styles.info}>
            <strong>Data de criação: </strong>
            <span>{dayjs(osImage.builtAt).format('D/M/YYYY')}</span>
          </p>
          <p className={styles.info}>
            <strong>Nº de Instalações: </strong>
            <span>40</span>
          </p>
          <p className={styles.info}>
            <strong>Nº de Softwares Instalados: </strong>
            <span>11</span>
          </p>
          <p className={styles.info}>
            <strong>Última atualização: </strong>
            <span>15/01/2021</span>
          </p>
        </div>

        <button className={styles.optionsBtn} onClick={handleDropdownClick}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </button>
        <Dropdown
          anchorEl={anchorEl}
          open={anchorEl != null}
          onClose={handleDropdownClose}
        >
          <div className={styles.menu}>
            <button className={styles.option} onClick={handleDropdownClose}>
              Ver Softwares
            </button>
            <button className={styles.option} onClick={handleDropdownClose}>
              Adicionar Softwares
            </button>
            <button className={styles.option} onClick={handleDropdownClose}>
              Adicionar à Equipamentos
            </button>
            <button className={styles.option} onClick={handleAddToLab}>
              Adicionar à Laboratórios
            </button>
            <button className={styles.option} onClick={handleEdit}>
              Editar Imagem
            </button>
            <button className={styles.option} onClick={handleDelete}>
              Excluir Imagem
            </button>
          </div>
        </Dropdown>

        <ModalDelete
          title="Excluir Imagem?"
          show={showModal}
          onClose={handleDeletionCancel}
          onConfirm={handleDeletionConfirm}
        >
          Tem certeza que deseja excluir permanentemente esta Imagem?
        </ModalDelete>
      </div>
    );
  }
};

export default OsImageListItem;
