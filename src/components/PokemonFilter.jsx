import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonFilter = () => {
  const {
    state: { filter },
    filterSet,
    dispatch,
  } = useContext(PokemonContext);
  return (
    <input
      value={filter}
      onChange={(evt) => {
        dispatch({
          type: "SET_FILTER",
          payload: evt.target.value,
        });
      }}
    />
  );
};
export default PokemonFilter;
