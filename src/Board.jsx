import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRedo } from '@fortawesome/free-solid-svg-icons'
import BoardCell from './BoardCell';

const Board = () => {

  const [cells, markCell] = useState(new Array(9).fill(-1));
  const [currTurn, changeCurrTurn] = useState(0);

  const handleCellClick = (cellMark) => {
    const cellsCopy = [...cells];

    if(cellsCopy[cellMark] !== -1)
    {
      return;
    }

    cellsCopy[cellMark] = currTurn;

    if(currTurn === 0)
    {
      changeCurrTurn(1);
    }
    else
    {
      changeCurrTurn(0);
    }

    markCell(cellsCopy);  
  }

  const handleReset = () => {
    markCell(new Array(9).fill(-1));
  }


  return(
  <>
    <div className="score-div">
      <div>You</div>
      <div className="score-span">0 - 0</div>
      <div>AI</div>
    </div>
    <div className="board-div">
      <table className="tic-table">
        <tr>
          <td className="cell" onClick={()=>handleCellClick(0)}><BoardCell cellMark={cells[0]}/></td>
          <td className="vert cell" onClick={()=>handleCellClick(1)}><BoardCell cellMark={cells[1]}/></td>
          <td className="cell" onClick={()=>handleCellClick(2)}><BoardCell cellMark={cells[2]}/></td>
        </tr>
        <tr>
          <td className="hori" onClick={()=>handleCellClick(3)}><BoardCell cellMark={cells[3]}/></td>
          <td className="vert hori cell" onClick={()=>handleCellClick(4)}><BoardCell cellMark={cells[4]}/></td>
          <td className="hori" onClick={()=>handleCellClick(5)}><BoardCell cellMark={cells[5]}/></td>
        </tr>
        <tr>
          <td className="cell" onClick={()=>handleCellClick(6)}><BoardCell cellMark={cells[6]}/></td>
          <td className="vert cell" onClick={()=>handleCellClick(7)}><BoardCell cellMark={cells[7]}/></td>
          <td className="cell" onClick={()=>handleCellClick(8)}><BoardCell cellMark={cells[8]}/></td>
        </tr>
      </table>
    </div>
    <div>
      <button className="next-button" onClick={handleReset}>
        <FontAwesomeIcon icon={faRedo} className="next-icon" color="#05406d"/>
      </button>
    </div>
  </>  
  )
}

export default Board;