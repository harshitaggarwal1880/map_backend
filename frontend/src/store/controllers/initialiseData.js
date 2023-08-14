import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const fetchData = createAsyncThunk('user/fetchData', async () => {
  // Perform your initial data fetching here
//   const {data} = await axios.post('http://localhost:5000/initial');

  const response = await fetch('http://localhost:5000/cookie');
//   const data = await response.json();
//   console.log(data)
  return "data";
//   console.log(data)
//   const data = await response.json();
//   return data.name;
});
