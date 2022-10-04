import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { useSelector } from "react-redux";



const PokemonInfo = () => {
  // const {
  //   state: { selectedItem },
  // } = useContext(PokemonContext);
  const selectedItem = useSelector((state) => state.selectedItem);

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
