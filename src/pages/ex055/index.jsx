import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
import Linha from '../../components/linha'
export default function Ex5() {

    const[nota1,setNota1]=useState('')
    const[nota2,setNota2]=useState('')
    const[nota3,setNota3]=useState('')
    const [total,setTotal]=useState('')
    const [resultado,setResultado]=useState('')
    let linha = [
        
            {
                'cor_linha': 'laranja', 
                'numEX':'05',
                'titulo':'media'
             }
    ]


        function Calc(){
            let calculo=(nota1*nota2*nota3)/3

                if(calculo<6){
                    setResultado("false")
                    
                }

                else if(calculo >=6){
                    setResultado("true")
                }



            setTotal(calculo)
            
        }
 
    return (
        
        <main>
        <Header/> 
        

        
                     
           <body>
            
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

<div className='sub'>
                    <h1>Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</h1>

                    </div>

                        <div className='bloco'>


                        <h1>Nota1</h1>
                    
                    <input type="number" value={nota1} onChange={e => setNota1(e.target.value)} placeholder="digite aqui" />   
                        
                        <h1>Nota2</h1>
                    
                    
                    <input type="number" value={nota2} onChange={e => setNota2(e.target.value)} placeholder="digite aqui" />
                        <h1>Nota3</h1>
                        
                       
                        <input type="number" value={nota3} onChange={e => setNota3(e.target.value)} placeholder="digite aqui" />
                        <button onClick={Calc}>EXECUTAR</button>
                            <p>Média é {total} <br />
                                o aluno passou? {resultado}
                            </p>
                            

                       

                       
                       
                       
                       
                        </div>






           </body>
        


          
        </main>
    )



}
