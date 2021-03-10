import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import ModalDelete from '../../../../utils/components/ModalDelete';

import '../styles/Equip.css';
import selectionStatus from '../actions/selectionStatus';

function Equip({ equip }) {
  const statusUsoCor = selectionStatus(equip.statusUso);
  const statusEquipCor = selectionStatus(equip.statusEquip);
  const linkEditar = `/Equipamento/Editar/${equip.id}`;
  const linkVisualizar = `/Equipamento/Visualizar/${equip.id}`;
  const [show, setShow] = useState(false);

  function showModal() {
    setShow(!show);
  }

  return (
    <div className="equip">
      <div className="equipInfo">
        <div className="equipName">
          <h1>{equip.name}</h1>
        </div>
        <div className="equipCategory">
          <h1>{equip.category}</h1>
        </div>
        <div className="equipStatus">
          <div className="equipStatusUso">
            <div className={statusUsoCor} />
            <h1>
              <b>Status de Uso:</b>
            </h1>
            <h2>{equip.statusUso}</h2>
          </div>
          <div className="equipStatusEquip">
            <div className={statusEquipCor} />
            <h1>
              <b>Status do Equipamento:</b>
            </h1>
            <h2>{equip.statusEquip}</h2>
          </div>
        </div>
      </div>
      <ul className="equipMenu">
        <li className="equipSubMenu">
          <p />
          <ul>
            <li className="equipSubSubMenu">
              <Link to={linkVisualizar}>
                <button type="button"> VISUALIZAR </button>
              </Link>
            </li>
            <li className="equipSubSubMenu">
              <Link to={linkEditar}>
                <button type="button"> EDITAR </button>
              </Link>
            </li>
            <li className="equipSubSubMenu">
              <button type="button" onClick={showModal}>
                DELETAR
              </button>
            </li>
          </ul>
        </li>
      </ul>
      <ModalDelete
        title="Excluir Equipamento?"
        onClose={showModal}
        show={show}
        name={equip.name}
      >
        Tem certeza que deseja excluir permanentemente este equipamento?
      </ModalDelete>
    </div>
  );
}

Equip.propTypes = {
  equip: PropTypes.object,
};

Equip.defaultProps = {
  equip: {},
};

export default Equip;
