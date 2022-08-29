import { FeatureGeoJSON } from "./featureGeo";
import { Link } from "./link";
import { numberMatched, numberReturned } from "./number";
import { timeStamp } from "./timestamp";

interface FeatureCollectionGeoJSON {
  type: FEAT_COL_GEO_TYPE;
  features: FeatureGeoJSON[];
  links?: Link[];
  timeStamp?: timeStamp;
  numberMatched?: numberMatched;
  numberReturned?: numberReturned;
}

enum FEAT_COL_GEO_TYPE {
  FEAT_COL = "FeatureCollection",
}

export type { FeatureCollectionGeoJSON };
