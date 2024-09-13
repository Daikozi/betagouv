import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import firebase_app from '../firebaseConfig'

const auth = getAuth(firebase_app)

const signIn = async (email: string, password: string) => {
  let result = null
  let error = null
  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}

export default signIn
