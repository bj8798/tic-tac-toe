import {useState} from 'react';
import PlaySelection from './PlaySelection';
import SideSelection from './SideSelection';
import Board from './Board';

function App() {

  const [currWindow, setWindow] = useState(0);

  const setNextWindow = () => {
    setWindow(currWindow+1);
  }

  switch(currWindow) {
    case 0:
      return (<PlaySelection nextHandler={setNextWindow}/>);
    case 1:
      return (<SideSelection nextHandler={setNextWindow}/>);
    case 2:
      return (<Board/>);
    default:
      return (<PlaySelection nextHandler={setNextWindow}/>);
  }
}

export default App;
