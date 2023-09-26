import {HeaderCard, ScoreContainer, Heading} from './StyledComponents'

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
        <p>Score</p>
        <p>{score}</p>
      </ScoreContainer>
    </HeaderCard>
  )
}

export default ScoreCard
