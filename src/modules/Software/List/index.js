import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Software from './components/Software';

import './styles/index.css';

export default function ListSoftware() {
  const softwares = {
    sw01: {
      id: '01',
      name: 'Android Studio',
      category: 'Desenvolvimento',
    },
    sw02: {
      id: '02',
      name: 'Libre Office',
      category: 'Office',
    },
    sw03: {
      id: '03',
      name: 'Corel Draw',
      category: 'Gráficos',
    },
  };
  const quantity = `${Object.keys(softwares).length} itens`;
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Sofware" subTitle={quantity} />
      <div className="listSoftwares">
        <Software key={softwares.sw01.id} software={softwares.sw01} />
        <Software key={softwares.sw02.id} software={softwares.sw02} />
        <Software key={softwares.sw03.id} software={softwares.sw03} />
      </div>
    </div>
  );
}
