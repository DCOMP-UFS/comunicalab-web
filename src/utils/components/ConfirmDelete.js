import React, { useState } from 'react';
import '../styles/ConfirmDelete.css';
import PropTypes from 'prop-types';
import api from '../../services/api'

const ConfirmDelete = (props) => {

  const [value,setValue] = useState();
  
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    if (value === props.title){
        api.delete(`/laboratory/${props.id}`);
        alert('O laboratório ' + value + ' foi deletado!');
        window.location.reload();
    } else{
        alert('Nome do laboratório incorreto!')
    }
    event.preventDefault();
  }

    if (!props.show) {
      return null;
    }
    return (
      <div className="confirmDelete">
        <div className="confirmDeleteBox">
          <div className="confirmDeleteTitle">
            <h2> Você tem certeza disso? </h2>
            <button onClick = {onClose}>X</button>
          </div>
          <div className="warningDeleteText">
            <h2>Leia com atenção</h2>
          </div>
          <div className="deleteText">
            <h3>Essa ação NÃO pode ser desfeita! Isso irá deletar
             o {props.title} e seus componentes.</h3>
          </div>
          <div className="modalDeleteInput">
            <form onSubmit={handleSubmit}>
                <label>
                  <div className = "modalDeleteInputText">
                Para confirmar a exclusão, escreva o nome do laboratório no campo abaixo:
                </div>
                <div className = "modalDeleteInput2">
                    <input type="text" value={value} onChange={handleChange} />
                </div>
                </label>
              <div className = "modalDeleteInputLine" ></div>
              <div className = "confirmDeleteButton">
                <input type="submit" value="Eu entendo as consequências, delete este laboratório" />
              </div>
            </form>
            </div>
          </div>
        </div>
    );
}
ConfirmDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ConfirmDelete;