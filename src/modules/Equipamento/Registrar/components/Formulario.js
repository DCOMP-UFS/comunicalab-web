import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Error from './Error';
import '../styles/Formulario.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'O nome do Equipamento tem que ser maior que 5 caracteres!')
    .max(255, 'O nome do Equipamento tem que ser menor que 255 caracteres!')
    .required('Digite o nome do Equipamento!'),
  category: Yup.string()
    .min(5, 'O nome do Equipamento tem que ser maior que 5 caracteres!')
    .max(255, 'O nome do Equipamento tem que ser menor que 255 caracteres!')
    .required('Digite a categoria do Equipamento!'),
});

function Formulario() {
  return (
    <Formik
      initialValues={{ name: '', category: '', localization: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="formulario">
          <form onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  className={touched.name && errors.name ? 'has-error' : null}
                />
              </div>
              <Error touched={touched.name} message={errors.name} />
            </div>
            <div className="formularioLinha">
              <div className="formularioLabel">
                <p>Categoria:</p>
              </div>
              <div className="formularioInput">
                <input
                  name="category"
                  id="category"
                  placeholder="Categoria"
                  type="text"
                  onChange={handleChange}
                  value={values.category}
                  onBlur={handleBlur}
                  className={
                    touched.category && errors.category ? 'has-error' : null
                  }
                />
              </div>
              <Error touched={touched.category} message={errors.category} />
            </div>
            <div className="formularioLinha">
              <div className="formularioLabel">
                <p>Localização:</p>
              </div>
              <div className="formularioRadio">
                <input type="radio" id="1" value="1" />
                <label for="1">Laboratório 1</label> <br />
                <input type="radio" id="2" value="2" />
                <label for="2">Laboratório 2</label>
                <br />
                <input type="radio" id="3" value="3" />
                <label for="3">Laboratório 3</label>
                <br />
              </div>
              <Error
                touched={touched.localization}
                message={errors.localization}
              />
            </div>
            <div className="formularioButton">
              <div className="formularioButtonCancelar">
                <button type="button"> Cancelar </button>
              </div>
              <div className="formularioButtonRegistrar">
                <button type="submit" disabled={isSubmitting}>
                  Registrar
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Formulario;
