import axios from "axios";
import {
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  getPostsSuccess,
  getPostsPending,
} from "../actions";

const API_URL = "https://secure-ocean-68007.herokuapp.com/post";

const initState = {
  pending: false,
  posts: [],
  error: null,
};

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS_PENDING:
      return { ...state, pending: true };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload,
      };
    case GET_POSTS_ERROR:
      return { ...state, error: action.payload, pending: false };
    default:
      return state;
  }
};

export const getPosts = () => async (dispatch) => {
  // const posts = getState().posts;
  dispatch(getPostsPending());
  const posts = await axios.get(`${API_URL}/all`);
  dispatch(getPostsSuccess(posts.data.message));
};
