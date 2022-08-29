interface Extent {
  spatial?: {
    bbox?: number[][];
    crs?: CRS_REF_SYSTEM;
  };
  temporal?: {
    interval?: string[][];
    trs?: TRS_REF_SYSTEM;
  };
}

enum CRS_REF_SYSTEM {
  WGS_84_LONG_LAT = "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
}

enum TRS_REF_SYSTEM {
  GREGORIAN_CALENDAR = "http://www.opengis.net/def/uom/ISO-8601/0/Gregorian",
}

export type { Extent };
