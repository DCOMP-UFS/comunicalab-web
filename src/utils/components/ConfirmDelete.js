import React from 'react';
import '../styles/ConfirmDelete.css';
import PropTypes from 'prop-types';
import api from '../../services/api'

export default class ConfirmDelete extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {value : ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value === this.props.title){
        api.delete(`/laboratory/${this.props.id}`);
        alert('O laboratório ' + this.state.value + ' foi deletado!');
        window.location.reload();
    } else{
        alert('Nome do laboratório incorreto!')
    }
    event.preventDefault();
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="confirmDelete">
        <div className="confirmDeleteBox">
          <div className="confirmDeleteTitle">
            <h2> Você tem certeza disso? </h2>
            <button onClick = {this.onClose}>X</button>
          </div>
          <div className="warningDeleteText">
            <h2>Leia com atenção</h2>
          </div>
          <div className="deleteText">
            <h3>Essa ação NÃO pode ser desfeita! Isso irá deletar
             o {this.props.title} e seus componentes.</h3>
          </div>
          <div className="modalDeleteInput">
            <form onSubmit={this.handleSubmit}>
                <label>
                  <div className = "modalDeleteInputText">
                Para confirmar a exclusão, escreva o nome do laboratório no campo abaixo:
                </div>
                <div className = "modalDeleteInput2">
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
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
}
ConfirmDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
