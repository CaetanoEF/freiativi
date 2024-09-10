import './index.scss'

export default function Linha({cor_linha, numEX, titulo}) {
    return(
    <div className="mae">
        <div className="volte">
        <a href="">◄</a>
        <h1>{`Exercicio ${numEX} - ${titulo}`}</h1>
        
        </div>
        <div className='hr'><hr  className={`hr ${cor_linha}`}/></div>
    </div>
    )
}

