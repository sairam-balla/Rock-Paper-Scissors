import {Component} from 'react'
import RulesPopUp from '../RulesPopUp'
import ScoreCard from '../ScoreCard'
import {
  GameCard,
  CardImg,
  BgContainer,
  RowContainer,
  ColumnContainer,
  GameCards,
  RulesButtonContainer,
  PlayAgainButton,
  CardNames,
} from './StyledComponents'

const initialState = {
  score: 0,
  systemSelection: '',
  playerSelection: '',
  result: '',
}

class RockPaperScissors extends Component {
  state = {...initialState}

  onSystemSelection = playerSelection => {
    const randomIndex = Math.floor(Math.random() * 3)
    const {choicesList} = this.props
    const systemSelection = choicesList[randomIndex].id
    this.setState({systemSelection, playerSelection})
  }

  onWin = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
      result: 'YOU WON',
    }))
  }

  onLose = () => {
    this.setState(prevState => ({
      score: prevState.score - 1,
      result: 'YOU LOSE',
    }))
  }

  onDraw = () => {
    this.setState({result: 'IT IS DRAW'})
  }

  onSelectRock = () => {
    const {systemSelection} = this.state
    switch (systemSelection) {
      case 'ROCK':
        return this.onDraw()

      case 'PAPER':
        return this.onLose()

      case 'SCISSORS':
        return this.onWin()

      default:
        return null
    }
  }

  onSelectPaper = () => {
    const {systemSelection} = this.state
    switch (systemSelection) {
      case 'PAPER':
        return this.onDraw()

      case 'SCISSORS':
        return this.onLose()

      case 'ROCK':
        return this.onWin()

      default:
        return null
    }
  }

  onSelectScissors = () => {
    const {systemSelection} = this.state
    switch (systemSelection) {
      case 'SCISSORS':
        return this.onDraw()

      case 'ROCK':
        return this.onLose()

      case 'PAPER':
        return this.onWin()

      default:
        return null
    }
  }

  onSelectItem = async event => {
    await this.onSystemSelection(event.target.alt)
    switch (event.target.alt) {
      case 'ROCK':
        return this.onSelectRock()

      case 'PAPER':
        return this.onSelectPaper()

      case 'SCISSORS':
        return this.onSelectScissors()

      default:
        return null
    }
  }

  playAgain = () => {
    this.setState(prevState => ({...initialState, score: prevState.score}))
  }

  returnRenderGameResult = () => {
    const {result, playerSelection, systemSelection} = this.state
    const {choicesList} = this.props
    const playerSelectedCard = choicesList.filter(
      eachItem => eachItem.id === playerSelection,
    )[0].imageUrl
    const systemSelectedCard = choicesList.filter(
      eachItem => eachItem.id === systemSelection,
    )[0].imageUrl

    return (
      <ColumnContainer>
        <div>
          <RowContainer>
            <ColumnContainer>
              <CardNames>YOU</CardNames>
              <CardImg src={playerSelectedCard} alt="your choice" />
            </ColumnContainer>
            <ColumnContainer>
              <CardNames>OPPONENT</CardNames>
              <CardImg src={systemSelectedCard} alt="opponent choice" />
            </ColumnContainer>
          </RowContainer>
        </div>
        <CardNames>{result}</CardNames>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ColumnContainer>
    )
  }

  returnRenderGame = () => {
    const {choicesList} = this.props

    return (
      <GameCards>
        {choicesList.map(eachItem => {
          const buttonId = eachItem.id.toLowerCase().concat('Button')

          return (
            <GameCard
              key={eachItem.id}
              data-testid={buttonId}
              type="button"
              onClick={this.onSelectItem}
            >
              <CardImg src={eachItem.imageUrl} alt={eachItem.id} />
            </GameCard>
          )
        })}
      </GameCards>
    )
  }

  render() {
    const {score, systemSelection} = this.state
    return (
      <BgContainer>
        <ScoreCard score={score} />
        {systemSelection === ''
          ? this.returnRenderGame()
          : this.returnRenderGameResult()}
        <RulesButtonContainer>
          <RulesPopUp />
        </RulesButtonContainer>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
