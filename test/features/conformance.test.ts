import { expect } from "chai";
import ogc from "../../src";

describe("Conformance", () => {
  it("Gives Conformance Details", async () => {
    const res = await ogc.features.conformance().get();

    const { status, data } = res;
    expect(status).to.be.a("number");

    if (status === 200) {
      expect(data)
        .to.be.an("object")
        .that.has.property("conformsTo")
        .that.is.an("array");

      expect(data.conformsTo[0]).to.be.an("string");
    } else {
      expect(data)
        .to.be.an("object")
        .that.has.property("code")
        .that.is.a("string");

      expect(data).that.has.property("description").that.is.a("string");
    }
  });
});
