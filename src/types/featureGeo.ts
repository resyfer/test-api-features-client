import { geometryGeoJSON } from "./geometryGeo";
import { Link } from "./link";

interface FeatureGeoJSON {
  type: FEAT_GEO_TYPE;
  geometry: geometryGeoJSON;
  properties?: any;
  id?: string | number;
  links?: Link[];
}

enum FEAT_GEO_TYPE {
  FEAT = "Feature",
}

export type { FeatureGeoJSON };
