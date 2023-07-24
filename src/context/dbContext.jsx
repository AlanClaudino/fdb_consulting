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
  deleteDoc,
} from "firebase/firestore";

const dbContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDbContext = () => {
  return useContext(dbContext);
};

// eslint-disable-next-line react/prop-types
const DatabaseContext = ({children}) => {
  const [userFarms, setuserFarms] = useState();
  const [farm, setFarm] = useState();
  const [farmWorkflows, setFarmWorkflows] = useState();
  const [workflow, setWorkflow] = useState();
  const [farmEquip, setFarmEquip] = useState();
  const [farmInventory, setFarmInventory] = useState();
  const [farmWorkers, setFarmWorkers] = useState();

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
    setFarmWorkflows(null);
    setWorkflow(null);
    setFarmEquip(null);
    setFarmInventory(null);
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

  const getSelectedWorkflow = async (workflowId) => {
    const [selectedWorkflow] = farmWorkflows.filter(
      (workflow) => workflow.id === workflowId
    );
    setWorkflow(selectedWorkflow);
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
      return "Workflow successfully updated.";
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const deleteWorkflow = async (workflowId) => {
    const workflowDocRef = doc(db, "Farms", farm?.id, "workflows", workflowId);
    try {
      await deleteDoc(workflowDocRef);
    } catch (error) {
      return error;
    }
  };

  const createEquipGroup = async (info) => {
    const equipGroupSubcollectionRef = collection(
      db,
      "Farms",
      farm?.id,
      "equipments"
    );
    await addDoc(equipGroupSubcollectionRef, info);
    await getFarmEquipments();
  };

  const updateEquipGroup = async (equipGroupInfo, id) => {
    const GroupDocRef = doc(db, "Farms", farm?.id, "equipments", id);
    console.log("UPDATED");

    await updateDoc(GroupDocRef, equipGroupInfo);
    await getFarmEquipments();
    return "Machinery and Equipments successfully updated.";
  };

  const getFarmEquipments = async () => {
    const equipGroup = [];
    const equipGroupSubcollectionRef = collection(
      db,
      "Farms",
      farm?.id,
      "equipments"
    );
    try {
      const farmDocs = await getDocs(equipGroupSubcollectionRef);

      farmDocs.forEach((doc) => {
        const equip = {id: doc.id, ...doc.data()};
        equipGroup.push(equip);
      });

      setFarmEquip(equipGroup);
    } catch (error) {
      return error;
    }
  };

  const deleteEquipmentGroup = async (equipGroupId) => {
    const workflowDocRef = doc(
      db,
      "Farms",
      farm?.id,
      "equipments",
      equipGroupId
    );
    await deleteDoc(workflowDocRef);
    await getFarmEquipments();
  };

  const createInventoryGroup = async (info) => {
    const inventoryGroupSubcollectionRef = collection(
      db,
      "Farms",
      farm?.id,
      "inventory"
    );
    await addDoc(inventoryGroupSubcollectionRef, info);
    await getFarmInventory();
  };

  const updateInventoryGroup = async (inventoryGroupInfo, id) => {
    const GroupDocRef = doc(db, "Farms", farm?.id, "inventory", id);

    await updateDoc(GroupDocRef, inventoryGroupInfo);
    await getFarmInventory();
    return "Inventory successfully updated.";
  };

  const getFarmInventory = async () => {
    const inventoryGroup = [];
    const inventoryGroupSubcollectionRef = collection(
      db,
      "Farms",
      farm?.id,
      "inventory"
    );
    const inventoryDocs = await getDocs(inventoryGroupSubcollectionRef);

    inventoryDocs.forEach((doc) => {
      const inventory = {id: doc.id, ...doc.data()};
      inventoryGroup.push(inventory);
    });

    setFarmInventory(inventoryGroup);
  };

  const deleteInventoryGroup = async (inventoryGroupId) => {
    const inventoryDocRef = doc(
      db,
      "Farms",
      farm?.id,
      "inventory",
      inventoryGroupId
    );
    await deleteDoc(inventoryDocRef);
    await getFarmInventory();
  };

  const createWorkersGroup = async (info) => {
    const workersGroupSubcollectionRef = collection(
      db,
      "Farms",
      farm?.id,
      "workers"
    );
    await addDoc(workersGroupSubcollectionRef, info);
    await getFarmWorkers();
  };

  const getFarmWorkers = async () => {
    const workersGroup = [];
    const workersGroupSubcollectionRef = collection(
      db,
      "Farms",
      farm?.id,
      "workers"
    );
    const workersDocs = await getDocs(workersGroupSubcollectionRef);

    workersDocs.forEach((doc) => {
      const workers = {id: doc.id, ...doc.data()};
      workersGroup.push(workers);
    });

    setFarmWorkers(workersGroup);
  };

  const updateWorkersGroup = async (workersGroupInfo, id) => {
    const GroupDocRef = doc(db, "Farms", farm?.id, "workers", id);

    await updateDoc(GroupDocRef, workersGroupInfo);
    await getFarmWorkers();
    return "Workers successfully updated.";
  };

  const deleteWorkerGroup = async (workersGroupId) => {
    const workersDocRef = doc(db, "Farms", farm?.id, "workers", workersGroupId);
    await deleteDoc(workersDocRef);
    await getFarmWorkers();
  };

  return (
    <dbContext.Provider
      value={{
        farm,
        userFarms,
        workflow,
        farmWorkflows,
        farmEquip,
        farmInventory,
        farmWorkers,
        createFarm,
        getUserFarms,
        getSelectedFarm,
        createWorkflow,
        getFarmWorkflows,
        getSelectedWorkflow,
        updateWorkflow,
        deleteWorkflow,
        createEquipGroup,
        getFarmEquipments,
        updateEquipGroup,
        deleteEquipmentGroup,
        createInventoryGroup,
        getFarmInventory,
        updateInventoryGroup,
        deleteInventoryGroup,
        createWorkersGroup,
        updateWorkersGroup,
        deleteWorkerGroup,
        getFarmWorkers,
      }}
    >
      {children}
    </dbContext.Provider>
  );
};

export default DatabaseContext;
