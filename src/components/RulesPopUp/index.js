import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import {
  RulesImg,
  CloseButton,
  RulesContainer,
  RulesButton,
} from './StyledComponents'

// import './index.css'

const RulesPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <RulesButton type="button" className="trigger-button">
          Rules
        </RulesButton>
      }
    >
      {close => (
        <>
          <RulesContainer>
            <CloseButton
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <RiCloseLine />
            </CloseButton>

            <RulesImg
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesContainer>
        </>
      )}
    </Popup>
  </div>
)
export default RulesPopUp
