import {collection, getDocs} from "firebase/firestore";
import {db} from "../Firebase";
import {useAuthContext} from "../context/AuthContext";
import {Text} from "../components/styled/styled";
import {useEffect, useState} from "react";
import {useDbContext} from "../context/dbContext";

const Dashboard = () => {
  const {user} = useAuthContext();
  const {farm} = useDbContext();

  return (
    <>
      <h1>Dashboard</h1>
      <Text>Welcome {user.displayName}</Text>
    </>
  );
};

export default Dashboard;
