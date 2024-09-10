import { useState } from 'react'
import './index.scss'
import { Value } from 'sass'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
import Linha from '../../components/linha'



export default function Ex1() {
    const [input, setInput] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [criar, setCriar] = useState([]);
    const [nome, setNome] = useState('');
  
  
    const limpar = (index) => {
      const apagar= criar.filter((_,i) => i !== index)
      setCriar(apagar)
  
    }
  
    const Imc = () => {
      const alturaNum = parseFloat(altura); // Convertendo altura para número
      const pesoNum = parseFloat(peso);     // Convertendo peso para número
  
      if (!alturaNum || !pesoNum) {
        setInput('Por favor, insira valores válidos');
        return;
      }
  
      let imc = pesoNum / (alturaNum ** 2); // Corrigindo o cálculo do IMC
  
      if (imc < 18.5) {
        setInput('abaixo do peso');
      } else if (imc >= 18.5 && imc < 25) {
        setInput('normal');
      } else if (imc >= 25 && imc < 30) {
        setInput('gordinho');
      } else if (imc >= 30 && imc < 35) {
        setInput('obeso');
      } else if (imc >= 35) {
        setInput('thais carla');
      }
  
      // Adiciona os dados à lista
      setCriar([...criar, {nome:nome, peso: peso, altura: altura, ideal: input }]);
    };

    let linha = [
        
        {
            'cor_linha': 'laranja', 
            'numEX':'05',
            'titulo':'media'
         }
]
    

    

    return (
        <main>
       <div className="mae">
       
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
<p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação</p>
</div>  
        <div className="App">

        <input
                type="text"value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome"
              />
              <input type="text"  value={peso}  onChange={(e) => setPeso(e.target.value)}  placeholder="Peso (kg)"
              />
              <input type="text"value={altura}onChange={(e) => setAltura(e.target.value)} placeholder="Altura (m)"
              />
              <button onClick={Imc}>Calcular IMC</button>
        
              {criar.map((item, index) => (
                <div className="joaodocapa" key={index}>
        
                  <h2>{item.nome}  Você está {item.ideal}</h2>
                  <p>Peso: {item.peso} kg</p>
                  <p>Altura: {item.altura} m</p>
        
                  <button onClick={e => limpar(index)}>apagar</button>
                </div>

              ))}
            </div>
            </div>
            </main>
            
          );
        }
    