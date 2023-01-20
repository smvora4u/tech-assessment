import { checkEnteredStringHasMatchedCurlyBrackets } from "./util";

describe("Check characters in the entered string is have matching curly brackets or not", () => {
  test("{} - True", () => {
    const result = checkEnteredStringHasMatchedCurlyBrackets("{}");

    expect(result).toBeTruthy();
  });
  test("}{ - False (closed bracket can't proceed all open brackets.)", () => {
    const result = checkEnteredStringHasMatchedCurlyBrackets("}{");

    expect(result).toBeFalsy();
  });
  test("{{} - False (one bracket pair was not closed)", () => {
    const result = checkEnteredStringHasMatchedCurlyBrackets("{{}");

    expect(result).toBeFalsy();
  });
  test('"" - True. (no brackets in the string will return True)', () => {
    const result = checkEnteredStringHasMatchedCurlyBrackets('""');

    expect(result).toBeTruthy();
  });
  test("{abc...xyz} - True (non-bracket characters are ignored appropriately)", () => {
    const result = checkEnteredStringHasMatchedCurlyBrackets("{abc...xyz}");

    expect(result).toBeTruthy();
  });
});
