import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext'
import Theme from '../../components/Theme';
import * as C from './styles';

export const Form1 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  const handleNextForm = () => {
      navigate('/form2');
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo cabaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input type="text" autoFocus/>
        </label>

        <button onClick={handleNextForm}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
