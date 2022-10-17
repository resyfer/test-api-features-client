import { expect } from "chai";
import ogc from "../src";

describe("Collections", () => {
  describe("Collections Route", () => {
    it("Gives Collections Details", async () => {
      const res = await ogc.collections().get();

      const { status, data } = res;

      if (status == 200) {
        expect(data)
          .to.be.an("object")
          .that.has.property("links")
          .that.is.an("array");

        expect(data)
          .to.be.an("object")
          .that.has.property("collections")
          .that.is.an("array");

        data.links.forEach((link) => {
          expect(link)
            .to.be.an("object")
            .to.have.property("href")
            .to.be.a("string");
        });

        data.collections.forEach((collection) => {
          expect(collection)
            .to.be.an("object")
            .that.has.property("id")
            .that.is.a("string");

          collection.links.forEach((link) => {
            expect(link)
              .to.be.an("object")
              .that.has.property("href")
              .that.is.a("string");
          });
        });
      } else if (status !== 404) {
        expect(data)
          .to.be.an("object")
          .that.have.property("code")
          .that.is.a("string");

        expect(data)
          .to.be.an("object")
          .that.have.property("description")
          .that.is.a("string");
      }
    });

    it("Gives a Particular Collection Details", async () => {
      const responses = await Promise.all([
        ogc.collection("utah_city_locations").get(),
        ogc.collection("10").get(),
      ]);

      responses.forEach((res) => {
        const { status, data } = res;

        if (status === 200) {
          expect(data)
            .to.be.an("object")
            .that.has.property("id")
            .that.is.a("string");

          expect(data)
            .to.be.an("object")
            .that.has.property("links")
            .that.is.an("array");

          data.links.forEach((link) => {
            expect(link)
              .to.be.an("object")
              .that.has.property("href")
              .that.is.a("string");
          });
        } else {
          expect(data)
            .to.be.an("object")
            .that.have.property("code")
            .that.is.a("string");

          expect(data)
            .to.be.an("object")
            .that.have.property("description")
            .that.is.a("string");
        }
      });
    });
  });

  describe("Items Routes", () => {
    it("Give Items Details", async () => {
      const responses = await Promise.all([
        ogc.collection("obs").items().get(),
        ogc.collection("10").items().get(),
      ]);

      responses.forEach((res) => {
        const { status, data } = res;

        if (status === 200) {
          expect(data)
            .to.be.an("object")
            .that.has.property("type")
            .that.is.a("string");

          expect(data).that.has.property("features").that.is.an("array");

          data.features.forEach((feature) => {
            expect(feature)
              .that.is.an("object")
              .that.has.property("type")
              .that.is.a("string");

            expect(feature)
              .that.has.property("geometry")
              .that.has.property("type");

            expect(feature)
              .that.has.property("geometry")
              .that.has.property("coordinates");
          });
        } else {
          expect(data)
            .to.be.an("object")
            .that.has.property("code")
            .that.is.a("string");

          expect(data).that.has.property("description").that.is.a("string");
        }
      });
    });

    it("Gives a Particular Item Details", async () => {
      const responses = await Promise.all([
        ogc.collection("obs").item("1").get(),
        ogc.collection("10").item("1").get(),
      ]);

      responses.forEach((res) => {
        const { status, data } = res;

        if (status === 200) {
          expect(data)
            .to.be.an("object")
            .that.has.a.property("type")
            .that.is.a("string");

          expect(data)
            .that.has.a.property("geometry")
            .that.has.a.property("type")
            .that.is.a("string");

          expect(data)
            .that.has.a.property("geometry")
            .that.has.a.property("coordinates");
        } else {
          expect(data)
            .to.be.an("object")
            .that.has.property("code")
            .that.is.a("string");

          expect(data).that.has.property("description").that.is.a("string");
        }
      });
    });
  });
});