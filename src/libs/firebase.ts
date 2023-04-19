import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwROvETQD6kt-GMsEQYTCY28FQjFbYm4M",
  authDomain: "staging-offerzone.firebaseapp.com",
  projectId: "staging-offerzone",
  storageBucket: "staging-offerzone.appspot.com",
  messagingSenderId: "491561032652",
  appId: "1:491561032652:web:37b6ee8ad2d7a588be5b69",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file: File, name: string) {
  const storageref = ref(storage, `companies/${name}`);
  await uploadBytes(storageref, file);
  const url = await getDownloadURL(storageref);
  return url;
}
