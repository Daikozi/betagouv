import firebaseApp from '@firebase/firebaseApp'
import { collection, doc, getDocs, getFirestore, query, updateDoc } from 'firebase/firestore'

import type { Article } from '@/models'

const db = getFirestore(firebaseApp)

export const fetchArticles = async (): Promise<Article[]> => {
  const q = query(collection(db, 'articles'))
  const querySnapshot = await getDocs(q)

  return querySnapshot.docs.map((doc) => {
    const data = doc.data()

    // Ajout de vérifications pour s'assurer que les champs existent
    if (!data.title || !data.content) {
      throw new Error('Les champs nécessaires ne sont pas présents dans le document')
    }

    // Retourne l'objet en garantissant qu'il satisfait le type Article
    return {
      id: doc.id,
      ...data,
    } as Article
  })
}

export const updateArticle = async (docId: string, updatedData: any) => {
  const docRef = doc(db, 'articles', docId)
  await updateDoc(docRef, updatedData)
}
