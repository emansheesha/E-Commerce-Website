import baseUrl from "../Api/axios";

export const useUpdateData = async (url, data) => {

  const res = await baseUrl.put(url, data);
  console.log(res)
  return res
};