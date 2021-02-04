import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRedo } from '@fortawesome/free-solid-svg-icons'
import BoardCell from './BoardCell';

const Board = ({firstTurn}) => {

  const [cells, markCell] = useState(new Array(9).fill(-1));
  const [currTurn, changeCurrTurn] = useState(firstTurn);
  const [winner, setWinner] = useState('');
  const [p1Score, setp1Score] = useState(0);
  const [p2Score, setp2Score] = useState(0);

  const checkForWinner = (currTurn, cells) => {
    
    const winPos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    winPos.forEach(([x,y,z])=>
    {
      if (cells[x] !== -1 && cells[x] === cells[y] && cells[x] === cells[z])
      {
        setWinner(currTurn);
        
        if(currTurn === firstTurn)
        {
          setp1Score(p1Score+1);
        }
        else
        {
          setp2Score(p2Score+1);
        }
      }
    });
  
  }

  const handleCellClick = (cellMark) => {
    const cellsCopy = [...cells];

    if(cellsCopy[cellMark] !== -1 || winner)
    {
      return;
    }

    cellsCopy[cellMark] = currTurn === "zero" ? 0 : 1;

    markCell(cellsCopy);

    checkForWinner(currTurn, cellsCopy);

    if(currTurn === "cross")
    {
      changeCurrTurn("zero");
    }
    else
    {
      changeCurrTurn("cross");
    }
  }

  const handleReset = () => {
    markCell(new Array(9).fill(-1));
    setWinner('');
  }


  return(
  <>
    <div className="score-div">
      <table className="score-table">
        <tr>
          <td className="score-ltd" style={{color: firstTurn === "cross"? '#f5a52d': '#05406d'}}>
            You
          </td >
          <td className="score-ctd">
            <span className="score-span">{p1Score} - {p2Score}</span>
          </td>
          <td className="score-rtd" style={{color: firstTurn === "cross"? '#05406d': '#f5a52d'}}>
            AI
          </td>
        </tr>
      </table>
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