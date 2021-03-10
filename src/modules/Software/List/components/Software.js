import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Software.css';

function Software({ software }) {
  return (
    <div className="software">
      <div className="softwareInfo">
        <div className="softwareName">
          <h1>{software.name}</h1>
        </div>
        <div className="softwareCategory">
          <h1>{software.category}</h1>
        </div>
        <div className="softwareCategory">
          <h1>Mais informações...</h1>
        </div>
      </div>
    </div>
  );
}

Software.propTypes = {
  software: PropTypes.object,
};

Software.defaultProps = {
  software: {},
};

export default Software;
