import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Form from './components/Form';

export default function RegisterSoftware() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Registrar Software" />
      <Form />
    </div>
  );
}
