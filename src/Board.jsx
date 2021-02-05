import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRedo } from '@fortawesome/free-solid-svg-icons'
import BoardCell from './BoardCell';

const Board = ({firstTurn, playMode}) => {

  const [cells, markCell] = useState(new Array(9).fill(-1));
  const [currTurn, changeCurrTurn] = useState(firstTurn);
  const [winner, setWinner] = useState('');
  const [p1Score, setp1Score] = useState(0);
  const [p2Score, setp2Score] = useState(0);

  useEffect(() => {
    if(currTurn !== firstTurn && playMode === "ai")
    {
      setTimeout(playNext, 1000);
    }
  }, [currTurn]);

  const oppMark = firstTurn === "cross" ? 1 : 0;
  const winPos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  const checkForWinner = (turn, cellsCopy) => {

    winPos.forEach(([x,y,z])=>
    {
      if (cellsCopy[x] !== -1 && cellsCopy[x] === cellsCopy[y] && cellsCopy[x] === cellsCopy[z])
      {
        setWinner(turn);
        
        if(turn === firstTurn)
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
  
  const playMove = (move, cells) => {

    const cellsCopy = [...cells];
    cellsCopy[move] = currTurn === "zero" ? 0 : 1;

    markCell(cellsCopy);
    checkForWinner(currTurn, cellsCopy);
  }

  const playRandom = (cells) => {

    const availableMoves = [];
    cells.forEach((val, idx) => {
      if(val === -1){
        availableMoves.push(idx);
      }
    })

    console.log(availableMoves);
    const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];

    playMove(move, cells);
  }

  const playNext = () => {

    if(winner)
    {
      return;
    }

    let played = false;
    for(let i=0; i<winPos.length; i++)
    {  
      const x = winPos[i][0];
      const y = winPos[i][1];
      const z = winPos[i][2];
      
      if(cells[x] !== -1 && cells[x] === cells[y] && cells[x] === oppMark && cells[z] === -1)
      {
        playMove(z, cells);
        played = true;
        break;
      }
      else if(cells[y] !== -1 && cells[y] === cells[z] && cells[y] === oppMark && cells[x] === -1)
      {
        playMove(x, cells);
        played = true;
        break;
      }
      else if(cells[x] !== -1 && cells[x] === cells[z] && cells[x] === oppMark && cells[y] === -1)
      {
        playMove(y, cells);
        played = true;
        break;
      }
    }

    if(!played)
    {
      playRandom(cells);
    }
    changeTurn();
  }

  const changeTurn = () => {
    if(currTurn === "cross")
    {
      changeCurrTurn("zero");
    }
    else
    {
      changeCurrTurn("cross");
    }
  }

  const handleCellClick = (cellMark) => {

    const cellsCopy = [...cells];

    if(cellsCopy[cellMark] !== -1 || winner || ( playMode === "ai" && currTurn !== firstTurn))
    {
      return;
    }

    cellsCopy[cellMark] = currTurn === "zero" ? 0 : 1;

    markCell(cellsCopy);

    checkForWinner(currTurn, cellsCopy);
    changeTurn();
  }

  const handleReset = () => {
    markCell(new Array(9).fill(-1));
    if(playMode === "ai")
    {
      changeCurrTurn(firstTurn);
    }
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
            {playMode === "ai"? "AI": "Bob"}
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