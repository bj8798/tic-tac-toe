import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const PlaySelection = ({nextHandler}) => {


  return(
    <div>
      <div className="upper-div">
        <FontAwesomeIcon icon={faTimes} className="home-icon" color="#F5A52D"/>
        <FontAwesomeIcon icon={faCircle} className="home-icon" color="#05406d"/>
      </div>
      <div className="lower-div">
        <h3>
          Choose your play mode
        </h3>
        <div>
          <button className="basic-button">With AI</button>
        </div>
        <div>
          <button className="basic-button">With Friend</button>
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