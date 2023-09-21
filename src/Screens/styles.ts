import styled from 'styled-components/native'

interface Props {
  isCorrect?: boolean
  checkAnswerClicked?: boolean
  selectedOption?: string
  nextQuestion: boolean
}

export const Container = styled.View`
  position: relative;
`

export const Content = styled.View`
  padding: 20px;
  background-color: #11607A;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-end-end-radius: 2px;
  margin-top: 30%;
  height: 90%;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-top: 50px;
`

export const EnglishText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  text-Align: center;
  margin-top: 30px;
  color: #fff;
  font-size: 22px;
`

export const GermanText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 30px;
  color: #fff;
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`

export const OptionButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 5px;
  border-radius: 25px;
  align-items: center;
  font-size: 22px;
`

export const OptionText = styled.Text<Props>`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.selectedOption !== '' ? '#333' : '#fff'};
`
