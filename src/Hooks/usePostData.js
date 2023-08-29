import baseUrl from "../Api/axios";

export const usePostData = async (url, data) => {

  const res = await baseUrl.post(url, data);
  console.log(res)
  return res
};