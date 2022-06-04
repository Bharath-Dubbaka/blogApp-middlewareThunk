import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// const dummyReducer = (count = [], action) => {
//   if (action.type === "DUMMY") {
//     return [...count, 1];
//   } else return count;
// };

export default combineReducers({
  postsReducer: postsReducer,
  usersReducer: usersReducer,
});
