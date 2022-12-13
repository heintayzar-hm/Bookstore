import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ADD_BOOK, REMOVE_BOOK, apiUrl, apiSecret, SHOW_BOOK,
} from '../constant';

const addBookAction = createAsyncThunk(ADD_BOOK, async ({ title, author }) => {
  const url = `${apiUrl}/apps/${apiSecret}/books`;
  const id = `${Date.now()}`;
  const config = {
    title,
    author,
    category: 'Fiction',
    item_id: id,
  };
  const response = await axios.post(url, config);
  return {
    data: response.data, id,
  };
});

const removeBookAction = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const url = `${apiUrl}/apps/${apiSecret}/books/${id}`;
  const response = await axios.delete(url);
  return (response.data);
});
const handleData = (data) => {
  const keys = Object.keys(data).sort();
  const returnArray = [];
  keys.forEach((key) => {
    returnArray.push({ ...data[key][0], id: key });
  });
  return returnArray;
};
const showBookAction = createAsyncThunk(SHOW_BOOK, async () => {
  const url = `${apiUrl}/apps/${apiSecret}/books`;
  const response = await axios.get(url);
  return handleData(response.data);
});

export {
  addBookAction,
  removeBookAction,
  showBookAction,
};
