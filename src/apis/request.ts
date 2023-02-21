import axios from "axios";

import * as Types from "../types";
import { ResponseError, ResponseSuccess } from "../types/response";

/**
 * @description Request methods with types
 * using axios
 */
class Request {
  public static async get<GetResponse, D = any>(
    url: string,
    { params }: Types.GetOptions = {}
  ) {
    try {
      //! Need to use await here due to one of the caveats of async/await
      //! https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a
      return await axios.get<
        GetResponse,
        ResponseSuccess<GetResponse> | ResponseError,
        D
      >(url, { params });
    } catch (err) {
      return {
        data: {
          code: "500",
          description: "Server Error.",
        },
        status: 500,
      } as ResponseError;
    }
  }

  // public static async post<PostResponse>(
  //   url: string,
  //   { body, params }: Types.PostOptions = {}
  // ) {
  //   try {
  //     return axios.post<
  //       PostResponse,
  //       ResponseSuccess<PostResponse> | ResponseError,
  //       any
  //     >(url, body, { params, validateStatus: () => true });
  //   } catch (err) {
  //     return {
  //       data: {
  //         code: "500",
  //         description: "Server Error.",
  //       },
  //       status: 500,
  //     } as ResponseError;
  //   }
  // }
}

export default Request;
