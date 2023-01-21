import StringTest from ".";

describe("Check characters in the entered string is have matching curly brackets or not", () => {
  test("{} - True", () => {
    const result = StringTest.hasMatchedCurlyBrackets({str: "{}"});

    expect(result).toBeTruthy();
  });
  test("}{ - False (closed bracket can't proceed all open brackets.)", () => {
    const result = StringTest.hasMatchedCurlyBrackets({str: "}{"});

    expect(result).toBeFalsy();
  });
  test("{{} - False (one bracket pair was not closed)", () => {
    const result = StringTest.hasMatchedCurlyBrackets({str: "{{}"});

    expect(result).toBeFalsy();
  });
  test('"" - True. (no brackets in the string will return True)', () => {
    const result = StringTest.hasMatchedCurlyBrackets({str: '""'});

    expect(result).toBeTruthy();
  });
  test("{abc...xyz} - True (non-bracket characters are ignored appropriately)", () => {
    const result = StringTest.hasMatchedCurlyBrackets({str: "{abc...xyz}"});

    expect(result).toBeTruthy();
  });
});
