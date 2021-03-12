import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './AddOsImageToLab.module.css';
import Toolbar from '../../../../utils/components/Toolbar';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Button from '../../../../shared/components/Button/Button';
import CardActions from '../../../../shared/components/CardActions/CardActions';
import { useRootStore } from '../../../../data/store/root-store';
import LaboratoryCard from '../../../../shared/components/LaboratoryCard/LaboratoryCard';

const AddOsImageToLab = observer(() => {
  const { laboratoryStore } = useRootStore();

  const [selectedLabs, setSelectedLabs] = useState([]);
  const labs = laboratoryStore.laboratories;

  useEffect(() => {
    laboratoryStore.fetchAll();
  }, [laboratoryStore]);

  const handleCardCheck = (lab) => {
    const foundIndex = selectedLabs.findIndex((l) => l.id === lab.id);
    if (foundIndex !== -1) {
      const newLabs = [...selectedLabs];
      newLabs.splice(foundIndex, 1);
      setSelectedLabs(newLabs);
    } else {
      const newLabs = [...selectedLabs, lab];
      setSelectedLabs(newLabs);
    }
  };

  const handleSelectAll = () => {
    setSelectedLabs([...labs]);
  };

  const cards = labs.map((lab) => (
    <LaboratoryCard className={styles.labCard} key={lab.id} laboratory={lab}>
      <CardActions>
        <input
          type="checkbox"
          checked={selectedLabs.find((l) => l.id === lab.id) != null}
          onChange={() => handleCardCheck(lab)}
        />
      </CardActions>
    </LaboratoryCard>
  ));

  const selectedCards = labs
    .filter((lab) => selectedLabs.find((l) => l.id === lab.id))
    .map((lab) => (
      <LaboratoryCard
        className={styles.labCard}
        key={lab.id}
        laboratory={lab}
      />
    ));

  return (
    <div className={styles.wrapper}>
      <Toolbar />
      <Menu />
      <Title title="Adicionar à Laboratórios" />
      <div className={styles.contentWrapper}>
        <div className={styles.oneMoreWrapper}>
          <div className={styles.labWrapper}>
            <div className={styles.labsWrapper}>
              <div className={styles.listInfo}>
                <p className={styles.listTitle}>Laboratórios ({labs.length})</p>
                <hr className={styles.ruler} />
              </div>
              <div className={styles.listWrapper}>
                <div className={styles.list}>{cards}</div>
              </div>
            </div>

            <Button className={styles.button} onClick={handleSelectAll}>
              Selecionar Todos
            </Button>
          </div>

          <div className={styles.labWrapper}>
            <div className={styles.labsWrapper}>
              <div className={styles.listInfo}>
                <p className={styles.listTitle}>
                  Selectionados ({selectedLabs.length})
                </p>
                <hr className={styles.ruler} />
              </div>
              <div className={styles.listWrapper}>
                <div className={styles.list}>{selectedCards}</div>
              </div>
            </div>

            <Button className={styles.button}>Adicionar</Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AddOsImageToLab;
