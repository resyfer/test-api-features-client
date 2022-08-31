import { GetURL } from "./url";
import Request from "./request";
import * as Types from "../types";

class Collections extends GetURL {
  constructor() {
    super("/collections");
  }

  async get() {
    return Request.get<Types.Collections>(this.base);
  }
}

class Collection extends GetURL {
  protected collectionId: string;

  constructor(collectionId: string) {
    super("/collections");
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
    super(`/collections/${collectionId}`);
    this.collectionId = collectionId;
  }

  async get() {
    return Request.get<Types.FeatureCollectionGeoJSON>(`${this.base}/items`);
  }
}

class CollectionItem extends GetURL {
  protected collectionId: string;
  protected featureId: string;

  constructor(collectionId: string, featureId: string) {
    super(`/collections/${collectionId}`);
    this.collectionId = collectionId;
    this.featureId = featureId;
  }

  override async get() {
    return Request.get<Types.FeatureGeoJSON>(
      `${this.base}/items/${this.featureId}`
    );
  }
}

export { Collections, Collection };
