import React, { useState } from 'react';

// Test data - Do not modify
const pokemon = [
  { id: 1, name: "Pikachu", type: "Electric", power: 82 },
  { id: 2, name: "Charizard", type: "Fire", power: 94 },
  { id: 3, name: "Squirtle", type: "Water", power: 78 },
  { id: 4, name: "Mewtwo", type: "Psychic", power: 99 },
  { id: 5, name: "Bulbasaur", type: "Grass", power: 80 }
];

function App() {
 
  const [selectedType, setSelectedType] = useState('All');

 
  const typeButtons = ['All', 'Electric', 'Fire', 'Water', 'Grass'];

 
  const typeColor = {
    All: 'btn-secondary',
    Electric: 'btn-warning',
    Fire: 'btn-danger',
    Water: 'btn-primary',
    Grass: 'btn-success'
  };

  const getPokemonType = (type) => {
    return type === 'All' ? pokemon.length : pokemon.filter(pokemon => pokemon.type === type).length;// Total number of Pokemon in the array返回总宝可梦数量
  };

  const filteredPokemon = selectedType === 'All' ? pokemon : pokemon.filter(pokemon => pokemon.type === selectedType);// Number of Pokemon matching the type返回符合特定类型的数量

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Pokemon Type Browser</h1>

      
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {typeButtons.map((type, index) => (
          <button
            key={index}
            className={`btn ${typeColor[type] || 'btn-outline-secondary'}`}
            onClick={() => setSelectedType(type)}
          >
            {type} ({getPokemonType(type)})
          </button>
        ))}
      </div>

      <div className="row">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5> 
                <p className="card-text">Type: {pokemon.type}</p> 
                <p className="card-text">Power: {pokemon.power}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;