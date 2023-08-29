import baseUrl from "../Api/axios";

export const useGetData = async (url, params) => {
 
  const res = await baseUrl.get(url);

  return res.data;
};
