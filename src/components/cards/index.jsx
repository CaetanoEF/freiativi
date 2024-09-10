import './index.scss' 
import { Link } from 'react-router-dom';

export default function Card( {link_card, titulo, cor_card, numEX}) {

    return (
        <div className="card">
            <div className={`bola ${cor_card}`}></div>

            

            <h6>{titulo}</h6>
            <Link to={link_card} className='a'>Exercicio {numEX}</Link>
        </div>
    );
}