import React, { useState, useEffect } from 'react';
import { Title, Cards} from './styles';
import { Link, useRouteMatch } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

interface StarredParams{
  starred: string;
}

interface Starred{
  name: string;
  full_name: string;
}


const Starred: React.FC = () => {
  const [starred, setStarred] = useState<Starred | null>(null);
  const { params } = useRouteMatch<StarredParams>();

  useEffect(() => {
    api.get(`${params.starred}/starred`).then(response => {
      console.log("teste", response.data)
      setStarred(response.data);
    });
  }, [params.starred]);

  return (
    <>
    <img src={logoImg} alt="Github Explorer"/>
      <Title>Repositores</Title>
      
      <Cards>
        <p>{starred?.name}</p>
        <p>{starred?.full_name}</p>
      </Cards>
    </>
  )
};
export default Starred;