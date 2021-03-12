import React, { useState } from 'react';
//import styles from './OsImageListItem.module.css';
import PropsType from 'prop-types';
//import dayjs from 'dayjs';
import { Redirect } from 'react-router';
import ModalDelete from '../../../../utils/components/ModalDelete';
import api from '../../../../services/api';
//import OsImageDropdown from '../OsImageDropdown/OsImageDropdown';
//import SoftwareDropDown from '../actions/SoftwareDropDown';

import '../styles/Software.css';

const SoftwareList = (props) => {
  return (
    <div className="software">
      <div className="softwareInfo">
        <div className="softwareName">
          <h1>{props.name}</h1>
          {/*console.log(props.name)*/}
        </div>
        <div className="softwareCategory">
          <h1>{props.version}</h1>
        </div>
        <div className="softwareCategory">
          <h1>Mais informações...{props.softcategory_id}</h1>
        </div>
        <div className="softwareCategory">
          <h1>{props.license}</h1>
        </div>
        <button>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
      </div>
    </div>
  );
};

SoftwareList.propTypes = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  //soft_category_id: PropsType.number.isRequired,
};

export default SoftwareList;
