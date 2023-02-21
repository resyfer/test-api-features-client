import { Collection, Collections } from "./collection";
import Conformace from "./conformance";
import LandingPage from "./landingPage";

class Features {
  static get() {
    return new LandingPage().get();
  }

  static conformance() {
    return new Conformace();
  }

  static collections() {
    return new Collections();
  }

  static collection(collection_id: string) {
    return new Collection(collection_id);
  }
}

export default Features;
