import {collection, getDocs} from "firebase/firestore";
import {db} from "../Firebase";
import {useAuthContext} from "../context/AuthContext";
import {Text} from "../components/styled/styled";
import {useEffect, useState} from "react";

const Dashboard = () => {
  const {user} = useAuthContext();
  const [dados, setDados] = useState("");

  useEffect(() => {
    const getData = async () => {
      const teste = await getDocs(collection(db, "Testes"));
      console.log(teste.docs);
      setDados(teste.docs);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <Text>{user && user.email}</Text>
      {dados ? (
        dados.map((doc, index) => {
          console.log("DATA", doc.data());
          return <p key={index}>{JSON.stringify(doc.data())}</p>;
        })
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default Dashboard;
