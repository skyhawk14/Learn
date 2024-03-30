import UseStateCustomHook from "./Pollyfills/UseStateCustomHook";
import SimpleProgressBar from "./ProgressBar/simple-progressbar";
import Board from "./TrelloBoard/Board";
import Analog from "./clocks/Analog";
import SelectableGrid from "./selectable-grid/selectable-grid";

function App() {
  // return <Analog />;
  // return (<SimpleProgressBar />)
  // return <UseStateCustomHook />;
  // return <Board />;
  return <SelectableGrid />
}

export default App;
