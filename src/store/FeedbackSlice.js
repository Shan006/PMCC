import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// export const fetchCampuses = createAsyncThunk("campuses/fetch", async () => {
//   try {
//     const res = await axios.get("https://apis.agonesports.com/api/Campus/GetPMCCCampuses");
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
 
//  });

// export const fetchSpecificGameInfo = createAsyncThunk(
//   "game/fetch",
//   async (id) => {
//     try {
//       const res = await axios.get(
//         `https://apis.agonesports.com/api/Jverse/GameDetails/${id}`
//       );
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const submitInfo = createAsyncThunk("feedback/submit", async (obj) => {
  try {
    const res = await axios.post(
      "https://apis.agonesports.com/api/Campus/SaveFeedback",
      obj
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    data: [],
    error: false,
    submit: false,
    msg:"",
    code:"",
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
    // [fetchCampuses.pending]: (state, action) => {
    //   state.error = true;
    // },
    // [fetchCampuses.fulfilled]: (state, action) => {
    //   state.data = action.payload;
    // },
    // [fetchCampuses.rejected]: (state, action) => {
    //   state.error = true;
    // },
    // [fetchSpecificGameInfo.pending]: (state, action) => {
    //   state.error = true;
    // },
    // [fetchSpecificGameInfo.fulfilled]: (state, action) => {
    //   state.data = action.payload;
    // },
    // [fetchSpecificGameInfo.rejected]: (state, action) => {
    //   state.error = true;
    // },
  },
});

export const { setFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
