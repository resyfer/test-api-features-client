# test-api-features-client
Test Repo for Api Features Client

## Start API
Ensure docker is installed.

```bash
$ sudo docker pull geopython/pygeoapi
$ sudo docker run -p 5000:80 geopython/pygeoapi # Alternative: pnpm docker
```

Now the API is running on `http://localhost:5000`

## Installation
Have NodeJS & NPM installed. Clone the repo.
```
$ cd test-api-features-client
$ npm i -g pnpm
$ pnpm install
```

## Usage
```ts
import ogc from "<path-to-src-folder>";
```

## Accessing Routes
```ts
(async() => {
  await ogc.get() // Route: /, Method: GET
  await ogc.conformance().get(); // Route: /conformance, Method: GET
  await ogc.collections().get(); // Route: /collections, Method: GET
  await ogc.collection("collection_id").get(); // Route: /collections/collection_id, Method: GET
  await ogc.collection("collection_id").items().get(); // Route: /collections/collection_id/items, Method: GET
  await ogc.collection("collection_id").item("feature_id").get(); // Route : /collections/collection_id/items/feature_id, Method: GET
})();
```

in accordance to the [OGC Features API v1.0.1](https://app.swaggerhub.com/apis/OGC/ogcapi-features-1-example-1/1.0.1)

## Testing
Make sure [API is running](#start-api) and then

```bash
$ pnpm test
```

## Building
```bash
$ pnpm build
```
