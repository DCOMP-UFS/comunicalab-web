import React, {Component} from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Laboratorio from './components/Laboratorio';
import './styles/index.css';
class Listar extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      isLoaded: false,
      labs: [],  
    }
  }


  componentDidMount(){
    fetch('https://comunicabackdev.herokuapp.com/laboratory')
    .then(res => res.json())  
    .then(json => {
        this.setState({
          isLoaded: true,
          labs:json, 
        })
      })
  }  

  render(){
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Laboratórios"/>
      <div className="listaLaboratorios">
        <ul>
          {this.state.labs.map( item =>(
            <li key = {item.id}>
              <Laboratorio lab={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
}

export default Listar;
