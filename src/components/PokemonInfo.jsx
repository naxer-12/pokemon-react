import { useContext } from "react";
import PokemonContext from "../PokemonContext";
const PokemonInfo = () => {
  const {
    state: { selectedItem },
  } = useContext(PokemonContext);

  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <></>
  );
};

export default PokemonInfo;
