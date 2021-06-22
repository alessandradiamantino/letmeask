import {Link} from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';
//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';

export function NewRoom() {
 // const { user } = useContext(AuthContext);
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
            <h2>Criar uma nova sala</h2>
            <form>
              <input
              type="text"
              placeholder="Nome da sala"
              />
              <Button type="submit">
                Criar sala
              </Button>
            </form>
            <p>
              Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </p>
        </div>
      </main>
    </div>
  )
}
