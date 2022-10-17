import { GetURL } from "./url";
import Request from "./request";
import * as Types from "../types";
import * as Constants from "../constants";

/**
 * @description Conformance Methods
 */
class Conformace extends GetURL {
  constructor() {
    super(Constants.URL.REL_URL.CONFORMANCE);
  }

  override async get() {
    return Request.get<Types.ConfClasses>(this.base);
  }
}

export default Conformace;
