import React, { useEffect, useState } from 'react';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import OsImageForm from '../../components/OsImageForm/OsImageForm';
import styles from './EditOsImage.module.css';
import dayjs from 'dayjs';
import { Redirect, useParams } from 'react-router';
import api from '../../../../services/api';

const EditOsImage = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const { id: imageId } = useParams();

  useEffect(() => {
    api.get(`/osImage/${imageId}`).then((res) => {
      const image = res.data;
      setInitialValues({
        name: image.name,
        builtAt: dayjs(image.built_at).format('D/M/YYYY'),
      });
    });
  }, [imageId]);

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
      await api.patch(`/osImage/${imageId}`, newOsImage);
      setShouldRedirect(true);
    } catch {
      console.log('Erro no servidor. Por favor, tente mais tarde');
    }
  };

  if (shouldRedirect) {
    return <Redirect to="/Imagens/Listar" />;
  }

  const osImageForm = (
    <OsImageForm
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
      <Title title="Editar Imagem" />
      <div className={styles.wrapper}>
        {Object.keys(initialValues).length > 0 ? osImageForm : null}
      </div>
    </>
  );
};

export default EditOsImage;
