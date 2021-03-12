import React from 'react';
import PropTypes from 'prop-types';
//import SoftwareList from './SoftwareList';
import SoftwareList from './SoftwareListItem';
import '../styles/Software.css';

const Software = (props) => {
  const softwareList = props.softwares.map((software) => (
    <SoftwareList
      key={software.id}
      id={software.id}
      name={software.name}
      version={software.version}
      soft_category_id={software.soft_category_id}
    />
  ));
  return <div> {softwareList}</div>;
};

Software.propTypes = {
  softwares: PropTypes.array.isRequired,
};

export default Software;
