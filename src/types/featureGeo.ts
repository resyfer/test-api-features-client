import { GeometryGeoJSON } from "./geometryGeo";
import { Link } from "./link";

interface FeatureGeoJSON {
  type: FEAT_GEO_TYPE;
  geometry: GeometryGeoJSON;
  properties?: any;
  id?: string | number;
  links?: Link[];
}

enum FEAT_GEO_TYPE {
  FEAT = "Feature",
}

export type { FeatureGeoJSON };
