import React, {Component} from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Equipamento from './components/equipment';

class Listar extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      isLoaded: false,
      eqp: [],
      eqpInLab: []  
    }
  }

  async componentDidMount(){
    await fetch('https://comunicabackdev.herokuapp.com/equipment')
    .then(res => res.json())  
    .then(json => {
        this.setState({
          isLoaded: true,
          eqp:json, 
        })
      })
      for (let index = 0; index < this.state.eqp.length; index++) {
        let element = this.state.eqp[index];
        if (this.props.location.state.id === element.laboratory_id) {
          this.setState({
            eqpInLab: this.state.eqpInLab.concat(element)
          })
        }
      }
    }

  render(){
    return (
      <div>
        <Toolbar />
        <Menu />
        <Title title="Listar Equipamentos"/>
          <div className="listaEquipamentos">
            <ul>
              {this.state.eqpInLab.map( item =>(
                <li key = {item.id}>
                    <Equipamento eqp = {item} path = {window.location.pathname}/>
                </li>
              ))}
            </ul>
        </div>
      </div>
    );
  }
}

export default Listar;
