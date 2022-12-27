
import { useState } from 'react';
import "../../pages/Contact/email.css"
import emailjs from "@emailjs/browser";
import Header from '../../components';
import Footer from '../../components/footer';
import linkedin from "../../pages/Contact/img/linkedin.png";
import git from "../../pages/Contact/img/Git.png";
import face from "../../pages/Contact/img/face.png";
import insta from "../../pages/Contact/img/insta.png";
import Fabiano from "../../pages/Contact/img/fabiano1.jpg";


function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("preencha todos os campos");
      return;
    }
    const templetePrams =
    {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_6ky89yx", "template_loo1oxl", templetePrams, "BPRwvcpMtRt0RP2K9").then((response) => {
      console.log("Email enviado com sucesso! Obrigado e responderei o mais rápidio possivel.");
      setName("")
      setEmail("")
      setMessage("")
    }, (err) => {
      console.log("Erro", err)
    })
  }

  return (<div className='containerContact'>
    <Header />
    <div className='conteudoSocial'>
      <div className='social'>
        <h1 className='contactTitle'>Contact.</h1>
        <h4 className='textContact'>Get in touch with me via social media or email.</h4>
        <ul className='ulContact'>
          <a href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/" target="_blank" className='aContact'>
            <li className='liContact'><img className='imgSocial' src={linkedin} /><p className='pSocial'>linkedin</p></li>
          </a>
        <a className='aContact' href="https://github.com/fregnani123" target="_blank">
            <li className='liContact' id='liGit'><img className='imgSocial' src={git} /><p className='pSocial'>GitHub</p></li>
          </a>
        </ul>
        <ul className='ulContact'>
          <a className='aContact' href="https://www.facebook.com/fabiano.fregnani/" target="_blank">
            <li className='liContact'><img className='imgSocial' src={face} /><p className='pSocial'>Facebook</p></li>
          </a>
          <a className='aContact' href="https://www.instagram.com/fabiano_fregnani/" target="_blank">
            <li className='liContact'><img className='imgSocial' src={insta} /><p className='pSocial'>Instagran</p></li>
          </a>
        </ul>
      </div>
      <div className='fabianoDiv'><img className='fabianoContact' src={Fabiano} /></div>
    </div>
    <div className="containerEmail">
      <h1 className="title">Send me an email</h1>
      <form className="form" onSubmit={sendEmail}>
        <p className='pContact'>Name</p>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <p className='pContact'>Email</p>
        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p className='pContact'>Message</p>
        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
    <Footer />
  </div>
  );
}

export default Contact;