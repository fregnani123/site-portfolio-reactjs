import React from "react";
import Header from "../../components/header";
import "../About/about.css";
import fundo from "../About/img/fabiano.png";
import engrenagens from "../About/img/Engrenagens.m4v";
import imgAbout from "../About/img/about.jpg";
import gif from "../About/img/gifs.gif";
import Footer from "../../components/footer";
import iconHtml from "../About/img/html.png";
import iconCss from "../About/img/css.png";
import iconJs from "../About/img/js.png";
import iconReact from "../About/img/react.png";
import iconSkill from "../About/img/skill.jpg";


function About() {
    return (
        <div className="principal">
        <video className="engrenagens" src={engrenagens} autoPlay loop muted type="mp4"/>
       <Header/>
       <body>
         <ul className="ulAbout">
           <li className="liAbout">
                 <p className="pAbout"><img className="gif" src={gif}/><img className="imgAbout" src={imgAbout}/></p>
              <p className="ptext">Olá! Sou um entusiasta da programação com dois anos de estudos ativos, em busca de oportunidades como desenvolvedor júnior para aplicar e expandir meus conhecimentos. Explore alguns dos meus projetos práticos e desafiadores aqui neste site. Meu comprometimento com o desenvolvimento pode ser visto no meu perfil do GitHub, o qual você pode conferir através dos links no cabeçalho do site.

                Atualmente cursando o 3º semestre de Análise e Desenvolvimento de Sistemas, continuo a investir em meu crescimento profissional através de cursos e atualizações constantes. Apesar de estar no início da minha jornada acadêmica, estou entusiasmado para contribuir e aprender em um ambiente profissional.

                Se sua empresa está em busca de um desenvolvedor júnior apaixonado por programação, comprometido com aprendizado contínuo e pronto para enfrentar desafios, ficaria grato pela oportunidade de integrar sua equipe. Estou animado para discutir como posso agregar valor ao seu time.</p>
            </li>
            <li className="liRoxo">
              <h3>Full-Stack development</h3>
              <ul className="gifUl">
              <li><img className="iconFerramentas" src={gif}/></li>
              <li><img className="iconFerramentas" src={iconSkill}/></li>
              <li><img className="iconFerramentas" src={gif}/></li>
            </ul>
            <ul className="gifUl">
              <li><img className="iconFerramentas" src={iconHtml}/></li>
              <li><img className="iconFerramentas" src={gif}/></li>
              <li><img className="iconFerramentas" src={iconCss}/></li>
              </ul>
              <ul className="gifUl">
              <li><img className="iconFerramentas" src={iconJs}/></li><li><img className="iconFerramentas" src={gif}/></li>
              <li><img className="iconFerramentas" src={iconReact}/></li>
            </ul>
            </li>
         </ul> 
         </body>
         {/* <footer id="footerAbout"><p className="copy">© 2024 Fabiano Fregnani - Front-End Developer.</p></footer> */}
       </div>
    )
}
export default About;