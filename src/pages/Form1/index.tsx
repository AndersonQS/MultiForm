import React, { ChangeEvent } from 'react';
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

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3 {state.name}</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo cabaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input type="text"
                  autoFocus
                  value = {state.name}
                  onChange = {handleNameChange}/>
        </label>

        <button onClick={handleNextForm}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
