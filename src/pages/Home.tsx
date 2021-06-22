import { useHistory } from 'react-router-dom';
import {auth, firebase} from '../services/firebase';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext);

    async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <h1><strong>Toda pergunta tem uma resposta :D</strong></h1>
      <p><h5>Tire as dúvidas da sua audiência em tempo real!</h5></p>
      </aside>
      <main>
        <div className="main-content">
          <img src= {logoImg} alt="LetMeAsk"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google"/>
            Crie sua sala com o Google
            </button>
            <div className="separator">
              ou entre em uma sala
            </div>
            <form>
              <input
              type="text"
              placeholder="Digite o código da sala"
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </form>
        </div>
      </main>
    </div>
  )
}