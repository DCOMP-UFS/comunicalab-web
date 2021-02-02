import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Equip from './components/Equip';

import './styles/index.css';

export default function ListarEquipamento() {
  const equips = {
    equip01: {
      id: '01',
      name: 'Equipamento 1',
      category: 'PC',
      statusUso: 'Em uso',
      statusEquip: 'Sem Rede',
    },
    equip02: {
      id: '02',
      name: 'Equipamento 2',
      category: 'PC',
      statusUso: 'Disponivel',
      statusEquip: 'Problema H.W.',
    },
    equip03: {
      id: '03',
      name: 'Ar condicionado 1',
      category: 'others',
      statusUso: 'Em uso',
      statusEquip: 'Problema H.W.npm',
    },
  };
  const quantidade = `${Object.keys(equips).length} itens`;
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Equipamento" subTitle={quantidade} />
      <div className="listaEquipamentos">
        <Equip key={equips.equip01.id} equip={equips.equip01} />
        <Equip key={equips.equip02.id} equip={equips.equip02} />
        <Equip key={equips.equip03.id} equip={equips.equip03} />
      </div>
    </div>
  );
}
