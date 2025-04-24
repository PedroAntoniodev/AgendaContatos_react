import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${variaveis.azul};
`;

export const MainContainer = styled.main`
  padding: 8px 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${variaveis.azulEscuro};
`;

export const TituloPgCadastro = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`;

export const CampoPadrao = styled.input`
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  margin-bottom: 12px;
`;
export const CampoEmail = styled.input`
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  margin: 12px 0;
`;
export default EstiloGlobal;
