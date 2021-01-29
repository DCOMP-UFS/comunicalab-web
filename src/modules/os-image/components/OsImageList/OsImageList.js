import React from 'react';
import OsImageListItem from '../OsImageListItem/OsImageListItem';
import styles from './OsImageList.module.css';
import PropTypes from 'prop-types';

const OsImageList = (props) => {
  const imagesList = props.images.map((image) => (
    <OsImageListItem
      key={image.id}
      id={image.id}
      name={image.name}
      builtAt={image.builtAt}
    />
  ));

  return <div className={styles.wrapper}>{imagesList}</div>;
};

OsImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default OsImageList;
