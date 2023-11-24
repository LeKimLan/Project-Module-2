// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaJF7kyY-lVBm6abiAcrDvORIhs4kA2fw",
  authDomain: "module-2-project-b8e95.firebaseapp.com",
  projectId: "module-2-project-b8e95",
  storageBucket: "module-2-project-b8e95.appspot.com",
  messagingSenderId: "448711661475",
  appId: "1:448711661475:web:e00eb0d8cbc3727236ac16",
  measurementId: "G-41WVPQKPB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function uploadAvatarToFirebase(file) {
    try {
        const storage = getStorage(app);
        // const avatarRef = ref(storage, `image_${Date.now() * Math.random()}.${file.name.split('.')[file.name.split('.').length - 1]}`);
        const avatarImageRef = ref(storage, `avatar/image_${Date.now() * Math.random()}.${file.name.split('.')[file.name.split('.').length - 1]}`);

        let result = await uploadBytes(avatarImageRef, file)
        let url = getDownloadURL(result.ref)
        return url;
    } catch (error) {
        return false;
    }
}





