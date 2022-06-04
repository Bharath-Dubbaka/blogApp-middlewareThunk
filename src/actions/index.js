import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

//BEFORE ADDING MIDDLEWARE FUNCTION
// export const fetchPosts = async () => {
//     const res = await jsonPlaceholder.get('/posts')
//     console.log(res);
//     return {
//         type:"FETCH_POSTS",
//         payload: res
//     }
// }

//AFTER ADDING MIDDLEWARE FUNCTION IN PLACE OF RETURNING JS PURE OBJECT
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");
    // console.log("state after action has dispatched", getState());
    dispatch({
      type: "FETCH_POSTS",
      payload: res.data,
    });
  };
};

//AFTER ADDING MIDDLEWARE IN USER ACTION CREATOR
export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);
    // console.log("state after action has dispatched", getState());
    dispatch({
      type: "FETCH_USER",
      payload: res.data,
    });
  };
};

//WITH LODASH MEMORIZE FUNCTION SO WE DONT FETCH SAME USERS AGAIN AND AGAIN
// export const fetchUser = (id) => {
//   return (dispatch, getState) => {
//     _fetchUser(id, dispatch);
//   };
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: res.data,
//   });
// });

//ACTION CREATORS IN ACTION CREATOR - SO WE DONT FETCH SAME USERS AGAIN AND AGAIN
export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().postsReducer, "userId"));
    userIds.forEach(id => dispatch(fetchUser(id)))

    //Without using Lodash.. found in question in below of video in udemy CH: 286
    // const userIds = new Set(
    //   getState().postsReducer.map(
    //     (post) => post.userId  )
    // );
    // userIds.forEach(id => dispatch(fetchUser(id)))
    

    //OR

    // const userIds = [];
    // getState().postsReducer.forEach((current) => {
    //   if (!userIds.includes(current.userId)) {
    //     userIds.push(current.userId);
    //     dispatch(fetchUser(current.userId));
    //   }
    // });
    // console.log(userIds);
  };
};
