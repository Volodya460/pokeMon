const o=document.querySelector(".btn"),n=document.querySelector(".pokemon-info");document.body.style.backgroundColor="yellow",n.style.marginLeft="900px",o.addEventListener("click",(function(o){pokemonId=Math.floor(99*Math.random()+1),console.log(pokemonId),pokemonId||console.log("Error");(pokemonId,fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then((o=>o.json()))).then((o=>function(o){const e=function({name:o,weight:n,height:e,sprites:{front_shiny:t}}={}){return`\n  \n<div class="card">\n   <div class="card-img-top">\n     <img src="${t}" alt="${o}">\n  </div>   <div class="card-body">\n     <h2 class="card-title">Имя: ${o}</h2>\n    <p class="card-text">Вес: ${n}</p>\n    <p class="card-text">Рост: ${e}</p>\n `}(o);n.innerHTML=e}(o)))}));
//# sourceMappingURL=index.417d5c2b.js.map
