import { GetURL } from "./url";
import * as Types from "../types";
import * as Constants from "../constants";

class Conformace extends GetURL<Types.ConfClasses> {
  constructor() {
    super(Constants.URL.REL_URL.CONFORMANCE);
  }
}

export default Conformace;
