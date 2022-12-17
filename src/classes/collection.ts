import { GetURL } from "./url";
import * as Types from "../types";
import * as Constants from "../constants";

class Collections extends GetURL<Types.Collections> {
  constructor() {
    super(Constants.URL.REL_URL.COLLECTIONS);
  }
}

class Collection extends GetURL<Types.Collection> {
  protected collectionId: string;

  constructor(collectionId: string) {
    super(`${Constants.URL.REL_URL.COLLECTIONS}/${collectionId}`);
    this.collectionId = collectionId;
  }

  items() {
    return new CollectionItems(this.collectionId);
  }

  item(featureId: string) {
    return new CollectionItem(this.collectionId, featureId);
  }
}

class CollectionItems extends GetURL<Types.FeatureCollectionGeoJSON> {
  protected collectionId: string;

  constructor(collectionId: string) {
    super(`${Constants.URL.REL_URL.COLLECTIONS}/${collectionId}/items`);
    this.collectionId = collectionId;
  }
}

class CollectionItem extends GetURL<Types.FeatureGeoJSON> {
  protected collectionId: string;
  protected featureId: string;

  constructor(collectionId: string, featureId: string) {
    super(
      `${Constants.URL.REL_URL.COLLECTIONS}/${collectionId}/items/${featureId}`
    );
    this.collectionId = collectionId;
    this.featureId = featureId;
  }
}

export { Collections, Collection };
