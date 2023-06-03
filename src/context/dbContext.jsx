import {createContext, useContext, useState} from "react";
import {db} from "../Firebase";
import {collection, getDocs, setDoc, doc, addDoc} from "firebase/firestore";

const dbContext = createContext();

export const useDbContext = () => {
  return useContext(dbContext);
};

const DatabaseContext = ({children}) => {
  const [farm, setFarm] = useState(null);

  const createFarm = async (farmInfo) => {
    const farmsCollectionRef = collection(db, "Farms");
    try {
      const farmRef = await addDoc(farmsCollectionRef, farmInfo);
      setFarm({id: farmRef.id, ...farmInfo});
    } catch (error) {
      return error;
    }
  };

  return (
    <dbContext.Provider value={{farm, createFarm}}>
      {children}
    </dbContext.Provider>
  );
};

export default DatabaseContext;

// await addDoc(collectionRef, {
//   name: "teste SubCol",
//   age: 32,
// });

// setDoc(docRef, {
//   name: "Alan updated",
//   desc: "updating existing doc",
// });

// return getDocs(collectionRef);
