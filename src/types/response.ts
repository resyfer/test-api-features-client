import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";

interface ResponseSuccess<T> {
  data: T;
  status: 200;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<any>;
  request?: any;
}

interface ResponseError {
  data: {
    code: "500";
    description: string;
  };
  status: 400 | 404 | 500;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<any>;
  request?: any;
}

export type { ResponseSuccess, ResponseError };
