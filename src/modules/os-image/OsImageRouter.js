import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddOsImageToLab from './pages/add-to-lab/AddOsImageToLab';
import AddOsImage from './pages/add/AddOsImage';
import EditOsImage from './pages/edit/EditOsImage';
import ListOsImages from './pages/list/ListOsImages';

const OsImageRouter = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/Listar`}>
        <ListOsImages />
      </Route>
      <Route path={`${match.url}/Registrar`}>
        <AddOsImage />
      </Route>
      <Route path={`${match.url}/:id/Editar/`}>
        <EditOsImage />
      </Route>
      <Route path={`${match.url}/:id/RegistrarEmLaboratorio/`}>
        <AddOsImageToLab />
      </Route>
    </Switch>
  );
};

export default OsImageRouter;
