import {GameCard, CardImg} from '../RockPaperScissors/StyledComponents'

const PlayerCards = props => {
  const {id, imageUrl, onSelectItem} = props
  const buttonId = id.toLowerCase().concat('Button')

  const onClickItem = () => {
    onSelectItem(id)
  }

  return (
    <GameCard data-testid={buttonId} type="button" onClick={onClickItem}>
      <CardImg src={imageUrl} alt={id} />
    </GameCard>
  )
}

export default PlayerCards
