!function(){var n=document.querySelector(".btn"),o=document.querySelector(".pokemon-info");function t(){return fetch("".concat("https://pokeapi.co/api/v2/","pokemon/").concat(pokemonId,"/")).then((function(n){return n.json()}))}document.body.style.backgroundColor="yellow",o.style.marginLeft="900px",n.addEventListener("click",(function(n){var c=Math.floor(99*Math.random()+1);console.log(c),c||console.log("Error");t().then((function(n){return t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.name,t=n.weight,c=n.height,e=n.sprites.front_shiny;return'\n  \n<div class="card">\n   <div class="card-img-top">\n     <img src="'.concat(e,'" alt="').concat(o,'">\n  </div>   <div class="card-body">\n     <h2 class="card-title">Имя: ').concat(o,'</h2>\n    <p class="card-text">Вес: ').concat(t,'</p>\n    <p class="card-text">Рост: ').concat(c,"</p>\n ")}(n),void(o.innerHTML=t);var t}))}))}();
//# sourceMappingURL=index.b68e8232.js.map