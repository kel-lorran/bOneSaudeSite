import { genericGet, genericPut, genericPost, genericDelete } from './constants';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export const login = async (data) => {
    // return genericPost(data, '/user/login');
    const auth = getAuth();
    const { email, password } = data;
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
    return userCredential.user;
}

