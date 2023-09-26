import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

export const RowContainer = styled.div`
  display: flex;
`
export const ColumnContainer = styled(RowContainer)`
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const GameCard = styled.button`
  margin: 20px;
  background-color: transparent;
  border: none;
`

export const CardImg = styled.img`
  height: 150px;
  aspect-ratio: 1;
`
export const GameCards = styled(RowContainer)`
  width: 40%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const RulesButtonContainer = styled.div`
  align-self: flex-end;
`
export const PlayAgainButton = styled.button`
  font-family: 'Bree Serif';
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  color: #223a5f;
  font-size: 14px;
`
export const CardNames = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
`
