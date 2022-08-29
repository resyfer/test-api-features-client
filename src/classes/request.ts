import axios from "axios";

import * as Types from "../types";

class Request {
  public static async get<GetResponse>(
    url: string,
    { params }: Types.GetOptions = {}
  ) {
    return axios.get<GetResponse>(url, { params });
  }

  public static async post<PostResponse>(
    url: string,
    { body, params }: Types.PostOptions = {}
  ) {
    return axios.post<PostResponse>(url, body, { params });
  }
}

export default Request;
