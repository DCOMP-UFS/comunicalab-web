import React, { useEffect, useState } from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Laboratorio from './components/Laboratorio';
import api from '../../../services/api';
import './styles/index.css';

const Listar = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/laboratory');
      setState(await res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Laboratórios" />
      <div className="listaLaboratorios">
        <ul>
          {state.map((item) => (
            <li key={item.id}>
              <Laboratorio lab={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Listar;
