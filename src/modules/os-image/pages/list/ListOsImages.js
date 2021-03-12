import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../../../data/store/root-store';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import styles from './ListOsImages.module.css';
import OsImageListItem from '../../components/OsImageListItem/OsImageListItem';

const ListOsImages = observer(() => {
  const { osImageStore } = useRootStore();

  const osImages = osImageStore.osImages;

  useEffect(() => {
    osImageStore.fetchAll();
  }, [osImageStore]);

  const imagesList = osImages.map((osImage) => (
    <OsImageListItem
      className={styles.listItem}
      key={osImage.id}
      osImage={osImage}
    />
  ));

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
        <div className={styles.listWrapper}>{imagesList}</div>
      </div>
    </>
  );
});

export default ListOsImages;
