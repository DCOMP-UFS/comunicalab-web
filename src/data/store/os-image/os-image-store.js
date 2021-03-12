import { makeAutoObservable } from 'mobx';
import api from '../../../services/api';
import { OsImage } from './os-image';

export class OsImageStore {
  rootStore;
  osImages = [];

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  *createOne(osImageApiJson) {
    const res = yield api.post('osImage', osImageApiJson);

    const newOsImage = OsImage.FromApiJson(this, res.data);
    this.osImages.push(newOsImage);
  }

  *fetchAll() {
    const res = yield api.get('osImage');
    this.osImages = res.data.map((osImageApiJson) =>
      OsImage.FromApiJson(this, osImageApiJson)
    );
  }

  *fetchOne(id) {
    const res = yield api.get(`osImage/${id}`);
    const osImage = OsImage.FromApiJson(this, res.data);

    const foundIndex = this.osImages.findIndex(
      (image) => image.id === osImage.id
    );
    if (foundIndex !== -1) {
      this.osImages[foundIndex] = osImage;
    } else {
      this.osImages.push(osImage);
    }
  }

  removeOne(osImage) {
    this.osImages.splice(this.osImages.indexOf(osImage), 1);
  }

  selectOsImage(id) {
    return this.osImages.find((image) => image.id === id);
  }
}
