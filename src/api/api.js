import { db } from "./firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";

const petsCollection = collection(db, "mascotas");

export const getAllPets = async () => {
  const snapshot = await getDocs(petsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getPetById = async (id) => {
  const docRef = doc(db, "mascotas", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const addPet = async (pet) => {
  await addDoc(petsCollection, pet);
};

export const updatePet = async (id, pet) => {
  const docRef = doc(db, "mascotas", id);
  await updateDoc(docRef, pet);
};

export const deletePet = async (id) => {
  const docRef = doc(db, "mascotas", id);
  await deleteDoc(docRef);
};