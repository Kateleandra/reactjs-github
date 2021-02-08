import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Header, InformationRepository, Issues } from './styles';
import api from '../../services/api'

interface RepositoryParams{
  repository: string;
}
interface RepositoryUser{
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
    };
  }

  interface Issue{
    id: number;
    title: string;
    html_url: string;
    user:{
      login: string;
    }
  }

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryUser | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });

  }, [params.repository]);

  return (
    <>
    <Header>
      <img src={logoImg} alt="Github explores"/>
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
    { repository && (
      <InformationRepository>
      <header>
        <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>{repository.stargazers_count}</strong>
          <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
            <span>Stars</span>
          </Link>
        </li>
        <li>
          <strong>{repository.forks_count}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{repository.open_issues_count}</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </ InformationRepository>
    )}
    <Issues>
      { issues.map(issues => (
        <a key={issues.id} href={issues.html_url}>
        <div>
          <strong>{issues.title}</strong>
          <p>{issues.user.login}</p>
        </div>
        <FiChevronRight size={20}/>
      </a>
      ))}
    </ Issues>
    </>
  );
};
export default Repository;