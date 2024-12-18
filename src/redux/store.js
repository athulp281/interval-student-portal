import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/authSlice";
import grievancereducer from "./features/grievanceSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    grievance: grievancereducer,
  },
});
