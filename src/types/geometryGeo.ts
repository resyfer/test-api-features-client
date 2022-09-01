interface PointGeoJSON {
  type: "Point";
  coordinates: number[];
}

interface MultipointGeoJSON {
  type: "MultiPoint";
  coordinates: number[][];
}

interface LinestringGeoJSON {
  type: "LineString";
  coordinates: number[][];
}

interface MultilinestringGeoJSON {
  type: "MultiLineString";
  coordinates: number[][][];
}

interface PolygonGeoJSON {
  type: "Polygon";
  coordinates: number[][][];
}

interface MultipolygonGeoJSON {
  type: "MultiPolygon";
  coordinates: number[][][][];
}

interface GeometrycollectionGeoJSON {
  type: "GeometryCollection";
  geometries: GeometryGeoJSON[];
}

type GeometryGeoJSON =
  | PointGeoJSON
  | MultipointGeoJSON
  | LinestringGeoJSON
  | MultilinestringGeoJSON
  | PolygonGeoJSON
  | MultipolygonGeoJSON
  | GeometrycollectionGeoJSON;

export type { GeometryGeoJSON };
