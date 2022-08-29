import * as Types from "../types/index";
import * as Constants from "../constants";
import Request from "./request";

abstract class URL {
  protected base: string;
  protected abstract body: Types.URL.URLBody;
  protected abstract params: Types.URL.URLParams;

  constructor(relative_url: string) {
    this.base = `${Constants.URL.BASE_URL}${relative_url}`;
  }

  abstract get(): Promise<any>;
  abstract post(): Promise<any>;
}

class CollectionsAll extends URL {
  constructor() {
    super(Constants.URL.COLLECTIONS_RELATIVE_URL);
  }

  async get() {
    return new Request().get(this.base);
  }

  async post() {}
}

export { URL };
