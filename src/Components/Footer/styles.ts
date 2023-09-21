import styled from 'styled-components/native'

interface Props {
  isCorrect?: boolean
  checkAnswerClicked?: boolean
  selectedOption?: string
  nextQuestion?: boolean
}

export const CorrectText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  left: -110px;
  bottom: 10px;
`

export const WrongText = styled(CorrectText)`
  color: #fff;
`

export const CheckButton = styled.TouchableOpacity`
  background-color: #17DFEC;
  padding: 10px;
  margin-top: 10px;
  border-radius: 25px;
  paddingHorizontal: 50px;
  width: 80%;
`

export const CheckButtonText = styled(CorrectText)`
  color: white;
  font-size: 16px;
  text-align: center;
  padding-bottom: 10px;
  top: 8px;
  left: initial;
  bottom: initial;
`

export const NextButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`

export const Footer = styled.View<Props>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 25%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 60px;
  align-items: center;
  background-color: ${(props) => !props.checkAnswerClicked && !props.isCorrect ? 'transparent' : props.isCorrect ? '#14F7F7' : '#F55656'}
 
`

export const NextButton = styled.TouchableOpacity<Props>`
  background-color: ${(props) => props.selectedOption !== '' ? '#517A7C' : '#fff'};
  padding: 10px;
  margin-top: 10px;
  width: 80%;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
`
