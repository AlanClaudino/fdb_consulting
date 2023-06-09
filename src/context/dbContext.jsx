import {createContext, useContext, useState} from "react";
import {db} from "../Firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

const dbContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDbContext = () => {
  return useContext(dbContext);
};

// eslint-disable-next-line react/prop-types
const DatabaseContext = ({children}) => {
  const [farm, setFarm] = useState();
  const [workflow, setWorkflow] = useState();
  const [userFarms, setuserFarms] = useState();
  const [farmWorkflows, setFarmWorkflows] = useState();

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
    getFarmWorkflows(selectedFarmId);
    setWorkflow(null);
  };

  const createFarm = async (farmInfo) => {
    try {
      const farmRef = await addDoc(farmsCollectionRef, farmInfo);
      setFarm({id: farmRef.id, ...farmInfo});
    } catch (error) {
      return error;
    }
  };

  const getFarmWorkflows = async (farmId) => {
    const workflows = [];

    const workflowSubcollectionRef = collection(
      db,
      "Farms",
      farmId,
      "workflows"
    );

    try {
      const farmDocs = await getDocs(workflowSubcollectionRef);

      farmDocs.forEach((doc) => {
        const farm = {id: doc.id, ...doc.data()};
        workflows.push(farm);
      });

      setFarmWorkflows(workflows);
    } catch (error) {
      return error;
    }
  };

  const createWorkflow = async (workflowInfo) => {
    const workflowSubcollectionRef = collection(
      db,
      "Farms",
      farm?.id,
      "workflows"
    );
    try {
      const workflowRef = await addDoc(workflowSubcollectionRef, workflowInfo);
      setWorkflow({id: workflowRef.id, ...workflowInfo});
    } catch (error) {
      return error;
    }
  };

  const getSelectedWorkflow = async (workflowId) => {
    const [selectedWorkflow] = farmWorkflows.filter(
      (workflow) => workflow.id === workflowId
    );
    setWorkflow(selectedWorkflow);
  };

  const updateWorkflow = async (workflowInfo) => {
    const workflowDocRef = doc(
      db,
      "Farms",
      farm?.id,
      "workflows",
      workflow?.id
    );
    console.log("UPDATED");
    try {
      await updateDoc(workflowDocRef, workflowInfo);
      return "Workflow Successfully updated.";
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <dbContext.Provider
      value={{
        farm,
        userFarms,
        workflow,
        farmWorkflows,
        createFarm,
        getUserFarms,
        getSelectedFarm,
        createWorkflow,
        getFarmWorkflows,
        getSelectedWorkflow,
        updateWorkflow,
      }}
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
