import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [nome, setNome] = useState('');

  const pokeNome = (nome) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setPokemon(json);
      })
      .catch(err => console.error(err));
  }

  const handleBusca = () => {
    pokeNome(nome);
  }

  const tipo = pokemon.types && pokemon.types.length > 0 ? pokemon.types.map(type => type.type.name).join(', ') : 'Nenhum'
 
  const cor = () => {
    if(pokemon.types && pokemon.types.length > 0) {
      const primeiroTipo = pokemon.types[0].type.name;
      if(primeiroTipo === "normal") {
        return { color: 'gray' }; 
      } else if(primeiroTipo === "electric") {
        return { color: 'yellow' }; 
      } else if(primeiroTipo === "fire") {
        return { color: 'red' }; 
      } else if(primeiroTipo === "grass") {
        return { color: 'green' }; 
      } else if(primeiroTipo === "water") {
        return { color: 'blue' }; 
      } else if(primeiroTipo === "ghost") {
        return { color: 'purple' }; 
      } else if(primeiroTipo === "bug") {
        return { color: 'darkgreen' }; 
      } else if(primeiroTipo === "rock") {
        return { color: 'brown' }; 
      } else if(primeiroTipo === "psychic") {
        return { color: 'rgb(231, 64, 92)' }; 
      } else if(primeiroTipo === "ground") {
        return { color: 'rgb(66, 22, 22)'};
      } else if(primeiroTipo === "dragon") {
        return { color: 'darkorange'};
      } else if(primeiroTipo === "poison") {
        return { color: 'violet'};
      }
    }
    return {}; // Retorna um objeto vazio se não houver um tipo especificado.
  };
  
  
  return (
    <div className='container'>
      <main>
      <div className='info' style={cor()}>
        <img src={pokemon.sprites?.versions['generation-v']['black-white'].animated.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites?.versions['generation-v']['black-white'].animated.back_default} alt={pokemon.name} />
        <div>Nome: {pokemon.name}</div>
        <div>Nº  {pokemon.id}</div>
        <div>Peso: {pokemon.weight / 10}KG</div>
        <div>Altura: {pokemon.height / 10}m</div>
        <div>Tipo: {tipo}</div>
      </div>
  
        <div className='busca'>
          <h4>Busca de Pokémon</h4>
          <input
            placeholder='...'
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button onClick={handleBusca}>Buscar</button>
        </div>
      </main>
    </div>
  );
}

export default App;
