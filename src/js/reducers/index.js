import { combineReducers } from "redux";
import imagesReducer from "./images-reducer"
import heroReducer from "./selected-hero";




const rootReducer = combineReducers({
    images: imagesReducer,
    hero: heroReducer
  });
  
  export default rootReducer;