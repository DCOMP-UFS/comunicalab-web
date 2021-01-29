import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
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
      <Route path={`${match.url}/Editar/:id`}>
        <EditOsImage />
      </Route>
    </Switch>
  );
};

export default OsImageRouter;
