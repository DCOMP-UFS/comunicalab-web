import dayjs from 'dayjs';
import { makeAutoObservable } from 'mobx';
import api from '../../../services/api';

export class Laboratory {
  id;
  name;
  capacity;
  isInUse;
  occupiedAt;
  store;

  constructor(store) {
    makeAutoObservable(this);
    this.store = store;
  }

  static FromApiJson(store, laboratoryApiJson) {
    const newLaboratory = new Laboratory(store);
    newLaboratory.id = laboratoryApiJson.id;
    newLaboratory.name = laboratoryApiJson.name;
    newLaboratory.capacity = laboratoryApiJson.capacity;
    newLaboratory.isInUse = laboratoryApiJson.is_in_use;
    newLaboratory.occupiedAt = dayjs(laboratoryApiJson.occupied_at);

    return newLaboratory;
  }

  get asApiJson() {
    return {
      id: this.id,
      name: this.name,
      capacity: this.capacity,
      is_in_use: this.isInUse,
      occupied_at: this.occupiedAt.toJSON(),
    };
  }

  *remove() {
    yield api.delete(`laboratory/${this.id}`);
    this.store.removeOne(this);
  }

  *update() {
    yield api.patch(`laboratory/${this.id}`, this.asApiJson);
  }
}
