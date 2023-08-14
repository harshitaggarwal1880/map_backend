import { configureStore } from "@reduxjs/toolkit";
import userReducer, { setName } from "./slice/userSlice";
import { fetchData } from "./controllers/initialiseData";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

store.dispatch(fetchData()).then((data) => {
    console.log(data)
  store.dispatch(setName(data.payload));
});

export default store;
