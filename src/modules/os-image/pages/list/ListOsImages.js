import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import OsImageList from '../../components/OsImageList/OsImageList';
import styles from './ListOsImages.module.css';

const ListOsImages = () => {
  const [osImages, setOsImages] = useState([]);

  useEffect(() => {
    api.get('osImage').then((res) =>
      setOsImages(
        res.data.map((image) => ({
          id: image.id,
          name: image.name,
          builtAt: image.built_at,
        }))
      )
    );
  }, []);

  let toolbarSubtitle;
  if (osImages.length === 1) {
    toolbarSubtitle = `(1 item)`;
  } else if (osImages.length > 1) {
    toolbarSubtitle = `(${osImages.length} itens)`;
  } else {
    toolbarSubtitle = undefined;
  }

  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Listar Imagens" subTitle={toolbarSubtitle} />
      <div className={styles.wrapper}>
        <OsImageList images={osImages} />
      </div>
    </>
  );
};

export default ListOsImages;
