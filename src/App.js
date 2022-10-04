import "./App.css";

import { useEffect, useReducer, useState } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

const pokemonReducer = (
  state = {
    filter: "",
    pokemon: [],
    selectedItem: null,
  },
  action
) => {
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
      return state;
  }
};

const store = createStore(pokemonReducer);
function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
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

  console.log(pokemon);
  if (!pokemon) {
    return <div>LOADING DATA</div>;
  }

  return (
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

        <PokemonInfo />
      </div>
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
