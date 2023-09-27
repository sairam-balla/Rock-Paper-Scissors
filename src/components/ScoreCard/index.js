import {
  HeaderCard,
  ScoreContainer,
  Heading,
  ScoreDisplay,
} from './StyledComponents'

const ScoreCard = props => {
  const {score} = props

  return (
    <HeaderCard>
      <div>
        <Heading>
          ROCK <br /> PAPER <br /> SCISSORS
        </Heading>
      </div>
      <ScoreContainer>
        <ScoreDisplay>Score</ScoreDisplay>
        <ScoreDisplay>{score}</ScoreDisplay>
      </ScoreContainer>
    </HeaderCard>
  )
}

export default ScoreCard
