import { useState } from "react";
import Header from '../../components/header'
import Linha from '../../components/linha'
import './index.scss'
import { Link } from 'react-router-dom'
export default function Ex6(){
    const[nota1,setNota1]=useState('')
    const[nota2,setNota2]=useState('')
    const[nota3,setNota3]=useState('')
   const[total,setTotal]=useState('')
    function Calc(){
        let calculo=(nota2*nota3/3600).toFixed(2)
    
            setTotal(calculo)
    }
    let linha = [
        
        {
            'cor_linha': 'cinza', 
            'numEX':'06',
            'titulo':'leitura de livro'
         }
         ]
    return(
        <main>
         <body>
        <Header/> 
        
            
                {linha.map((item, index) => (

                    <div className="row1">
                        <Linha
                            key={index}
                          
                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_linha={item.cor_linha}

                        />
                    </div>



                ))}
            <div className="tit">
                    
            <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página</p>

            
            </div>
        <div className="blco">
            <h1>Nome do livro</h1>
                    
                    <input type="text" value={nota1} onChange={e => setNota1(e.target.value)} placeholder="digite aqui" />   
                        
                        <h1>quantidade de pags</h1>
                    
                    
                    <input type="number" value={nota2} onChange={e => setNota2(e.target.value)} placeholder="digite aqui" />
                        <h1>Nota3</h1>
                        
                       
                        <input type="tempo em segundos em cada pagina" value={nota3} onChange={e => setNota3(e.target.value)} placeholder="digite aqui" />
                        <button onClick={Calc}>EXECUTAR</button>
            
                    <p> Você lerá {nota1} em {total} segundos</p>
                    </div>

        </body>




        </main>

    )
}