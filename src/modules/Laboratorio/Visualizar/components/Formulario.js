import React from 'react';
import {useFormik } from 'formik';
import * as Yup from 'yup';
import Error from '../../Editar/components/Error';
import '../../Editar/components/Formulario';
import PropsType from 'prop-types';

const Formulario = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(255, 'O nome do Equipamento tem que ser menor que 255 caracteres!')
      .required('Digite o nome do Equipamento!'),
    capacity: Yup.number()
      .required('Digite a categoria do Equipamento!')
  });

  const formik = useFormik ({
    initialValues: {name: '', category: '', localization:''},
    validationSchema,
    validateOnMount:true,
    onSubmit : async (values) =>{
      props.onSubmit(values);
    },
  })
 
  return (
    <div className="formulario">
        <form onSubmit={formik.handleSubmit}>
          <div className="formularioLinha">
            <div className="formularioLabel">
              <p>Nome:</p>
            </div>
            <div className="formularioInput">
              <input
                name="name"
                id="name"
                placeholder="Nome do Equipamento"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                className={formik.touched.name && formik.errors.name ? 'has-error' : null}
              />
            </div>
            <Error touched={formik.touched.name} message={formik.errors.name} />
          </div>
          <div className="formularioLinha">
            <div className="formularioLabel">
              <p>Categoria:</p>
            </div>
            <div className="formularioSelect">
            <select
                name= "category"
                id= "category"
                onChange={formik.handleChange}
                defaultValue={formik.values.category}
                onBlur={formik.handleBlur}
                className={
                formik.touched.category && formik.errors.category
                  ? 'has-error'
                  : null
                }
              >
              <option value="" disabled>
                Escolha a Categoria
              </option>
              {props.categories.map(item =>(
                <option value={item.id} key={item.id}>
                    {item.name}
                </option>
              ))}
            </select>
            </div>
            <Error touched={formik.touched.category} message={formik.errors.category} />
          </div>
          <div className="formularioLinha">
            <div className="formularioLabel">
              <p>Localização:</p>
            </div>
            <div className="formularioSelect">
            <select
                name= "localization"
                id="localization"
                onChange={formik.handleChange}
                defaultValue={formik.values.localization}
                onBlur={formik.handleBlur}
                className={
                formik.touched.localization && formik.errors.localization
                  ? 'has-error'
                  : null
                }
              >
              <option value="" disabled>
                Escolha a localização
              </option>
              {props.location.map(item =>(
                <option value={item.id} key={item.id}>
                    {item.name}
                </option>
              ))}
            </select>
            </div>
            <Error
              touched={formik.touched.localization}
              message={formik.errors.localization}
            />
          </div>
          <div className="formularioButton">
            <div className="formularioButtonCancelar">
              <button type="button" onClick = {props.onCancel}> Cancelar </button>
            </div>
            <div className="formularioButtonRegistrar">
              <button type="submit">
                Editar
              </button>
            </div>
          </div>
        </form>
      </div>
    )
};

Formulario.propTypes = {
  initialValues: PropsType.object,
  location: PropsType.array.isRequired,
  categories: PropsType.array.isRequired,
  onSubmit: PropsType.func.isRequired,
  onCancel: PropsType.func.isRequired
  }

Formulario.defaultProps = {
  initialValues: {
    name: '',
    capacity: '',
    localization: ''
  }
}
export default Formulario;
