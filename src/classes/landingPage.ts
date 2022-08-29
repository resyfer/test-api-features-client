import URL from "./url";
import Request from "./request";
import * as Types from "../types";

class LandingPage extends URL {
  constructor() {
    super("/");
  }

  override async get<GetResponse = Types.LandingPage>() {
    return Request.get<GetResponse>(this.base);
  }
}

export default LandingPage;
