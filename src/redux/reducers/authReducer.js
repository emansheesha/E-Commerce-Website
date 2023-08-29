import { ADD_USER, FORGET_PASSWORD, GET_ERROR, LOGIN_USER, NEW_PASSWORD, RESET_PASSWORD } from "../type";

const initial = {
  user: [],
  loginUser:[],
  forgetPassword:[],
  resetPassword:[],
  newPassword:[],
  loading: true,
};
const authReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
      case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
        loading: false,
      };
      case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
        loading: false,
      };
      case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
        loading: false,
      };
       case NEW_PASSWORD:
      return {
        ...state,
        newPassword: action.payload,
        loading: false,
      };
      
    default:
      return state;
  }
};
export default authReducer;
