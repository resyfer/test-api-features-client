const BASE_URL = "http://localhost:8080";

// Will be split into multiple enums if extending enums is ever supported in TS
// https://github.com/Microsoft/TypeScript/issues/17592
enum REL_URL {
  FEATURES_LANDING_PAGE = "/",
  FEATURES_COLLECTIONS = "/collections",
  FEATURES_CONFORMANCE = "/conformance",
}

export { BASE_URL, REL_URL };
