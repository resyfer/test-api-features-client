interface pointGeoJSON {
  type: "Point";
  coordinates: number[];
}

interface multipointGeoJSON {
  type: "MultiPoint";
  coordinates: number[][];
}

interface linestringGeoJSON {
  type: "LineString";
  coordinates: number[][];
}

interface multilinestringGeoJSON {
  type: "MultiLineString";
  coordinates: number[][][];
}

interface polygonGeoJSON {
  type: "Polygon";
  coordinates: number[][][];
}

interface multipolygonGeoJSON {
  type: "MultiPolygon";
  coordinates: number[][][][];
}

interface geometrycollectionGeoJSON {
  type: "GeometryCollection";
  geometries: geometryGeoJSON[];
}

type geometryGeoJSON =
  | pointGeoJSON
  | multipointGeoJSON
  | linestringGeoJSON
  | multilinestringGeoJSON
  | polygonGeoJSON
  | multipolygonGeoJSON
  | geometrycollectionGeoJSON;

export type {
  geometryGeoJSON,
  pointGeoJSON,
  multipointGeoJSON,
  linestringGeoJSON,
  multilinestringGeoJSON,
  polygonGeoJSON,
  multipolygonGeoJSON,
  geometrycollectionGeoJSON,
};
