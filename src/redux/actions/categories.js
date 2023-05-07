import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection, doc, getDocs, serverTimestamp, setDoc,
} from 'firebase/firestore';
import { ADD_CATEGORY, GET_CATEGORIES } from '../constant';
import db from '../../firebase/firebase';

const docName = 'categories';
const handleData = (categories) => {
  const returnArray = [];
  categories.forEach((category) => {
    const { name } = { ...category.data() };
    returnArray.push({ name, id: category.id });
  });
  return returnArray;
};

const newCategory = createAsyncThunk(ADD_CATEGORY, async (name) => {
  const id = `${Date.now()}`;
  const config = {
    name,
    timestamp: serverTimestamp(),
  };
  const docRef = doc(db, docName, id);
  await setDoc(docRef, config);
  return (docRef.id) ? {
    msg: 'success', id,
  } : {
    msg: 'fail', id,
  };
});

const getCategories = createAsyncThunk(GET_CATEGORIES, async () => {
  const categories = await getDocs(collection(db, docName));
  return handleData(categories);
});

export {
  newCategory,
  getCategories,
};
