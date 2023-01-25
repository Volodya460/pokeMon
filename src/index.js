import './css/styles.css';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const btnEl = document.querySelector('.btn');
const pokemonInfoEl = document.querySelector('.pokemon-info');
document.body.style.backgroundColor = 'yellow';
pokemonInfoEl.style.marginLeft = '900px';

btnEl.addEventListener('click', findPokemonId);

function fetchPokemon() {
  return fetch(`${BASE_URL}pokemon/${pokemonId}/`).then(response => {
    return response.json();
  });
}

function findPokemonId(eve) {
  let pokemonId = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(pokemonId);
  if (!pokemonId) {
    console.log('Error');
  }
  fetchPokemon(pokemonId).then(r => creatPokemonBox(r));
}

function creatPokemon({ name, weight, height, sprites: { front_shiny } } = {}) {
  return `
  
<div class="card">
   <div class="card-img-top">
     <img src="${front_shiny}" alt="${name}">
  </div>   <div class="card-body">
     <h2 class="card-title">Имя: ${name}</h2>
    <p class="card-text">Вес: ${weight}</p>
    <p class="card-text">Рост: ${height}</p>
 `;
}

function creatPokemonBox(pokemon) {
  const data = creatPokemon(pokemon);
  pokemonInfoEl.innerHTML = data;
}
