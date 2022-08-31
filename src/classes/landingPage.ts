import { GetURL } from "./url";
import Request from "./request";
import * as Types from "../types";
import * as Constants from "../constants";

class LandingPage extends GetURL {
  constructor() {
    super(Constants.URL.REL_URL.LANDING_PAGE);
  }

  override async get() {
    return Request.get<Types.LandingPage>(this.base);
  }
}

export default LandingPage;
