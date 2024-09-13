import type { FirebaseApp } from 'firebase/app'
import { getApps, initializeApp } from 'firebase/app'

import firebaseConfig from './firebaseConfig'

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : (getApps()[0] satisfies FirebaseApp)

export default firebaseApp
