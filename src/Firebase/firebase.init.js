import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializeAuth = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuth;