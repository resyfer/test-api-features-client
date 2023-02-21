import { expect } from "chai";
import ogc from "../../src";

describe("Landing Page", () => {
  it("Gives Landing Page Details", async () => {
    const res = await ogc.features.get();

    const { status, data } = res;
    expect(status).to.be.a("number");

    if (status === 200) {
      expect(data)
        .to.be.an("object")
        .to.has.property("links")
        .that.is.an("array");

      expect(data).to.has.property("title").that.is.an("string");

      expect(data).to.has.property("description").that.is.an("string");

      expect(data.links[0]).to.has.property("href").that.is.a("string");
    } else {
      expect(data)
        .to.be.an("object")
        .that.has.property("code")
        .that.is.a("string");

      expect(data).that.has.property("description").that.is.a("string");
    }
  });
});
