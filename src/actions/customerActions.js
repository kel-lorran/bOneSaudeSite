import { db } from "utils/firebaseUtils";
import { genericGet, genericPut } from "./constants";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { rolesEnum } from "utils/enums";

export const saveNewCustomer = async (dataPatient) => {
  const patientCollectionRef = collection(db, rolesEnum.Patient);
  await addDoc(patientCollectionRef, dataPatient);
  const auth = getAuth();
  const { email, password } = dataPatient;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

