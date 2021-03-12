import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Software from './components/Software';

import './styles/index.css';

const ListSoftwares = () => {
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    api.get('software').then((res) =>
      setSoftwares(
        res.data.map((software) => ({
          id: software.id,
          name: software.name,
          version: software.version,
          softcategory_id: software.softcategory_id,
        }))
      )
    );
  }, []);

  let toolbarSubtitle;
  if (softwares.length === 1) {
    toolbarSubtitle = `(1 item)`;
  } else if (softwares.length > 1) {
    toolbarSubtitle = `(${softwares.length} itens)`;
  } else {
    toolbarSubtitle = undefined;
  }

  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Sofware" subTitle={toolbarSubtitle} />
      <div className="listSoftwares">
        <Software softwares={softwares} />
        {/*console.log(softwares)*/}
      </div>
    </div>
  );
};

export default ListSoftwares;
