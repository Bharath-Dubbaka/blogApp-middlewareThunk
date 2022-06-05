import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = (data) => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get(data);

    dispatch({
      type: "FETCH_POSTS",
      payload: res.data,
    });
  };

  //   dispatchEvent()
  //   return {
  //     type: "FETCH_POSTS",
  //     payload: res,
  //   };
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
