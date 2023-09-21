import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// the values should be in .env file in a real app
const firebaseConfig = {
  apiKey: 'AIzaSyAN_GHTKkSGEH6DRZ0DMvxdICfEQSiRxxs',
  authDomain: 'fluyo-test-2bc10.firebaseapp.com',
  databaseURL: 'https://fluyo-test-2bc10-default-rtdb.firebaseio.com',
  projectId: 'fluyo-test-2bc10',
  storageBucket: 'fluyo-test-2bc10.appspot.com',
  messagingSenderId: '742700531957',
  appId: '1:742700531957:web:5187ca52c381f8376585bc'
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export { database }
