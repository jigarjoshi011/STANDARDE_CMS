import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

type UseAxios = {
  [key in HttpMethod]: (
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ) => Promise<AxiosResponse<any, any>>;
};

export interface IBaseAxios {
  method: HttpMethod;
  endpoint: string;
  headers?: AxiosRequestConfig["headers"];
  data?: any;
}

export const useAxios = (wpBaseUrl: boolean = false): UseAxios => {
  const router = useRouter();

  const [client] = useState(() => {
    let instance;

    if (wpBaseUrl) {
      instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_WP_PUBLIC_API_CONTACT_URL,
        httpsAgent: true,
      });
    } else {
      instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
      });
    }

    // Add interceptors here
    instance.interceptors.request.use(
      (config) => {
        //Set token
        // if (token) {
        //   config.headers.Authorization = `jwt ${token}`;
        // }
        //Set language
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        //TODO Add global response logic here

        if (response.status === 401) {
          if (typeof window === "object") {
            router.push("/cms/auth/login");
          }
        }

        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return instance;
  });

  const methods: UseAxios = {
    get: (endpoint, data, config) =>
      client
        .get(endpoint, config)
        .then((res) => res)
        .catch((err) => err),
    post: (endpoint, data, config) =>
      client
        .post(endpoint, data, config)
        .then((res) => res)
        .catch((err) => err),
    put: (endpoint, data, config) =>
      client
        .put(endpoint, data, config)
        .then((res) => res)
        .catch((err) => err),
    delete: (endpoint, data, config) =>
      client
        .delete(endpoint, config)
        .then((res) => res)
        .catch((err) => err),
    patch: (endpoint, data, config) =>
      client
        .patch(endpoint, data, config)
        .then((res) => res)
        .catch((err) => err),
  };

  return methods;
};

export const baseAxios = ({
  method = "get",
  endpoint,
  headers,
  data,
}: IBaseAxios): Promise<AxiosResponse<any, any>> => {
  const instance = axios({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    method,
    url: endpoint,
    headers,
    data,
  });
  return instance;
};
