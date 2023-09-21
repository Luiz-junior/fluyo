import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import Exercises from './src/Screens/Exercises'
import { ref, get } from 'firebase/database'
import { database } from './firebase'

const App = () => {
  const [exerciseData, setExerciseData] = useState([])

  useEffect(() => {
    const exercisesRef = ref(database, 'exercises')

    get(exercisesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        setExerciseData(data)
      } else {
        console.log('No data found.')
      }
    }).catch((error) => {
      console.error('Error fetching data:', error)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {exerciseData.length > 0 && (
          <Exercises exercises={exerciseData} />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    justifyContent: 'center'
  }
})

export default App
