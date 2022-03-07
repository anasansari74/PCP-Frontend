import reducer from "./reducers/selectedCategory";
import * as actions from "./actions";
import expect from "expect";

// test("check that category is selected or random", () => {
//   expect(reducer(undefined, selectedCategory("Health")).value).toEqual(
//     "Health"
//   );
// });

describe("selectedCategory reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual("Random");
  });

  it("should get a show which category is selected", () => {
    expect(reducer({}, actions.selectCategory("Health"))).toEqual("Health");
  });
});
