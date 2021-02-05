import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowCircleRight, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const SideSelection = ({nextHandler, turnSetter}) => {

  const handleSelection = (e) => {
    turnSetter(e.target.value);
  }

  return(
    <div>
      <div className="upper-div">
        <h3>
          Pick your side
        </h3>
      </div>
      <div className="lower-div">
        <table className="selection-table">
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon icon={faTimes} className="home-icon" color="#F5A52D"/>
              </td>
              <td>
                <FontAwesomeIcon icon={faCircleNotch} className="home-icon" color="#05406d"/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="turn" value="cross" checked onChange={handleSelection} />
              </td>
              <td>
                <input type="radio" name="turn" value="zero" onChange={handleSelection}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
          <button className="next-button" onClick={nextHandler}>
            <FontAwesomeIcon icon={faArrowCircleRight} className="next-icon" color="#05406d"/>
          </button>
      </div>
    </div>
  )
}

export default SideSelection;