import BotaoAdicionar from '../../components/BotaoAdicionar';
import BarraLateral from '../../containers/BarraLateral';
import ListaDeContatos from '../../containers/ListaDeContatos';

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={true} />
      <ListaDeContatos />
      <BotaoAdicionar />
    </>
  );
};

export default Home;
