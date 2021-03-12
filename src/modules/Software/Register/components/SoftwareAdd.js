import React, { useState } from 'react';
//import Menu from '../../../../utils/components/Menu';
//import Title from '../../../../utils/components/Title';
//import Toolbar from '../../../../utils/components/Toolbar';
//import styles from './AddOsImage.module.css';
import SoftwareForm from './SoftwareForm';
//import Form from './Form';
//import OsImageForm from '../../../os-image/components/OsImageForm/OsImageForm';
import { Redirect } from 'react-router-dom';
//import dayjs from 'dayjs';
import api from '../../../../services/api';

const ListSoftware = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const cancelHandler = () => setShouldRedirect(true);
  const submitHandler = async (values) => {
    const newSoftware = {
      name: values.name,
      version: values.version,
      license: values.license,
      is_active: values.is_active,
      softcategory_id: values.softcategory_id,
      is_deleted: values.is_deleted,
    };

    try {
      await api.post('/software', newSoftware);
      setShouldRedirect(true);
    } catch {
      console.log('Erro no servidor. Por favor, tente mais tarde');
    }
  };

  if (shouldRedirect) {
    return <Redirect to="/Software/Listar" />;
  }

  return (
    <>
      <div>
        <SoftwareForm onSubmit={submitHandler} onCancel={cancelHandler} />
        {/*<Form onSubmit={submitHandler} onCancel={cancelHandler} />*/}
      </div>
    </>
  );
};

export default ListSoftware;
