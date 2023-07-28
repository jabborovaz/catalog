import { combineReducers } from "@reduxjs/toolkit";
import cataloguesReducer from "./Catalogues";

const rootReducer = combineReducers({
  cataloguesState: cataloguesReducer,
});

export default rootReducer;
