import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import Theme from '../../components/Theme';
import * as C from './styles';
import SelectOption from '../../components/SelectOption';

export const Form2 = () => {
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
    if (state.name !== '') {
      navigate('/form3');
    } else alert("Preencha os dados.");
  }
  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }
  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3 </p>
        <h1>{state.name}, O que melhor descreve você?</h1>
        <p>Preencha o campo cabaixo com seu nome completo.</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="😀"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou Programador"
          description="Comecei a programar há 2 anos ou mais"
          icon="😁"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <Link className="backButton" to = "/">Voltar</Link>
        <button onClick={handleNextForm}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
