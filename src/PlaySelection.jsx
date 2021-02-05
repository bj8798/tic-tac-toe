import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircleNotch, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const PlaySelection = ({nextHandler, playModeSetter}) => {

  const [mode, setMode] = useState("ai");
  const handleSelection = (playMode) => {
    setMode(playMode);
    playModeSetter(playMode);
  }

  return(
    <div>
      <div className="upper-div">
        <FontAwesomeIcon icon={faTimes}  className="home-icon" color="#F5A52D"/>
        <FontAwesomeIcon icon={faCircleNotch} className="far home-icon" color="#05406d"/>
      </div>
      <div className="lower-div">
        <h3>
          Choose your play mode
        </h3>
        <div>
          <button className={`basic-button ${mode === "ai" ? "blue-button" :""}`} onClick={()=>handleSelection("ai")}>With AI</button>
        </div>
        <div>
          <button className={`basic-button ${mode === "friend" ? "blue-button" :""}`} onClick={()=>handleSelection("friend")}>With Friend</button>
        </div>
      </div>
      <div>
          <button className="next-button" onClick={nextHandler}>
            <FontAwesomeIcon icon={faArrowCircleRight} className="next-icon" color="#05406d"/>
          </button>
      </div>
    </div>
  )
}

export default PlaySelection;