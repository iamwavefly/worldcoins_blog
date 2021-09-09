export const GET_POSTS_PENDING = "GET_POSTS_PENDING";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";

export const getPostsPending = () => {
  return {
    type: GET_POSTS_PENDING,
  };
};
export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};
export const getPostsError = (error) => {
  return {
    type: GET_POSTS_ERROR,
    payload: error,
  };
};
