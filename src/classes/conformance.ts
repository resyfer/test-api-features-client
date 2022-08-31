import { GetURL } from "./url";
import Request from "./request";
import * as Types from "../types";

class Conformace extends GetURL {
  constructor() {
    super("/conformance");
  }

  override async get() {
    return Request.get<Types.LandingPage>(this.base);
  }
}

export default Conformace;
