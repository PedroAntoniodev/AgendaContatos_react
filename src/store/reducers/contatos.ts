import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contatos';

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      {
        id: 1,
        titulo: 'Pai',
        favorito: true,
        numero: '988765432',
        email: 'contato.pai@gmail.com',
      },
      {
        id: 2,
        titulo: 'Mae',
        favorito: true,
        numero: '988765432',
        email: 'contato.mae@gmail.com',
      },
      {
        id: 3,
        titulo: 'Irmao',
        favorito: true,
        numero: '988765432',
        email: 'contato.irmao@gmail.com',
      },
    ],
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload),
      ];
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      );

      if (contatoJaExiste) {
        alert('Este contato já está adicionado a sua lista');
      } else {
        state.itens.push(action.payload);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;
