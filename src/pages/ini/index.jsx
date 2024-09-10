import Card from "../../components/cards"
import "./index.scss"
import { Link } from "react-router-dom"
import Header from "../../components/header"

export default function Inicial () {

    let cardData = [

         
        {
            'link_card': '/ex2',
            'titulo': 'gramas',
            'numEX': '02',
            'cor_card': 'azul'
        },

      

        {
            'link_card': '/ex4',
            'titulo': 'tabuada',
            'numEX': '04',
            'cor_card': 'roxo'
        },
        {
            'link_card': '/ex5',
            'titulo': 'media',
            'numEX': '05',
            'cor_card': 'laranja'
        },
        {
            'link_card': '/ex6',
            'titulo': 'leitura de livro',
            'numEX': '06',
            'cor_card': 'cinza'
        },
        {
            'link_card': '/ex1',
            'titulo': 'Imc com histórico',
            'numEX': '10',
            'cor_card': 'azul'
        },

    
       ]

    return (
        <div>
           <Header/>

            <div className="cards">
                <h1>Escolha seu treino...</h1>

                <div className="cardz">

                {cardData.map((item, index) => (

                    <div className="row">
                        <Card 
                 
                 key={index}
                            link_card={item.link_card}
                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_card={item.cor_card}
                            
                        />
                </div>

      
                 
                ))}

                   
                    </div> 
                 

                
            </div>
        </div>
    )
}