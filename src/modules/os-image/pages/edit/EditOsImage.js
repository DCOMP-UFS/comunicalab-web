import React, { useEffect, useState } from 'react';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import OsImageForm from '../../components/OsImageForm/OsImageForm';
import dayjs from 'dayjs';
import { Redirect, useParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import styles from './EditOsImage.module.css';
import { useRootStore } from '../../../../data/store/root-store';

const EditOsImage = observer(() => {
  const params = useParams();
  const { osImageStore } = useRootStore();

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const osImage = osImageStore.selectOsImage(parseInt(params.id));

  useEffect(() => {
    if (osImage == null) {
      osImageStore.fetchOne(params.id);
    }
  }, [osImage, osImageStore, params.id]);

  if (shouldRedirect) {
    return <Redirect to="/Imagens/Listar" />;
  } else if (osImage == null) {
    return (
      <>
        <Toolbar />
        <Menu />
        <Title title="Editar Imagem" />
      </>
    );
  } else {
    const initialValues = {
      name: osImage.name,
      builtAt: dayjs(osImage.builtAt).format('D/M/YYYY'),
    };

    const cancelHandler = () => setShouldRedirect(true);
    const submitHandler = async (values) => {
      const parsedDate = dayjs(
        values.builtAt,
        ['D/M/YYYY', 'DD/M/YYYY', 'D/MM/YYYY', 'DD/MM/YYYY'],
        true
      );

      osImage.name = values.name;
      osImage.builtAt = parsedDate.toJSON();
      await osImage.update();
      setShouldRedirect(true);
    };

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
  }
});

export default EditOsImage;
