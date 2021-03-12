import React, { useState } from 'react';
//import styles from './OsImageListItem.module.css';
import PropsType from 'prop-types';
//import dayjs from 'dayjs';
import { Redirect } from 'react-router';
import ModalDelete from '../../../../utils/components/ModalDelete';
import api from '../../../../services/api';
//import OsImageDropdown from '../OsImageDropdown/OsImageDropdown';
//import OsImageDropdown from '../../../os-image/components/OsImageDropdown/OsImageDropdown'//os-image/OsImageDropdown/OsImageDropdown';
//import d from '/SoftwareDropdown/SoftwareDropdown.js'
import SoftwareDropdown from '../components/SoftwareDropdown/SoftwareDropdown';

import '../styles/Software.css';

const SoftwareList = (props) => {
  const [redirectTo, setRedirectTo] = useState('');
  const [showModal, setShowModal] = useState(false);

  if (redirectTo !== '') {
    return <Redirect to={redirectTo} />;
  }

  const onViewHandler = () => setRedirectTo(`/Imagens/Visualizar/${props.id}`);
  const onEditHandler = () => setRedirectTo(`/Software/Editar/${props.id}`);
  const onDeleteHandler = () => setShowModal(true);

  const onDeleteCancel = () => setShowModal(false);
  const onDeleteConfirm = () => {
    api.delete(`/software/${props.id}`);
    setShowModal(false);
  };

  return (
    <div className="software">
      <div className="softwareInfo">
        <div className="softwareName">
          <h1>{props.name}</h1>
          {/*console.log(props.name)*/}
        </div>
        <div className="softwareCategory">
          <h1>{props.version}</h1>
        </div>
        <div className="softwareCategory">
          <h1>Mais informações...{props.softcategory_id}</h1>
        </div>
        <div className="softwareCategory">
          <h1>{props.license}</h1>
        </div>
      </div>
      <SoftwareDropdown
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

SoftwareList.propTypes = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  //soft_category_id: PropsType.number.isRequired,
};

export default SoftwareList;
