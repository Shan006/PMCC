import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCampuses = createAsyncThunk("campuses/fetch", async () => {
  try {
    const res = await axios.get("https://apis.agonesports.com/api/Campus/GetPMCCCampuses");
    return res.data;
  } catch (error) {
    console.log(error);
  }
 
 });

 export const fetchCities = createAsyncThunk("campuses/fetchCities", async () => {
  try {
    const res = await axios.get("https://apis.agonesports.com/api/Campus/CitiesWithCampusType");
    return res.data;
  } catch (error) {
    console.log(error);
  }
 
 });

 export const fetchUpcomingCampus = createAsyncThunk("campuses/fetchUpcomingCampus", async () => {
  try {
    const res = await axios.get("https://apis.agonesports.com/api/Campus/PMCCUpcomingCampus");
    return res.data;
  } catch (error) {
    console.log(error);
  }
 
 });

export const submitInfo = createAsyncThunk("registration/submit", async (obj) => {
  try {
    const res = await axios.post(
      "https://apis.agonesports.com/api/Campus/RegisterForCampusClash",
      obj
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    data: [],
    error: false,
    submit: false,
    msg:"",
    code:"",
    cities:[],
    campus:[],
  },
  reducers: {
  },
  extraReducers: {
    [submitInfo.pending]: (state, action) => {
      state.submit = false;
    },
    [submitInfo.fulfilled]: (state, action) => {
      state.msg = action.payload.ResponseMessage;
      state.code = action.payload.ResponseCode;
      state.submit = true;
    },
    [submitInfo.rejected]: (state, action) => {
      state.submit = false;
    },
    [fetchCampuses.pending]: (state, action) => {
      state.error = true;
    },
    [fetchCampuses.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchCampuses.rejected]: (state, action) => {
      state.error = true;
    },
    [fetchCities.pending]: (state, action) => {
      state.error = true;
    },
    [fetchCities.fulfilled]: (state, action) => {
      state.cities = action.payload;
    },
    [fetchCities.rejected]: (state, action) => {
      state.error = true;
    },
    [fetchUpcomingCampus.pending]: (state, action) => {
      state.error = true;
    },
    [fetchUpcomingCampus.fulfilled]: (state, action) => {
      state.campus = action.payload;
    },
    [fetchUpcomingCampus.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export const { setRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;

// export const selectorGame = (state) => state.game.data;

// export function fetchGameInfo(){
//     return async function fetchGameInfoThunk(dispatch,getState) {
//         try {
//             const res = await fetch('http://apis.agonesports.com/api/Jverse/Games');
//             const data = await res.json();
//             dispatch()
//         } catch (error) {
//             console.log("eroor")
//         }
//     }
// }
