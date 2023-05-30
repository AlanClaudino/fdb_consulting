import { db } from '../Firebase';

import { collection, getDocs } from 'firebase/firestore';

const collectionRef = collection(db, 'Testes');

export const teste = async () => {
  return await getDocs(collectionRef);
};
