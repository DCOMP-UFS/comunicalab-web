import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Error from './Error';
import '../styles/Form.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'O nome do Software tem que ser maior que 5 caracteres!')
    .max(255, 'O nome do Software tem que ser menor que 255 caracteres!')
    .required('Digite o nome do Software!'),
  category: Yup.string()
    .min(5, 'O nome do Software tem que ser maior que 5 caracteres!')
    .max(255, 'O nome do Software tem que ser menor que 255 caracteres!')
    .required('Digite a categoria do Software!'),
});

function Formulario() {
  return (
    <Formik
      initialValues={{ name: '', category: '', equipment: '' }}
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
                  placeholder="Nome do Software"
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
                <p>Equipamento:</p>
              </div>
              <div className="formularioSelect">
                <select
                  name="equipment"
                  id="equipment"
                  onChange={handleChange}
                  defaultValue={values.equipment}
                  onBlur={handleBlur}
                  className={
                    touched.equipment && errors.equipment ? 'has-error' : null
                  }
                >
                  <option value="" disabled>
                    Escolha o equipamento
                  </option>
                  <option value="2" id="2">
                    2
                  </option>
                  <option value="3" id="3">
                    3
                  </option>
                  <option value="4" id="4">
                    4
                  </option>
                </select>
              </div>
              <Error touched={touched.equipment} message={errors.equipment} />
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
