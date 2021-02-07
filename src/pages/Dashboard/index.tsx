import React from 'react';
import { Title, Form, Repositories} from './styles';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="">
          <img src="teste" alt="Foto usuário do github"/>
          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  )
};
export default Dashboard;