import {createContext, useContext, useState} from "react";
import {db} from "../Firebase";
import {collection, getDocs, addDoc, query, where} from "firebase/firestore";

const dbContext = createContext();

export const useDbContext = () => {
  return useContext(dbContext);
};

const DatabaseContext = ({children}) => {
  const [farm, setFarm] = useState(null);
  const [userFarms, setuserFarms] = useState(null);

  const farmsCollectionRef = collection(db, "Farms");

  const getUserFarms = async (userId) => {
    const farms = [];
    try {
      const farmQuery = query(
        farmsCollectionRef,
        where("userId", "==", userId)
      );

      const farmDocs = await getDocs(farmQuery);

      farmDocs.forEach((doc) => {
        const farm = {id: doc.id, ...doc.data()};
        farms.push(farm);
      });

      setuserFarms(farms);
    } catch (error) {
      return error;
    }
  };

  const getSelectedFarm = async (selectedFarmId) => {
    const [selectedFarm] = userFarms.filter(
      (farm) => farm.id === selectedFarmId
    );
    setFarm(selectedFarm);
  };

  const createFarm = async (farmInfo) => {
    try {
      const farmRef = await addDoc(farmsCollectionRef, farmInfo);
      setFarm({id: farmRef.id, ...farmInfo});
    } catch (error) {
      return error;
    }
  };

  return (
    <dbContext.Provider
      value={{farm, userFarms, createFarm, getUserFarms, getSelectedFarm}}
    >
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
