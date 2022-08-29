import axios from "axios";

import * as Types from "../types";
import * as Constants from "../constants";

class Request {
  public async get(url: string) {
    return axios({
      method: Constants.URL.METHOD.GET,
      url,
    });
  }

  public async post(url: string, { body, params }: Types.PostOptions) {
    return axios({
      method: Constants.URL.METHOD.POST,
      url,
      data: body,
      params,
    });
  }
}

export default Request;
