//Wrappers for firebase

import {
  DocumentData,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from ".";

export const add = async (collectionName: string, data: object) => {
  return await addDoc(collection(db, collectionName), data).then((docRef) => {
    return { ...data, id: docRef.id };
  });
};

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
