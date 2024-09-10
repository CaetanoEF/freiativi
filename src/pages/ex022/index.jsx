import { useState } from 'react'
import './index.scss'
import { Value } from 'sass'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
import Linha from '../../components/linha'

export default function Ex2() {

    const [gramas, setGramas] = useState(0)

    const [total, setTotal] = useState(0)

    function Pedido2() {


        let resultado = gramas / 1000

        setTotal(resultado)

    }

    let linhas = [
        {
            'cor_linha': 'azul',
            'numEX': '2',
            'titulo': ' exercício do gramas'
        }


    ]


    return (
        <main>

            <Header />


            <div className="main">


                {linhas.map((item, index) => (

                    <div className="row1">
                        <Linha
                            key={index}

                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_linha={item.cor_linha}

                        />
                    </div>



                ))}

                <div className="txt">
                    <p>Implementar um programa em Javascript para converter kilos em gramas.</p>
                </div>

                <div className="caixa">
                    <div className="login">
                        <p>informe o em gramas</p>
                        <input type="number" placeholder='0' id="caixa" onChange={e => setGramas(e.target.value)} />


                        <button onClick={Pedido2} >Executar</button>
                    </div>

                    <div className='Resultado'>
                        <h2>O resultado é {total} KG </h2>
                    </div>
                </div>
            </div>

        </main>
    )
}