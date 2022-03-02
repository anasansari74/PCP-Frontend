import reducer, { changeQuote } from "./reducers/getThought";

test("check that state changes", () => {
  expect(
    reducer(
      undefined,
      changeQuote(
        "Keep your face always toward the sunshine—and shadows will fall behind you."
      )
    ).value
  ).toEqual(
    "Keep your face always toward the sunshine—and shadows will fall behind you."
  );
});
