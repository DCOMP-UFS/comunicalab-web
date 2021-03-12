import React, { useState } from 'react';
import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Formulario from './components/Formulario';
import { Redirect } from 'react-router-dom';
import api from '../../../services/api';

const Registrar = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const cancelHandler = () => setShouldRedirect(true);
  const submitHandler = async (values) => {
    const newLab = {
      name: values.name,
      capacity: values.capacity,
      is_in_use: false,
      occupied_at: '2020-02-10T23:02:10.000Z',
    };
    try {
      await api.post('/laboratory', newLab);
      setShouldRedirect(true);
    } catch {
      console.log('Erro no servidor. Por favor, tente mais tarde');
    }
  };
  if (shouldRedirect) {
    return <Redirect to="/Laboratorio/Listar" />;
  }

  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Registrar Laboratório" />
      <Formulario onSubmit={submitHandler} onCancel={cancelHandler} />
    </div>
  );
};

export default Registrar;
