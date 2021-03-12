import { makeAutoObservable } from 'mobx';
import api from '../../../services/api';

export class OsImage {
  id;
  name;
  builtAt;
  store;

  constructor(store) {
    makeAutoObservable(this);
    this.store = store;
  }

  static FromApiJson(store, osImageApiJson) {
    const newOsImage = new OsImage(store);
    newOsImage.id = osImageApiJson.id;
    newOsImage.name = osImageApiJson.name;
    newOsImage.builtAt = osImageApiJson.built_at;

    return newOsImage;
  }

  get asApiJson() {
    return {
      id: this.id,
      name: this.name,
      built_at: this.builtAt,
    };
  }

  *remove() {
    yield api.delete(`osImage/${this.id}`);
    this.store.removeOne(this);
  }

  *update() {
    yield api.patch(`osImage/${this.id}`, this.asApiJson);
  }
}
