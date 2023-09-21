import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, EnglishText, GermanText, OptionButton, OptionsContainer, OptionText, Title } from './styles'
import Footer from '../Components/Footer'

interface Exercise {
  id: string
  english: string
  german: string
  germanOptions: object
  rightAnswser: string
}

interface ExerciseScreenProps {
  exercises: Exercise[]
}

const ExerciseScreen: React.FC<ExerciseScreenProps> = ({ exercises }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [checkAnswerClicked, setCheckAnswerClicked] = useState(false)
  const [nextQuestion, setNextQuestion] = useState(false)

  const exercise = exercises[currentExerciseIndex]

  useEffect(() => {
    if (isCorrect) {
      setNextQuestion(true)
      setCheckAnswerClicked(false)
    } else {
      setNextQuestion(false)
    }
  }, [isCorrect])

  const checkAnswer = (): void => {
    setCheckAnswerClicked(true)

    if (selectedOption === exercise.rightAnswser) {
      setIsCorrect(true)
      setSelectedOption('')
      setNextQuestion(false)
    } else {
      setIsCorrect(false)
    }
  }

  const nextExercise = (): void => {
    setCurrentExerciseIndex(currentExerciseIndex + 1)
    setSelectedOption('')
    setIsCorrect(false)
  }

  const germanWithGap = exercise.german.replace('_ _ _ _', selectedOption)

  return (
    <Container>
      <Content>
      <Title>Fill in the missing word </Title>
      <EnglishText>{exercise.english}</EnglishText>
      <GermanText>
        {germanWithGap}
      </GermanText>

      <OptionsContainer>
      {Object.keys(exercise.germanOptions).map((option, index) => {
        return (
        <OptionButton
          key={index}
          style={ selectedOption === option && styles.selectedOption }
          onPress={() => { setSelectedOption(option) }}
        >
          <OptionText selectedOption={selectedOption}>{option}</OptionText>
        </OptionButton>
        )
      })}
      </OptionsContainer>
      </Content>

      <Footer
        isCorrect={isCorrect}
        checkAnswerClicked={checkAnswerClicked}
        nextQuestion={nextQuestion}
        selectedOption={selectedOption}
        exercise={exercise}
        nextExercise={nextExercise}
        checkAnswer={checkAnswer}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  selectedOption: {
    backgroundColor: '#fff'
  }

})

export default ExerciseScreen
