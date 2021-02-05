import {useState} from 'react';
import PlaySelection from './PlaySelection';
import SideSelection from './SideSelection';
import Board from './Board';

function App() {

  const [currWindow, setWindow] = useState(0);
  const [turn, setTurn] = useState("cross");
  const [playMode, setPlayMode] = useState("ai");

  const setNextWindow = () => {
    setWindow(currWindow+1);
  }

  const handleSetTurn = (turn) => {
    setTurn(turn);
  }

  const handleSetPlayMode = (playMode) => {
    setPlayMode(playMode);
  }

  switch(currWindow) {
    case 0:
      return (<PlaySelection nextHandler={setNextWindow} playModeSetter={handleSetPlayMode}/>);
    case 1:
      return (<SideSelection nextHandler={setNextWindow} turnSetter={handleSetTurn}/>);
    case 2:
      return (<Board firstTurn={turn} playMode={playMode}/>);
    default:
      return (<PlaySelection nextHandler={setNextWindow}/>);
  }
}

export default App;
