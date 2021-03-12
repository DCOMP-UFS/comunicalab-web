import { makeAutoObservable } from 'mobx';
import api from '../../../services/api';
import { Laboratory } from './laboratory';

export class LaboratoryStore {
  rootStore;
  laboratories = [];

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  *createOne(laboratoryApiJson) {
    const res = yield api.post('laboratory', laboratoryApiJson);

    const newLaboratory = Laboratory.FromApiJson(this, res.data);
    this.laboratories.push(newLaboratory);
  }

  *fetchAll() {
    const res = yield api.get('laboratory');
    this.laboratories = res.data.map((laboratoryApiJson) =>
      Laboratory.FromApiJson(this, laboratoryApiJson)
    );
  }

  removeOne(laboratory) {
    this.laboratory.splice(this.laboratory.indexOf(laboratory), 1);
  }

  selectLaboratory(id) {
    return this.laboratory.find((laboratory) => laboratory.id === id);
  }
}
