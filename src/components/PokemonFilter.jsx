import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { useSelector, useDispatch } from "react-redux";

const PokemonFilter = () => {
  // const {
  //   state: { filter },
  //   filterSet,
  //   dispatch,
  // } = useContext(PokemonContext);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

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
