console.info('%cWelcome to the CSS flexbox demo! Feel free to check out the github page here to see the code: https://github.com/richwblake/css_demo. You can fork and clone and mess with the stylesheet to understand flexbox even better :)\n\nhappy hacking!' , 'color:lightblue');
const [wrapToggleBtn, changeDirectionBtn, gapBtn, justifyBtn] = document.getElementsByClassName('cc-btn');
const flexboxdiv = document.getElementById('flex-container');
const justifyContentValues = ['flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'flex-start'];
let currentJustifyValueIndex = 0;

const addListenersToCCButtons = () => {
  wrapToggleBtn.addEventListener('click', () => {
    const wrapDescription = document.getElementsByClassName('description')[0];
    if (flexboxdiv.style.flexWrap === 'nowrap') {
      flexboxdiv.style.flexWrap = 'wrap';
      wrapDescription.textContent = `Value for wrap attribute: ${flexboxdiv.style.flexWrap}`;
    } else {
      flexboxdiv.style.flexWrap = 'nowrap';
      wrapDescription.textContent = `Value for wrap attribute: ${flexboxdiv.style.flexWrap}`;
    }
  });

  changeDirectionBtn.addEventListener('click', () => {
    const wrapDescription = document.getElementsByClassName('description')[1];
    if (flexboxdiv.style.flexDirection === 'row-reverse') {
      flexboxdiv.style.flexDirection = 'row';
      wrapDescription.textContent = `Value for flex-direction attribute: ${flexboxdiv.style.flexDirection}`;
    } else {
      flexboxdiv.style.flexDirection = 'row-reverse';
      wrapDescription.textContent = `Value for flex-direction attribute: ${flexboxdiv.style.flexDirection}`;
    }
  });

  gapBtn.addEventListener('click', () => {
    const wrapDescription = document.getElementsByClassName('description')[2];
    if (flexboxdiv.style.gap === '0px') {
      flexboxdiv.style.gap = '50px';
      wrapDescription.textContent = `There is ${flexboxdiv.style.gap} between items`;
    } else {
      flexboxdiv.style.gap = '0px';
      wrapDescription.textContent = `There is ${flexboxdiv.style.gap} between items`;
    }
  });

  justifyBtn.addEventListener('click', () => {
    const wrapDescription = document.getElementsByClassName('description')[3];
    if (currentJustifyValueIndex < 6) {
      flexboxdiv.style.justifyContent = justifyContentValues[currentJustifyValueIndex];
    } else {
      currentJustifyValueIndex = 0;
      flexboxdiv.style.justifyContent = justifyContentValues[currentJustifyValueIndex];
    }
    wrapDescription.textContent = `Value for justify-content: ${justifyContentValues[currentJustifyValueIndex]}`;
    currentJustifyValueIndex++;
  });
};

const fetchPokemon = async () => {
  let pokemonArray = [];
  for (let i = 1; i < 18; i++) {
    const randomIndex = Math.floor(Math.random() * 499) + 1;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`);
    const data = await resp.json();

    const pokemon = {
      name: `#${i} ${data.name[0].toUpperCase() + data.name.slice(1)}`,
      sprite: data.sprites.front_default,
      types: data.types.map(type => type.type.name)
    };
    pokemonArray.push(pokemon);
  }
  addPokemonToDom(pokemonArray);
};

const addPokemonToDom = groupOfPokemon => {
  const flexContainer = document.getElementById('flex-container');
  for (let pokemon of groupOfPokemon) {
    const pkDiv = document.createElement('div');
    pkDiv.className = 'item';
    const image = document.createElement('img');
    image.src = pokemon.sprite;
    const name = document.createElement('h5');
    name.textContent = pokemon.name;
    name.style.margin = '0';
    pkDiv.appendChild(image);
    pkDiv.appendChild(name);
    flexContainer.appendChild(pkDiv);
  }
};

addListenersToCCButtons();
fetchPokemon();