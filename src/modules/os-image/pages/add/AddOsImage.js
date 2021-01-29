import React, { useState } from 'react';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import styles from './AddOsImage.module.css';
import OsImageForm from '../../components/OsImageForm/OsImageForm';
import { Redirect } from 'react-router-dom';
import dayjs from 'dayjs';
import api from '../../../../services/api';

const ListOsImages = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const cancelHandler = () => setShouldRedirect(true);
  const submitHandler = async (values) => {
    const parsedDate = dayjs(
      values.builtAt,
      ['D/M/YYYY', 'DD/M/YYYY', 'D/MM/YYYY', 'DD/MM/YYYY'],
      true
    );
    const newOsImage = {
      name: values.name,
      built_at: parsedDate.toJSON(),
    };
    try {
      await api.post('/osImage', newOsImage);
      setShouldRedirect(true);
    } catch {
      console.log('Erro no servidor. Por favor, tente mais tarde');
    }
  };

  if (shouldRedirect) {
    return <Redirect to="/Imagens/Listar" />;
  }

  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Cadastrar Imagem" />
      <div className={styles.wrapper}>
        <OsImageForm onSubmit={submitHandler} onCancel={cancelHandler} />
      </div>
    </>
  );
};

export default ListOsImages;
