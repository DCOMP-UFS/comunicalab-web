import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './OsImageForm.module.css';
import PropsType from 'prop-types';

dayjs.extend(customParseFormat);

const OsImageForm = (props) => {
  const validationSchema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    builtAt: yup
      .string()
      .required('Data de criação é obrigatório')
      .test({
        name: 'isValidDate',
        message: 'Data de criação é inválida',
        test: (value) => {
          const parsedDate = dayjs(
            value,
            ['D/M/YYYY', 'DD/M/YYYY', 'D/MM/YYYY', 'DD/MM/YYYY'],
            true
          );
          return parsedDate.isValid();
        },
      }),
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
    <form
      className={styles.registerWrapper}
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <div className={styles.formWrapper}>
        <div className={styles.fieldWrapper}>
          <p className={styles.field}>Nome:</p>
          <input
            id="name"
            name="name"
            className={styles.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Ex.: Linux"
          />
        </div>

        <div className={styles.fieldWrapper}>
          <p className={styles.field}>Data de criação:</p>
          <input
            id="builtAt"
            name="builtAt"
            className={styles.input}
            value={formik.values.builtAt}
            onChange={formik.handleChange}
            placeholder="dd/mm/yyyy"
          />
        </div>
      </div>

      <div className={styles.optionsWrapper}>
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
  );
};

OsImageForm.propTypes = {
  initialValues: PropsType.object,
  onSubmit: PropsType.func.isRequired,
  onCancel: PropsType.func.isRequired,
  submitLabel: PropsType.string,
  cancelLabel: PropsType.string,
};

OsImageForm.defaultProps = {
  initialValues: {
    name: '',
    builtAt: '',
  },
  submitLabel: 'Cadastrar',
  cancelLabel: 'Cancelar',
};

export default OsImageForm;
