import { FeatureGeoJSON } from "./featureGeo";
import { Link } from "./link";
import { NumberMatched, NumberReturned } from "./number";
import { TimeStamp } from "./timestamp";

interface FeatureCollectionGeoJSON {
  type: FEAT_COL_GEO_TYPE;
  features: FeatureGeoJSON[];
  links?: Link[];
  timeStamp?: TimeStamp;
  numberMatched?: NumberMatched;
  numberReturned?: NumberReturned;
}

enum FEAT_COL_GEO_TYPE {
  FEAT_COL = "FeatureCollection",
}

export type { FeatureCollectionGeoJSON };
