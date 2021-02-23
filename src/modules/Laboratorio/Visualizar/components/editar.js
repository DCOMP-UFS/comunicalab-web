import React, {useState, useEffect} from 'react';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import Formulario from './Formulario';
import {Redirect} from 'react-router-dom';
import api from '../../../../services/api';


const Editar =  (props) => {
  const [shouldRedirect,setShouldRedirect] = useState(false);
  const [category, getCategory] = useState([]);
  const [location, getLocation] = useState([]);
  const cancelHandler = () => setShouldRedirect(true);


  useEffect( () => {
      api
        .get('/laboratory')
        .then( res => {
          getLocation(res.data);
        })
        .catch ( err =>{
          console.log(err)
        })
        api
        .get('/equip_category')
        .then( res => {
          getCategory(res.data);
        })
        .catch ( err =>{
          console.log(err)
        })       
  });

  const submitHandler = async (values) =>{
    
    const newEquip = {
      brand: values.name,
      equip_category_id : values.category,
      laboratory_id : values.localization
    };
    try {
      console.log(values);
      await api.put(`/equipment/${props.location.state.id}`, newEquip);
      setShouldRedirect(true);
      return (<Redirect to = "/Laboratorio/Listar"></Redirect>)
    } catch {
      console.log('Erro no servidor. Por favor, tente mais tarde')
    }
  }
  if (shouldRedirect) {
    return <Redirect to = "/Laboratorio/Listar"/>;
  }
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Editar Equipamento" subTitle={props.location.state.brand} />
      <Formulario onSubmit = {submitHandler} onCancel = {cancelHandler} location = {location} categories = {category} />
    </div>
  );
}


export default Editar;
