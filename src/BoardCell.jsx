import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'


const BoardCell = ({ cellMark }) => {

  switch(cellMark) {
    case -1:
      return (null);
    case 0:
      return (<><FontAwesomeIcon icon={faCircle} className="game-icon" color="#05406d"/></>);
    case 1:
      return (<><FontAwesomeIcon icon={faTimes} className="game-icon" color="#F5A52D"/></>);
    default:
      return (null);
  }
}

export default BoardCell;
