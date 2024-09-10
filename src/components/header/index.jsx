import { Link } from "react-router-dom"
import './index.scss'
export default function Header () {
    return (
        <header>
        <div className="Logo">
            <img className="frei" src="/frei.png" alt="frei" />
            <h2>React FreiS</h2>
        </div>
        <div className="Sobre">
            <Link to='/inicial'>Inicial</Link>
            <Link to='/sobre'>Sobre</Link>
        </div>

    </header>
    )
}