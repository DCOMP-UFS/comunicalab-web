import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './OsImageForm.module.css';
import clsx from 'clsx';

dayjs.extend(customParseFormat);

const validationSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  builtAt: yup
    .string()
    .required('Data de criação é obrigatório')
    .test('Data de criação é inválida', (value) => {
      const parsedDate = dayjs(
        value,
        ['D/M/YYYY', 'DD/M/YYYY', 'D/MM/YYYY', 'DD/MM/YYYY'],
        true
      );
      return parsedDate.isValid();
    }),
});

const OsImageForm = (props) => {
  const {
    className,
    initialValues = {
      name: '',
      builtAt: '',
    },
    onSubmit,
    onCancel,
    cancelLabel = 'Cadastrar',
    submitLabel = 'Cancelar',
    ...otherProps
  } = props;

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit,
  });

  return (
    <form
      className={clsx(styles.registerWrapper, className)}
      onSubmit={formik.handleSubmit}
      noValidate
      {...otherProps}
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
        <button className={styles.optionsBtn} type="button" onClick={onCancel}>
          {cancelLabel}
        </button>
        <button
          className={styles.optionsBtn}
          type="submit"
          disabled={!formik.isValid}
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default OsImageForm;
