import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection, getDocs, serverTimestamp, doc, getDoc, setDoc, deleteDoc,
} from 'firebase/firestore';
import {
  ADD_BOOK, REMOVE_BOOK, SHOW_BOOK, UPDATE_BOOK,
} from '../constant';
import db from '../../firebase/firebase';

const handleData = (books) => {
  const returnArray = [];
  books.forEach((book) => {
    const bookObj = { ...book.data() };
    const { timestamp } = bookObj;
    returnArray.push({ ...bookObj, timestamp: `${timestamp.toDate()}`, id: book.id });
  });
  return returnArray;
};

const docChecker = async (doc) => {
  const docSnapshot = await getDoc(doc);
  if (!docSnapshot.exists()) {
    throw new Error('Document does not exist');
  }
};

const addBookAction = createAsyncThunk(ADD_BOOK, async ({ title, author, category }) => {
  const id = `${Date.now()}`;
  const config = {
    title,
    author,
    category: [category],
    chapter: '',
    totalChapter: '',
    timestamp: serverTimestamp(),
  };
  const docRef = doc(db, 'books', id);
  await setDoc(docRef, config);
  return (docRef.id) ? {
    msg: 'success', id,
  } : {
    msg: 'fail', id,
  };
});

const removeBookAction = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const docRef = doc(db, 'books', id);
  await docChecker(docRef);
  await deleteDoc(docRef);
  return 'success';
});

const showBookAction = createAsyncThunk(SHOW_BOOK, async () => {
  const books = await getDocs(collection(db, 'books'));
  return (handleData(books));
});

const editBookAction = createAsyncThunk(UPDATE_BOOK, async ({
  id, title, author, category, currentChapter, totalChapter,
}) => {
  const config = {
    id,
    title,
    author,
    category,
    currentChapter,
    totalChapter,
    timestamp: serverTimestamp(),
  };
  const docRef = doc(db, 'books', id);
  await docChecker(docRef);
  await setDoc(docRef, config);
  return 'success';
});

export {
  addBookAction,
  removeBookAction,
  showBookAction,
  editBookAction,
};
