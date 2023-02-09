import './style.css';

import { useState } from 'react';
import logo from '../assets/logo.png';
import sol from '../assets/sol.png';
import lua from '../assets/lua.png';
import wildrift from '../assets/video/wildrift.mp4';


export default function LandingPage() {

  const [ ehTemaEscuro, setEhTemaEscuro ] = useState(false);

  const alterarTema = () => {
    setEhTemaEscuro(!ehTemaEscuro);
  }

  return (
    <div className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>

      <header>
        <div className="limitar-secao">
          <img className="logomarca" src={logo} alt="logomarca"/>
          <button onClick={alterarTema} className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
            <img className="btn-icone" src={ ehTemaEscuro ? sol : lua } alt="icone"/>
            {ehTemaEscuro ? `Light` : `Dark`}
          </button>
        </div>
      </header>

      <section className="secao-banner"></section>

      <section className="secao-texto limitar-secao">
        <div className="limitar-secao">
          <h1>BOAS-VINDAS AO
WILD RIFT</h1>
          <p className="primeiro-paragrafo">
            COMPETIÇÃO ACIRRADA


Junte-se aos seus amigos e teste suas habilidades em combates MOBA 5v5. Toda a competição de alto escalão que você sempre quis, feita especialmente para console e dispositivos móveis com controles reformulados e partidas otimizadas.
          </p>
          <p className="segundo-paragrafo">
            CAMPEÕES REAIS DO LOL


Junte-se aos seus amigos e teste suas habilidades em combates MOBA 5v5. Toda a competição de alto escalão que você sempre quis, feita especialmente para console e dispositivos móveis com controles reformulados e partidas otimizadas.
Expulse as trevas com a Centelha Final de Lux ou siga os ventos com o Último Suspiro de Yasuo. Jogue com os Campeões do LoL que você ama quando quiser!
          </p>
          <p className='assinatura'>O MUNDO
DE WILD RIFT</p>
	<video autoPlay loop muted className='videoplay'>
	<source src={wildrift} type='video/mp4' />
	</video>
        </div>
      </section>
    </div>
  );
}