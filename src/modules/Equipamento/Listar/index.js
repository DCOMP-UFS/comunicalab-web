import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Equip from './components/Equip';

import './styles/index.css';

export default function ListarEquipamento() {
  const equips = [
    {
      id: '01',
      name: 'Equipamento 1',
      category: 'PC',
      statusUso: 'Em uso',
      statusEquip: 'Sem Rede',
    },
    {
      id: '02',
      name: 'Equipamento 2',
      category: 'PC',
      statusUso: 'Disponivel',
      statusEquip: 'Problema H.W.',
    },
    {
      id: '03',
      name: 'Ar condicionado 1',
      category: 'Outro',
      statusUso: 'Em uso',
      statusEquip: 'Problema H.W.',
    },
  ];

  const quantidade = `${Object.keys(equips).length} itens`;
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Equipamento" subTitle={quantidade} />

      <div className="listOtherEquips">
        <label className="othersTitle">Outros({quantidade})</label>
        <Equip key={equips[2].id} equip={equips[2]} />
      </div>

      <div className="listEquip">
        <label className="equipTitle">Equipamentos({quantidade})</label>
        <Equip key={equips[0].id} equip={equips[0]} />
        <Equip key={equips[1].id} equip={equips[1]} />
      </div>
    </div>
  );
}
