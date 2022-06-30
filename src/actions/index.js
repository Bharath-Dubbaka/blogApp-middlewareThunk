import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUser = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = [];
    console.log(getState());
    getState().postsReducer.forEach((current) => {
      if (!userIds.includes(current.userId)) {
        userIds.push(current.userId);
        dispatch(fetchUser(current.userId));
        console.log(userIds);
      }
    });
  };
};

export const fetchPosts = (data) => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: res.data,
    });
  };
};

export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: "FETCH_USER",
      payload: res.data,
    });
  };
};
