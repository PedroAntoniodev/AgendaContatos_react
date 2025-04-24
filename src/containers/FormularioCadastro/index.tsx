import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MainContainer, TituloPgCadastro } from '../../styles';
import { CampoPadrao, CampoEmail } from '../../styles';
import { CampoFavorito, Form, BotaoCadastrar, Label } from './styles';

import { cadastrar } from '../../store/reducers/contatos';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [email, setemail] = useState('');
  const [numero, setNumero] = useState('');
  const [favorito, setfavorito] = useState(false);

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoContato = {
      id: Date.now(),
      titulo,
      favorito,
      numero,
      email,
    };

    dispatch(cadastrar(novoContato));

    navigate('/');
  };

  return (
    <MainContainer>
      <TituloPgCadastro>Adicionar Contato</TituloPgCadastro>
      <Form onSubmit={handlerSubmit}>
        <CampoPadrao
          value={titulo}
          required
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <CampoEmail
          value={email}
          required
          onChange={(evento) => setemail(evento.target.value)}
          type="email"
          placeholder="Insira o e-mail"
        />
        <CampoPadrao
          value={numero}
          required
          onChange={(evento) => setNumero(evento.target.value)}
          type="number"
          placeholder="Insira o Número"
        />
        <div>
          <CampoFavorito
            name="favorito"
            type="radio"
            id="favorito"
            checked={favorito === true}
            onChange={() => setfavorito(true)}
            value="true"
          />
          <Label htmlFor="favorito">Favorito</Label>
        </div>
        <div>
          <CampoFavorito
            name="nao-favorito"
            type="radio"
            id="nao-favorito"
            checked={favorito === false}
            onChange={() => setfavorito(false)}
            value="false"
          />
          <Label htmlFor="nao-favorito">Não Favorito</Label>
        </div>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
