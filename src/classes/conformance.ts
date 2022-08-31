import { GetURL } from "./url";
import Request from "./request";
import * as Types from "../types";
import * as Constants from "../constants";

class Conformace extends GetURL {
  constructor() {
    super(Constants.URL.REL_URL.CONFORMANCE);
  }

  override async get() {
    return Request.get<Types.LandingPage>(this.base);
  }
}

export default Conformace;
