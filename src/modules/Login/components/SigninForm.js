import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import UserIcon from '../../../assets/User.png';
import UserSquareIcon from '../../../assets/UserForm.png';
import PasswordSquareIcon from '../../../assets/Password.png';
import '../styles/SigninForm.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { id, specClassName } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input className={`textInput ${specClassName}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="erro">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' });
  const { specClassName } = props;

  return (
    <div className="checkbox">
      <label htmlFor="rememberPassword" className="label">
        {children}
      </label>
      <input className={specClassName} {...field} {...props} type="checkbox" />
    </div>
  );
};

const SigninForm = () => (
  <div className="form">
    <img alt="Avatar do usuário" className="userImg" src={UserIcon} />
    <Formik
      initialValues={{
        user: '',
        password: '',
        rememberPassword: false, // added for our checkbox
      }}
      validationSchema={Yup.object({
        user: Yup.string(),
        // .required("Required"),
        password: Yup.string(),
        // .required("Required"),
        rememberPassword: Yup.boolean(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="formInput">
        <TextInput
          label={
            <img alt="Usuário" className="userForm" src={UserSquareIcon} />
          }
          name="user"
          specClassName="userInput"
          id="user"
          type="text"
        />
        <TextInput
          label={
            <img
              alt="Senha"
              className="passwordForm"
              src={PasswordSquareIcon}
            />
          }
          name="password"
          specClassName="passwordInput"
          id="password"
          type="password"
        />
        <Checkbox
          id="rememberPassword"
          name="rememberPassword"
          specClassName="checkboxInput"
        >
          Lembrar senha
        </Checkbox>
        <Link to="/Home">
          <button className="loginBtn" type="button">
            Login
          </button>
        </Link>
      </Form>
    </Formik>
  </div>
);

TextInput.propTypes = {
  label: PropTypes.element,
  id: PropTypes.string,
  specClassName: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
  id: '',
  specClassName: '',
};

Checkbox.propTypes = {
  specClassName: PropTypes.string,
  children: PropTypes.string,
};

Checkbox.defaultProps = {
  specClassName: '',
  children: '',
};

export default SigninForm;
