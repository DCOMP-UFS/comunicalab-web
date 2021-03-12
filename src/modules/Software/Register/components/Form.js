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

function Form() {
  return (
    <Formik
      initialValues={{
        name: '',
        version: '',
        license: '',
        soft_category_id: '',
        isActive: 0,
        isDeleted: 0,
      }}
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
                  value={values.softcategory_id}
                  onBlur={handleBlur}
                  className={
                    touched.softcategory_id && errors.softcategory_id
                      ? 'has-error'
                      : null
                  }
                />
              </div>
              <Error
                touched={touched.soft_category_id}
                message={errors.soft_category_id}
              />
            </div>
            <div className="formularioLinha">
              <div className="formularioLabel">
                <p>Versão:</p>
              </div>
              <div className="formularioInput">
                <input
                  name="version"
                  id="version"
                  placeholder="Versão"
                  type="text"
                  onChange={handleChange}
                  value={values.version}
                  onBlur={handleBlur}
                  className={
                    touched.version && errors.version ? 'has-error' : null
                  }
                />
              </div>
              <Error touched={touched.version} message={errors.version} />
            </div>
            <div className="formularioLinha">
              <div className="formularioLabel">
                <p>Licença:</p>
              </div>
              <div className="formularioInput">
                <input
                  name="license"
                  id="license"
                  placeholder="Licença"
                  type="text"
                  onChange={handleChange}
                  value={values.license}
                  onBlur={handleBlur}
                  className={
                    touched.license && errors.license ? 'has-error' : null
                  }
                />
              </div>
              <Error touched={touched.license} message={errors.license} />
            </div>
            <div className="formularioLinha">
              <div className="formularioLabel">
                <p>Ativo:</p>
              </div>
              <div className="formularioSelect">
                <select
                  name="active"
                  id="active"
                  onChange={handleChange}
                  defaultValue={values.isActive}
                  onBlur={handleBlur}
                  className={
                    touched.isActive && errors.isActive ? 'has-error' : null
                  }
                >
                  <option value="" disabled>
                    Ativo?
                  </option>
                  <option value="0" id="0">
                    Não
                  </option>
                  <option value="1" id="1">
                    Sim
                  </option>
                </select>
              </div>
              <Error touched={touched.isActive} message={errors.isActive} />
            </div>
            <div className="formularioLinha">
              <div className="formularioLabel">
                <p>Deletado:</p>
              </div>
              <div className="formularioSelect">
                <select
                  name="deleted"
                  id="deleted"
                  onChange={handleChange}
                  defaultValue={values.isDeleted}
                  onBlur={handleBlur}
                  className={
                    touched.isDeleted && errors.isDeleted ? 'has-error' : null
                  }
                >
                  <option value="" disabled>
                    Deletado?
                  </option>
                  <option value="0" id="0">
                    Não
                  </option>
                  <option value="1" id="1">
                    Sim
                  </option>
                </select>
              </div>
              <Error touched={touched.isDeleted} message={errors.isDeleted} />
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

export default Form;
