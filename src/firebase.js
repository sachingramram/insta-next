// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain: "insta-next-v2-6c233.firebaseapp.com",
    projectId: "insta-next-v2-6c233",
    storageBucket: "insta-next-v2-6c233.appspot.com",
    messagingSenderId: "240200256783",
    appId: "1:240200256783:web:deccd3c143d213ddec827a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// rules_version = '2';

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write if 
//       request.resource.size <10*1024*1024 &&
//       request.resource.contentType.matches('image/.*')
//     }
//   }
// }