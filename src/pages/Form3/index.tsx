import { ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import Theme from '../../components/Theme';
import * as C from './styles';

export const Form3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  }, []);

  const handleNextForm = () => {
    if (state.email !== '' && state.github) {
      console.log(state);
    } else alert("Preencha os dados.");
  }
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }
  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }
  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3 </p>
        <h1>Olá {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />
        <label>
          Qual seu e-mail?
          <input type="email"
            autoFocus
            value={state.email}
            onChange={handleEmailChange} />
        </label>

        <label>
          Qual seu GitHub?
          <input type="url"
            autoFocus
            value={state.github}
            onChange={handleGithubChange} />
        </label>

        <Link className="backButton" to="/form2">Voltar</Link>
        <button onClick={handleNextForm}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
}
