import { combineReducers } from "redux";
import score from './score.js'
const allReducers = combineReducers({
  
  trueScore: score,
});

export default allReducers;
