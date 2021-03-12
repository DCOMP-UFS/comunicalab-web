import React, { useState } from 'react';
import '../styles/ModalDelete.css';
import PropTypes from 'prop-types';

import ConfirmDelete from './ConfirmDelete';

const ModalDelete = (props) => {

  const [show,setShow] = useState(false);

  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  const showModal = () => {
    setShow(!show);
  };

  if (!props.show) return null;
    return (
      <div className="modalDelete">
        <div className="modalDeleteBox" id="modal">
          <div className="modalDeleteTitle">
            <h2> Você tem certeza disso </h2>
          </div>
          <div className="modalDeleteText">
            <h2>{props.children}</h2>
          </div>
          <div className="modalDeleteActions">
            <div className="modalDeleteNot">
              <button type="button" onClick={onClose}>
                <strong> NÃO </strong>
              </button>
            </div>
            <div className="modalDeleteYes">
              <button type="button" onClick ={showModal}>
                <strong> SIM </strong>
              </button>
            </div>
          </div>
        </div>
        <ConfirmDelete
        title={props.name}
        id = {props.id}
        onClose={showModal}
        show={show}
      >
      </ConfirmDelete>
      </div>
    );
  }
ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ModalDelete;