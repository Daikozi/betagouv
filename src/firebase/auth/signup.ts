import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import firebase_app from '../firebaseConfig'

const auth = getAuth(firebase_app)

const signUp = async (email: string, password: string) => {
  let result = null
  let error = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}

export default signUp
