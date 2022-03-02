import reducer from "./reducers/getThought";
import * as actions from "./actions";
import expect from "expect";

describe("getThought reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(
      "Press the button below to generate a new quote"
    );
  });

  it("should get a new thought", () => {
    expect(
      reducer(
        {},
        actions.changeQuote(
          "Keep your face always toward the sunshine—and shadows will fall behind you."
        )
      )
    ).toEqual(
      "Keep your face always toward the sunshine—and shadows will fall behind you."
    );
  });
});
