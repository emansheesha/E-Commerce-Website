
import { useGetData } from "../../Hooks/useGetData";
import { GET_ALL_CATEGORY, GET_ERROR } from "../type";

export const getAllCategory = (limit,page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`);
    console.log("res", res);
    dispatch({ type: GET_ALL_CATEGORY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
