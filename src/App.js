import logo from "./logo.svg";
import PokemonRow from "./components/PokemonRow";
import "./App.css";

import { useEffect, useReducer, useState } from "react";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

const pokemonReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      throw new Error("Unknown action type " + action.type);
  }
};

function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: "",
    pokemon: [],
    setSelectedItem: null,
  });
  //FOR USE CONTEXT
  /*  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((response) => response.json())
      .then((data) => pokemonSet(data));
  }, []);*/

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        });
      });
  }, []);

  console.log(state.pokemon);
  if (!state.pokemon) {
    return <div>LOADING DATA</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        filter,
        filterSet,
        pokemon,
        pokemonSet,
        selectedItem,
        setSelectedItem,
        state,
        dispatch,
      }}
    >
      <div
        style={{
          margin: "auto",
          width: 800,
          paddingTop: "1rem",
        }}
      >
        <h1 className="title">Pokemon search</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "70% 30%",
            gridColumnGap: "1rem",
          }}
        >
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          {console.log(selectedItem)}
          <PokemonInfo {...selectedItem} />
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
