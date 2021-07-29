import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyCHxvKZEFx-Z-VlehU6F2hZ9eEqlzZjA_I',
   authDomain: 'crwn-db-cc827.firebaseapp.com',
   projectId: 'crwn-db-cc827',
   storageBucket: 'crwn-db-cc827.appspot.com',
   messagingSenderId: '844654133524',
   appId: '1:844654133524:web:8ff1f5ed7cfa8d67a34201',
   measurementId: 'G-KNNFNM4VGN'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) {
      return;
   }

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdDate = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdDate,
            ...additionalData
         })
      } catch(err) {
         console.log('error creating user', err.message);
      }
   }

   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;