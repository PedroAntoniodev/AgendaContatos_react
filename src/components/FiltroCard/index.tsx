import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { alteraFiltro } from '../../store/reducers/filtro';
import { RootReducer } from '../../store';

export type Props = {
  legenda: string;
  criterio: 'favorito' | 'todas';
};

const FiltroCard = ({ legenda, criterio }: Props) => {
  const dispatch = useDispatch();
  const { filtro, contatos } = useSelector((state: RootReducer) => state);

  const verificaSeEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio;

    return mesmoCriterio;
  };

  const contarContatos = () => {
    if (criterio === 'todas') return contatos.itens.length;
    if (criterio === 'favorito') {
      return contatos.itens.filter((item) => item.favorito).length;
    }
  };

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
      })
    );
  };

  const contador = contarContatos();
  const ativo = verificaSeEstaAtivo();

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  );
};
export default FiltroCard;
