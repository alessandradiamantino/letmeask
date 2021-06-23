import {Link, useHistory} from 'react-router-dom';
import {FormEvent} from 'react'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { database } from '../services/firebase';
//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';

export function NewRoom() {

const { user } = useAuth();
const [newRoom, setNewRoom] = useState('');
const history = useHistory();

async function handleCreateRoom(event: FormEvent) {
  event.preventDefault();

  if(newRoom.trim() === ''){
    return;
  }
  const roomRef = database.ref('rooms');

  const firebaseRoom = await roomRef.push({
    title: newRoom,
    authorId: user?.id
  })
 
  history.push(`/rooms/${firebaseRoom.key}`)

}

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <h1><strong>Faça salas de Q&amp;A ao vivo!</strong></h1>
      <p><h5>Tire as dúvidas da sua audiência em tempo real!</h5></p>
      </aside>
      <main>
        <div className="main-content">
          <img src= {logoImg} alt="LetMeAsk"/>
            <h2>Criar uma nova sala</h2>
            <form onSubmit={handleCreateRoom}>
              <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value ={newRoom}
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
