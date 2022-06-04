const postsReducer = (state = [], action) => {
  //   if (action.type === "FETCH_POSTS") {
  //     return action.payload;
  //   } else return state;
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    //   break;
    default:
      return state;
  }
};

export default postsReducer