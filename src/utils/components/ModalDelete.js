import React from 'react';
import '../styles/ModalDelete.css';
import PropTypes from 'prop-types';

import ConfirmDelete from './ConfirmDelete';

export default class ModalDelete extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  showModal = () => {
    console.log(this.props.id);
    this.setState({
      show : !this.state.show
    });
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modalDelete">
        <div className="modalDeleteBox" id="modal">
          <div className="modalDeleteTitle">
            <h2> Você tem certeza disso </h2>
          </div>
          <div className="modalDeleteText">
            <h2>{this.props.children}</h2>
          </div>
          <div className="modalDeleteActions">
            <div className="modalDeleteNot">
              <button type="button" onClick={this.props.onClose}>
                <strong> NÃO </strong>
              </button>
            </div>
            <div className="modalDeleteYes">
              <button type="button" onClick ={this.showModal}>
                <strong> SIM </strong>
              </button>
            </div>
          </div>
        </div>
        <ConfirmDelete
        title={this.props.name}
        id = {this.props.id}
        onClose={this.showModal}
        show={this.state.show}
      >
      </ConfirmDelete>
      </div>
    );
  }
}
ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
