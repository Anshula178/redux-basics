import { legacy_createStore } from "redux";
import reducer from "./reducers/Index";

 export const store = legacy_createStore(reducer);
