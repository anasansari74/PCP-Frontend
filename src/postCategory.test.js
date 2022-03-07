import reducer from "./reducers/postCategory";
import * as actions from "./actions";
import expect from "expect";

describe("postedCategory reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual("Random");
  });

  it("should show the category to posted", () => {
    expect(reducer({}, actions.postCategory("Health"))).toEqual("Health");
  });
});
