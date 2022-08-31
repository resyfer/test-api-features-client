import { Collection, Collections } from "./classes/collection";
import Conformace from "./classes/conformance";
import LandingPage from "./classes/landingPage";

class OGC {
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

export default OGC;
