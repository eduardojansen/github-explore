import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            alt="Eduardo Jansen"
            src="https://avatars3.githubusercontent.com/u/993846?s=460&u=8bd991fa63b347be7d9c70aac6ecdca915ee4da5&v=4"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Loren ipsun bla are fow hdhsj ablat dfjdi asdijads</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            alt="Eduardo Jansen"
            src="https://avatars3.githubusercontent.com/u/993846?s=460&u=8bd991fa63b347be7d9c70aac6ecdca915ee4da5&v=4"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Loren ipsun bla are fow hdhsj ablat dfjdi asdijads</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            alt="Eduardo Jansen"
            src="https://avatars3.githubusercontent.com/u/993846?s=460&u=8bd991fa63b347be7d9c70aac6ecdca915ee4da5&v=4"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Loren ipsun bla are fow hdhsj ablat dfjdi asdijads</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
