import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default{

    //   Função para fazer Login usando o Google, funcao vai fazer autenticacao com o google e depois retornar o resultado da conecção do usuario
    googleLogin: async () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider)
        return result;
    }
}