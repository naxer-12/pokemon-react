import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  //use for use context
  // const { pokemon, filter, setSelectedItem } = useContext(PokemonContext);

  //use for reducer
  const {
    state: { pokemon, filter },
    dispatch,
  } = useContext(PokemonContext);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(filter)
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              onSelect={() => {
                dispatch({
                  type: "SET_SELECTED_POKEMON",
                  payload: pokemon,
                });
              }}
              key={pokemon.id}
            ></PokemonRow>
          ))}
      </tbody>
    </table>
  );
};
export default PokemonTable;
