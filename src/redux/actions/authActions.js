import baseUrl from "../../Api/axios";
import { useGetData } from "../../Hooks/useGetData";
import { usePostData } from "../../Hooks/usePostData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { ADD_USER, FORGET_PASSWORD, LOGIN_USER, NEW_PASSWORD, RESET_PASSWORD } from "../type";

export const addNewUser = (data) => async (dispatch) => {
  try {
    const res = await usePostData(`/api/v1/auth/signup`, data);
    console.log("res", res);
    dispatch({ type: ADD_USER, payload: res });
  } catch (e) {
    dispatch({ type: ADD_USER, payload: e.res });
  }
};
export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await usePostData(`/api/v1/auth/login`, data);
    console.log("res", res);
    dispatch({ type: LOGIN_USER, payload: res });
  } catch (e) {
    console.log(e)
    dispatch({ type: LOGIN_USER, payload: e.response });
  }
};
export const forgetResetPassword = (data) => async (dispatch) => {
  try {
    const res = await usePostData(`/api/v1/auth/forgotPasswords`, data);
    console.log("res", res);
    dispatch({ type: FORGET_PASSWORD, payload: res });
  } catch (e) {
    console.log(e)
    dispatch({ type: FORGET_PASSWORD, payload: e.response });
  }
};
export const resetPassword= (data) => async (dispatch) => {
  try {
    const res = await usePostData(`/api/v1/auth/verifyResetCode`, data);
    console.log("res", res);
    dispatch({ type: RESET_PASSWORD, payload: res });
  } catch (e) {
    console.log(e)
    dispatch({ type: RESET_PASSWORD, payload: e.response });
  }
};
export const newPassword= (data) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/auth/resetPassword`, data);
    console.log("res", res);
    dispatch({ type: NEW_PASSWORD, payload: res });
  } catch (e) {
    console.log(e)
    dispatch({ type: NEW_PASSWORD, payload: e.response });
  }
};