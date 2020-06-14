import React from "react";
import axios from "axios";

class PokeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      newName: "",
    };
    this.toggleInput = this.toggleInput.bind(this);
    this.changeName = this.changeName.bind(this);
    this.updateName = this.updateName.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
  }

  toggleInput(e) {
    this.setState({
      showInput: !this.state.showInput,
    });
  }

  changeName(e) {
    this.setState({
      newName: e.target.value,
    });
  }

  updateName(e) {
    var name = this.state.newName;
    axios
      .put("/pokemon", { name, id: this.props.id })
      .then((result) => {
        this.props.getAllPokemon();
      })
      .catch((err) => {
        throw err;
      });
  }

  deletePokemon(e) {
    axios
      .delete(`/pokemon/${this.props.id}`)
      .then((result) => {
        this.props.getAllPokemon();
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div className="poke-profile">
        <h3 onClick={this.toggleInput}>{this.props.name}</h3>
        <img src={this.props.image} />
        {this.state.showInput && (
          <div>
            <input type="text" onChange={this.changeName}></input>
            <input type="submit" onClick={this.updateName}></input>
            <button onClick={this.deletePokemon}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default PokeProfile;
