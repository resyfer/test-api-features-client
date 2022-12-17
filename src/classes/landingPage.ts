import { GetURL } from "./url";
import * as Types from "../types";
import * as Constants from "../constants";

class LandingPage extends GetURL<Types.LandingPage> {
  constructor() {
    super(Constants.URL.REL_URL.LANDING_PAGE);
  }
}

export default LandingPage;
