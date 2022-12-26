import { useState } from 'react';
import '../components/projetoEmail/email.css';

function Email() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function enviar(e){
   e.preventDefault();
    alert("testes")
  }
  return (
    <div className="containerEmail">

      <h1 className="title">Send me an email</h1>

      <form className="form" onSubmit={enviar}>
        <p className='textP'>Name</p>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <p className='textP'>Email</p>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p className='textP'>Message</p>
        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Send" />
      </form>

    </div>
  );
}

export default Email;