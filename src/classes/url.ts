import * as Constants from "../constants";

abstract class URL {
  protected base: string;

  constructor(relative_url: string) {
    this.base = `${Constants.URL.BASE_URL}${relative_url}`;
  }
}

abstract class GetURL extends URL {
  abstract get(): Promise<unknown>;
}

abstract class PostURL extends URL {
  abstract post(): Promise<unknown>;
}

export { GetURL, PostURL };
