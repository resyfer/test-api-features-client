import { AxiosResponse } from "axios";
import * as Constants from "../constants";

interface URL {
  get?<T>(): Promise<AxiosResponse<T, any>>;
  post?<T>(): Promise<AxiosResponse<T, any>>;
}

abstract class URL {
  protected base: string;

  constructor(relative_url: string) {
    this.base = `${Constants.URL.BASE_URL}${relative_url}`;
  }
}

export default URL;
