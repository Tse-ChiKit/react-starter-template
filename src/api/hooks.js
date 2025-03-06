import { useRequest } from "ahooks";
import client from "@/api/client";

export const useApiRequest = (url, options = {}) => {
  const { manual = true, ...rest } = options;
  return useRequest(
    (params) =>
      client({
        url,
        method: rest.method || "GET",
        ...(rest.method === "GET" ? { params } : { data: params }),
      }),
    { manual, ...rest }
  );
};
