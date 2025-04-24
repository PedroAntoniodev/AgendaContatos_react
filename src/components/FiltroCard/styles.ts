import styled from 'styled-components';

type CardProps = {
  ativo: boolean;
};

export const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'ativo',
})<CardProps>`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5E5E5E')};
  border-radius: 8px;
  cursor: pointer;
`;

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`;

export const Label = styled.span`
  font-size: 16px;
`;
