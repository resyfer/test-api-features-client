import axios from "axios";

import * as Types from "../types";
import { ResponseError, ResponseSuccess } from "../types/response";

class Request {
  public static async get<GetResponse, D = any>(
    url: string,
    { params }: Types.GetOptions = {}
  ) {
    return axios.get<
      GetResponse,
      ResponseSuccess<GetResponse> | ResponseError,
      D
    >(url, { params, validateStatus: () => true });
  }

  public static async post<PostResponse>(
    url: string,
    { body, params }: Types.PostOptions = {}
  ) {
    return axios.post<
      PostResponse,
      ResponseSuccess<PostResponse> | ResponseError,
      any
    >(url, body, { params, validateStatus: () => true });
  }
}

export default Request;
