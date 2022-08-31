import { GetURL } from "./url";
import Request from "./request";
import * as Types from "../types";

class LandingPage extends GetURL {
  constructor() {
    super("/");
  }

  override async get() {
    return Request.get<Types.LandingPage>(this.base);
  }
}

export default LandingPage;