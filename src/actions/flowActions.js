import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { rolesEnum } from "utils/enums";
import { db } from "utils/firebaseUtils";

export const saveNewFlow = async data => {
    const flowCollectionRef = collection(db, rolesEnum.Flow);
    await addDoc(flowCollectionRef, data);
}