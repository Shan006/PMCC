import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./RegistrationSlice"
import FeedbackReducer from "./FeedbackSlice"

const store = configureStore({
    reducer:{
        registration:registrationReducer,
        feedback : FeedbackReducer
    }
});

export default store;