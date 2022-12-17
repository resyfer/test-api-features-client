import * as Constants from "../constants";
import Request from "./request";

abstract class URL {
  protected apiURL: string;

  constructor(relative_url: string) {
    this.apiURL = `${Constants.URL.BASE_URL}${relative_url}`;
  }
}

class GetURL<T> extends URL {
  async get() {
    return Request.get<T>(this.apiURL);
  }
}

export { GetURL };
