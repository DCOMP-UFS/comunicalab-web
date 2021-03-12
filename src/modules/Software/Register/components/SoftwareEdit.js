import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import api from '../../../../services/api';
//import api from '../../../../services/api';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import SoftwareForm from './SoftwareForm';
import styles from '../../../Software/styles/styles.css';

const SoftwareEdit = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const { id: softwareId } = useParams();

  //${softwareId}

  useEffect(() => {
    api.get(`/software/${softwareId}`).then((res) => {
      const software = res.data;
      setInitialValues({
        name: software.name,
        version: software.version,
        license: software.license,
        is_active: software.is_active,
        softcategory_id: software.softcategory_id,
        is_deleted: software.is_deleted,
      });
    });
  }, [softwareId]);

  const cancelHandler = () => setShouldRedirect(true);
  const submitHandler = async (values) => {
    const newSoftaware = {
      name: values.name,
      version: values.version,
      license: values.license,
      is_active: values.is_active,
      softcategory_id: values.softcategory_id,
      is_deleted: values.is_deleted,
    };
    try {
      await api.patch(`/software/${softwareId}`, newSoftaware);
      setShouldRedirect(true);
    } catch {
      console.log('Erro no servidor. Por favor, tente mais tarde');
    }
  };

  if (shouldRedirect) {
    return <Redirect to="/Software/Listar" />;
  }

  const softwareForm = (
    <SoftwareForm
      initialValues={initialValues}
      onSubmit={submitHandler}
      onCancel={cancelHandler}
      submitLabel="Atualizar"
    />
  );

  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Editar Software" />
      <div className={styles.wrapper}>
        {Object.keys(initialValues).length > 0 ? softwareForm : null}
        {console.log(
          initialValues + Object.keys(initialValues).length + ' ' + softwareId
        )}
      </div>
    </>
  );
};

export default SoftwareEdit;
