//Wrappers for firebase

import {
  DocumentData,
  addDoc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  setDoc,
} from "firebase/firestore";
import { db, storage } from ".";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//this will add a document to a collection
export const add = async (collectionName: string, data: object) => {
  return await addDoc(collection(db, collectionName), data).then((docRef) => {
    return { ...data, id: docRef.id };
  });
};

//this will return all the documents in a collection
export const whereQuery = async (
  collectionName: string,
  field: string,
  operator: string,
  value: string
) => {
  return await getDocs(
    query(collection(db, collectionName), where(field, "==", value))
  ).then((querySnapshot) => {
    const results: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data ? (data = { ...data, id: doc.id }) : null;
      results.push(data);
    });
    return results;
  });
};

//this will return owner's collection based on id

export const get = async (collectionName: string, documentId: string) => {
  return await getDoc(doc(db, collectionName, documentId)).then((docSnap) => {
    return docSnap.data();
  });
};

// this will set the data to a document if exist, if not it will create a new document because of merge:true option
export const set = async (
  collectionName: string,
  documentId: string,
  data: object
) => {
  return await setDoc(doc(db, collectionName), data, { merge: true }).then(
    () => {
      return;
    }
  );
};

//this will upload a file (image) to firebase storage

export const upload = async (file: File, existingRef: string | undefined) => {
  const imageRef = existingRef
    ? existingRef
    : `${file.name.split(".")[0]}-${Date.now()}`;
  // Create a storage reference from our storage service
  const storageRef = ref(storage, imageRef);
  return uploadBytes(storageRef, file).then((snapshot) => {
    return getDownloadURL(snapshot.ref).then((downloadURL) => {
      return { url: downloadURL, ref: imageRef };
    });
  });
};

export const getAll = async (collectionName: string) => {
  await getDocs(collection(db, collectionName)).then((querySnapshot) => {
    // eslint-disable-next-line prefer-const
    let results: Array<DocumentData> = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data ? (data = { ...data, id: doc.id }) : null;
      results.push(data);
    });
    return results;
  });
};
