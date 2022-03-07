import reducer from "./reducers/thoughtToPost";
import * as actions from "./actions";
import expect from "expect";

describe("thoughtToPost reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual("");
  });

  it("should show the thought to be posted", () => {
    expect(
      reducer(
        {},
        actions.thoughtToPost(
          "Train you mind to see the good in every situation"
        )
      )
    ).toEqual("Train you mind to see the good in every situation");
  });
});
