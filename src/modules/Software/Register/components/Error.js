import React from 'react';

import PropTypes from 'prop-types';

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid"> &nbsp; </div>;
  }
  if (message) {
    return <div className="form-message invalid">{message}</div>;
  }

  return <div className="form-message valid"> Sucesso </div>;
};

Error.propTypes = {
  touched: PropTypes.bool,
  message: PropTypes.string,
};

Error.defaultProps = {
  touched: false,
  message: '',
};

export default Error;
