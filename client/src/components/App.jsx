import React from "react";
import axios from "axios";
import PokeProfile from "./PokeProfile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      currType: "",
    };
    this.filterPokemon = this.filterPokemon.bind(this);
    // this.getType = this.getType.bind(this);
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  componentDidMount() {
    axios.get("/pokemon").then((result) => {
      console.log("result-->", result);
      this.setState({
        pokemon: result.data,
      });
    });
  }

  filterPokemon(e) {
    console.log("new type-->", e.target.value);
    var type = e.target.value;
    axios.get(`/pokemon/${type}`).then((result) => {
      this.setState({
        currType: type,
        pokemon: result.data,
      });
    });
  }

  getAllPokemon() {
    axios.get("/pokemon").then((result) => {
      console.log("result-->", result);
      this.setState({
        pokemon: result.data,
      });
    });
  }

  // getType(type){
  //   axios.get(`/pokemon/${type}`)
  //   .then((result) => {
  //     this.setState({
  //       pokemon: result.data
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button onClick={this.getAllPokemon}>Show All</button>
          <select id="type" onChange={this.filterPokemon}>
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
          </select>
          <button>INSERT</button>
          {/* <div>
        <h3>Bulbasaur</h3>
        <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en"/>
      </div>
      <div>
        <h3>Ivysaur</h3>
        <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en"/>
      </div>
      <div>
        <h3>Venusaur</h3>
        <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en"/>
      </div> */}
          {this.state.pokemon.map((pokemon) => (
            <PokeProfile
              id={pokemon.id}
              name={pokemon.pokeName}
              type={pokemon.pokeType}
              image={pokemon.pokeImg}
              getAllPokemon={this.getAllPokemon}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
