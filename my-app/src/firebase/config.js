

import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

import {getFirestore} from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3ho0ELAGxIN2nI1ZIc80uii7roQKRf4A",
    authDomain: "olx-clone-31f8f.firebaseapp.com",
    projectId: "olx-clone-31f8f",
    storageBucket: "olx-clone-31f8f.appspot.com",
    messagingSenderId: "401399344804",
    appId: "1:401399344804:web:bffc4fa812247b1f6a8031",
    measurementId: "G-WPXQV7RWNW"
  };
         
 export const app= initializeApp(firebaseConfig)
 export const auth=getAuth()
 export const storage=getStorage()
 export const db=getFirestore()


