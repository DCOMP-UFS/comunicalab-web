import React from 'react';

//import { Formik } from 'formik';
import * as Yup from 'yup';

import Error from './Error';
import styles from '../../../Software/styles/styles.css';

//import Form from './Form'
import { useFormik } from 'formik';
import * as yup from 'yup';
//import dayjs from 'dayjs';
//import * as customParseFormat from 'dayjs/plugin/customParseFormat';
//import styles from '../../../os-image/components/OsImageForm/OsImageForm.module.css';
import PropsType from 'prop-types';

import '../styles/Form.css';
//dayjs.extend(customParseFormat);

const SoftwareForm = (props) => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(5, 'O nome do Software tem que ser maior que 5 caracteres!')
      .max(255, 'O nome do Software tem que ser menor que 255 caracteres!')
      .required('Digite o nome do Software!'),
    version: Yup.string(),
    softcategory_id: Yup.string(),
  });

  const formik = useFormik({
    initialValues: props.initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  return (
    <div className="formulario">
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="formularioLinha">
          <div className="formularioLabel">
            <p>Nome:</p>
          </div>
          <div className="formularioInput">
            <input
              id="name"
              name="name"
              className={
                formik.touched.name && formik.errors.name ? 'has-error' : null
              }
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Nome do Software"
            />
          </div>
          <Error touched={formik.touched.name} message={formik.errors.name} />
          <div className="formularioLinha">
            <div className="formularioLabel">
              <p>Versão:</p>
            </div>
            <div className="formularioInput">
              <input
                id="version"
                name="version"
                className={
                  formik.touched.version && formik.errors.version
                    ? 'has-error'
                    : null
                }
                value={formik.values.version}
                onChange={formik.handleChange}
                placeholder="ex 1.1"
              />
            </div>
            <Error
              touched={formik.touched.version}
              message={formik.errors.version}
            />
          </div>
        </div>
        <div className="formularioLinha">
          <div className="formularioLabel">
            <p>Categoria:</p>
          </div>
          <div className="formularioSelect">
            <select
              name="deleted"
              id="deleted"
              onChange={formik.handleChange}
              defaultValue={formik.values.softcategory_id}
              onBlur={formik.handleBlur}
              className={
                formik.touched.softcategory_id && formik.errors.softcategory_id
                  ? 'has-error'
                  : null
              }
            >
              <option value="" disabled>
                Categoria
              </option>
              <option value="0" id="0">
                Sistema operacional
              </option>
              <option value="1" id="1">
                Graficos
              </option>
            </select>
          </div>
          <Error
            touched={formik.touched.softcategory_id}
            message={formik.errors.softcategory_id}
          />
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
              onChange={formik.handleChange}
              value={formik.values.license}
              onBlur={formik.handleBlur}
              className={
                formik.touched.license && formik.errors.license
                  ? 'has-error'
                  : null
              }
            />
          </div>
          <Error
            touched={formik.touched.license}
            message={formik.errors.license}
          />
        </div>
        <div className="formularioLinha">
          <div className="formularioLabel">
            <p>Ativo:</p>
          </div>
          <div className="formularioSelect">
            <select
              name="active"
              id="active"
              onChange={formik.handleChange}
              defaultValue={formik.values.isActive}
              onBlur={formik.handleBlur}
              className={
                formik.touched.isActive && formik.errors.isActive
                  ? 'has-error'
                  : null
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
          <Error
            touched={formik.touched.isActive}
            message={formik.errors.isActive}
          />
        </div>
        <div className="formularioLinha">
          <div className="formularioLabel">
            <p>Deletado:</p>
          </div>
          <div className="formularioSelect">
            <select
              name="deleted"
              id="deleted"
              onChange={formik.handleChange}
              defaultValue={formik.values.isDeleted}
              onBlur={formik.handleBlur}
              className={
                formik.touched.isDeleted && formik.errors.isDeleted
                  ? 'has-error'
                  : null
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
          <Error
            touched={formik.touched.isDeleted}
            message={formik.errors.isDeleted}
          />
        </div>

        <div className="formularioButton">
          <button
            className={styles.optionsBtn}
            type="button"
            onClick={props.onCancel}
          >
            {props.cancelLabel}
          </button>
          <button
            className={styles.optionsBtn}
            type="submit"
            disabled={!formik.isValid}
          >
            {props.submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

SoftwareForm.propTypes = {
  initialValues: PropsType.object,
  onSubmit: PropsType.func.isRequired,
  onCancel: PropsType.func.isRequired,
  submitLabel: PropsType.string,
  cancelLabel: PropsType.string,
};

SoftwareForm.defaultProps = {
  initialValues: {
    name: '',
    version: '',
    license: '',
    softcategory_id: '',
    isActive: true,
    isDeleted: false,
  },
  submitLabel: 'Cadastrar',
  cancelLabel: 'Cancelar',
};

export default SoftwareForm;
