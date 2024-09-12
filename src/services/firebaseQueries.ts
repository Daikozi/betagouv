import { collection, doc, getDocs, getFirestore, query, updateDoc } from 'firebase/firestore'

import firebase_app from '../firebase/config'

const db = getFirestore(firebase_app)

export const fetchArticles = async (collectionName: string) => {
  const q = query(collection(db, collectionName))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export const updateArticle = async (collectionName: string, docId: string, updatedData: any) => {
  const docRef = doc(db, collectionName, docId)
  await updateDoc(docRef, updatedData)
}
