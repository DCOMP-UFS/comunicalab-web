import { createContext, useContext } from 'react';
import { LaboratoryStore } from './laboratory/laboratory-store';
import { OsImageStore } from './os-image/os-image-store';

export class RootStore {
  constructor() {
    this.osImageStore = new OsImageStore(this);
    this.laboratoryStore = new LaboratoryStore(this);
  }
}

const RootStoreContext = createContext();

export const RootStoreProvider = (props) => {
  const store = new RootStore();

  return (
    <RootStoreContext.Provider value={store}>
      {props.children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return context;
};
