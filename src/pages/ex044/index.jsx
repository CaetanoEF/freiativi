import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
import Linha from '../../components/linha'
export default function Ex4() {

    const  [tabuada, setTabuada] = useState(0)
    const [array, setArray] = useState([])

    let linhas = [
        {
            'cor_linha': 'roxo', 
            'numEX':'4',
            'titulo':' exercício do tabuada'
         }

         
]   


    function calcTabuada ( ) {

        let tabu = []

        for (let i = 1; i <=10; i++ ) {
            tabu.push(`${tabuada} x ${i} = ${tabuada * i}` );
        }

        setArray(tabu)
    }
    return (
        <main>
          
          <Header/>


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
                    <p>Tabuada </p>
                </div>

                <div className="caixa1">
                    <div className="login2" id='caixa3'>
                        <div className='login1'>
                            <div className='seja'>
                                <p>Digite a tabuada</p>
                                <input type="number" placeholder='0' id="caixa" onChange={e => setTabuada(e.target.value)} />
                            </div>
                            
                            <button onClick={calcTabuada} >Executar</button>
                        </div>
                       
                    </div>




                </div>

                <div className='Resultado1'>
               
                        {array.map((resultado, index) => (
                            <h3 key={index} className='resultado'>
                                {resultado}
                            </h3>
                        ))}
               
                

                </div>
            </div>

        </main>
    )



}
