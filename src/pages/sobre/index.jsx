import { Link } from 'react-router-dom'
import './index.scss'

export default function Sobre () {
    return(

        <div className="main">
        <header>
                <div className="Logo">
                <img className="frei" src="/frei.png" alt="frei" />
                <h2>React FreiS</h2>
                </div>
                <div className="Sobre">
                    <Link to='/inicial'>Inicial</Link>
                    <a href="">Sobre</a>
                </div>

        </header>

        <div className="text">

            <h2>Sobre</h2>

            <div className="text2">
                <p>Bem-vindo a nossa plataforma de exercicios! Aqui, nosso objetivo é ajudar vocé a aprimorar suas habilidades em Node.js e l6gica de programagao de forma pratica e envolvente. Acreditamos que a prética constante é essencial para o aprendizado e o aperfeicoamento em tecnologia. Nossa missdo é fornecer um ambiente onde vocé possa praticar e testar seus conhecimentos em Node.js e l6gica de programagéo, permitindo que vocé avance no seu proprio ritmo e de acordo com suas necessidades.</p>

                <div className="pp">
                <p> Seja qual for seu nivel de experiéncia, nossa plataforma é o lugar ideal para vocé crescer e desenvolver suas habilidades.</p>
                <p> Estamos ansiosos para ver seu progresso e sucesso!</p>
                </div>  
                <img className="frei" src="/frei.png" alt="frei" />
            </div>
        </div>
        </div>
        
    )
}