import {useState} from 'react';
import PlaySelection from './PlaySelection';
import SideSelection from './SideSelection';
import Board from './Board';

function App() {

  const [currWindow, setWindow] = useState(0);
  const [turn, setTurn] = useState("cross");

  const setNextWindow = () => {
    setWindow(currWindow+1);
  }

  const handleSetTurn = (turn) => {
    setTurn(turn);
  }

  switch(currWindow) {
    case 0:
      return (<PlaySelection nextHandler={setNextWindow}/>);
    case 1:
      return (<SideSelection nextHandler={setNextWindow} turnSetter={handleSetTurn}/>);
    case 2:
      return (<Board firstTurn={turn}/>);
    default:
      return (<PlaySelection nextHandler={setNextWindow}/>);
  }
}

export default App;
