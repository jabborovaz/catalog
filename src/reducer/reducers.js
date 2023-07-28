import { combineReducers } from "@reduxjs/toolkit";
import catalogReducer from "./Catalog";

const rootReducer = combineReducers({
  catalogState: catalogReducer,
});

export default rootReducer;
