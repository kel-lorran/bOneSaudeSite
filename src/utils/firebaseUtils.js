import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4PcdP2-2Iu60sZ_TxgnviJ0xslHZKzA0",
  authDomain: "b-one-saude.firebaseapp.com",
  projectId: "b-one-saude",
  storageBucket: "b-one-saude.appspot.com",
  messagingSenderId: "1013923835408",
  appId: "1:1013923835408:web:70f3d3cc520dbf6c93e495",
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)