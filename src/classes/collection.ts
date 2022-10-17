import { GetURL } from "./url";
import Request from "./request";

import * as Types from "../types";
import * as Constants from "../constants";

class Collections extends GetURL {
  constructor() {
    super(Constants.URL.REL_URL.COLLECTIONS);
  }

  async get() {
    return Request.get<Types.Collections>(this.base);
  }
}

class Collection extends GetURL {
  protected collectionId: string;

  constructor(collectionId: string) {
    super(Constants.URL.REL_URL.COLLECTIONS);
    this.collectionId = collectionId;
  }

  async get() {
    return Request.get<Types.Collection>(`${this.base}/${this.collectionId}`);
  }

  items() {
    return new CollectionItems(this.collectionId);
  }

  item(featureId: string) {
    return new CollectionItem(this.collectionId, featureId);
  }
}

class CollectionItems extends GetURL {
  protected collectionId: string;

  constructor(collectionId: string) {
    super(`${Constants.URL.REL_URL.COLLECTIONS}/${collectionId}/items`);
    this.collectionId = collectionId;
  }

  async get() {
    return Request.get<Types.FeatureCollectionGeoJSON>(this.base);
  }
}

class CollectionItem extends GetURL {
  protected collectionId: string;
  protected featureId: string;

  constructor(collectionId: string, featureId: string) {
    super(
      `${Constants.URL.REL_URL.COLLECTIONS}/${collectionId}/items/${featureId}`
    );
    this.collectionId = collectionId;
    this.featureId = featureId;
  }

  override async get() {
    return Request.get<Types.FeatureGeoJSON>(this.base);
  }
}

export { Collections, Collection };
