import * as Constants from "../constants";

/**
 * @description This is an abstract class that has
 * a base url property and a contructor that only
 * needs the relative url.
 */
abstract class URL {
  protected base: string;

  constructor(relative_url: string) {
    this.base = `${Constants.URL.BASE_URL}${relative_url}`;
  }
}

/**
 * @description **Abstract** class for methods that have GET
 * methods.
 */
abstract class GetURL extends URL {
  abstract get(): Promise<unknown>;
}

/**
 * @description **Abstract** class for methods that have GET
 * methods.
 */
// abstract class PostURL extends URL {
//   abstract post(): Promise<unknown>;
// }

/**
 *? @description In the case of wanting mulitple methods,
 *? the class has to extend only one of the abstract
 *? classes and implement the others as TS does allow multiple
 *? inheritance for classes
 */

export { GetURL };
