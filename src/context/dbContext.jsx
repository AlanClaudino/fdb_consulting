import {db} from "../Firebase";

import {collection, getDocs} from "firebase/firestore";

const teste = await getDocs(collection(db, "Testes"));

teste.forEach((item) => {
  console.log(item);
});
