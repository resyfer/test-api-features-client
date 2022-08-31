import axios from "axios";

import * as Types from "../types";
import { ResponseError } from "../types/response";

class Request {
  public static async get<GetResponse>(
    url: string,
    { params }: Types.GetOptions = {}
  ) {
    return axios.get<GetResponse | ResponseError>(url, { params });
  }

  public static async post<PostResponse>(
    url: string,
    { body, params }: Types.PostOptions = {}
  ) {
    return axios.post<PostResponse | ResponseError>(url, body, { params });
  }
}

export default Request;
