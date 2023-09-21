import React from 'react'
import { CheckButton, CheckButtonText, NextButton, NextButtonText, CorrectText, Footer as FooterComponent, WrongText } from './styles'

interface Props {
  isCorrect: boolean
  checkAnswerClicked: boolean
  nextQuestion: boolean
  selectedOption: string
  exercise: object
  nextExercise: () => void
  checkAnswer: () => void
}

const Footer: React.FC = ({
  isCorrect,
  checkAnswerClicked,
  nextQuestion,
  selectedOption,
  exercise,
  nextExercise,
  checkAnswer
}: Props) => {
  return (
    <FooterComponent
        isCorrect={isCorrect}
        checkAnswerClicked={checkAnswerClicked}
        nextQuestion={nextQuestion}
      >
        {isCorrect && <CorrectText>Great Job!</CorrectText>}
        {!isCorrect && checkAnswerClicked && <WrongText >Answer: {exercise.rightAnswser}!</WrongText> }

        {((selectedOption.length < 1) || (!checkAnswerClicked && isCorrect)) && (
          <NextButton
            onPress={nextExercise}
            selectedOption={selectedOption.length > 1}
          >
            <NextButtonText>Continue</NextButtonText>
          </NextButton>
        )}

        {(selectedOption.length > 0 && !isCorrect) && (
        <CheckButton
          onPress={checkAnswer}
          disabled={!selectedOption}
        >
          <CheckButtonText>CHECK ANSWER</CheckButtonText>
        </CheckButton>
        )}
    </FooterComponent>
  )
}

export default Footer
