import { useState } from "react";
import "./App.css";

import { checkEnteredStringHasMatchedCurlyBrackets } from "./util";

const validStringMsg = "has valid numbers and sequence of '{}' brackets.";
const inValidStringMsg = "has not valid numbers and sequence of '{}' brackets.";

function App() {
  const [validationMsg, setValidationMsg] = useState("");
  const [testString, setTestString] = useState("");
  const [isValid, setIsValid] = useState();

  const testStringClickHandler = () => {
    const enteredString = testString.trim();
    if (enteredString === "") {
      setValidationMsg(
        "Please enter a string to test, only space is also not allowed!"
      );
      setIsValid(false);
    }

    if (checkEnteredStringHasMatchedCurlyBrackets(testString)) {
      setValidationMsg(enteredString + " - " + validStringMsg);
      setIsValid(true);
    } else {
      setValidationMsg(enteredString + " - " + inValidStringMsg);
      setIsValid(false);
    }
  };

  return (
    <>
      <div>
        <label for="validCurlyBrackets">
          Please enter string to test whether it has valid numbers and sequence
          of curly brackets.
        </label>
      </div>
      <hr />
      <input
        type="text"
        id="validCurlyBrackets"
        value={testString}
        className={isValid === undefined ? "" : isValid ? "valid" : "invalid"}
        onChange={(e) => setTestString(e.target.value)}
      />
      <button onClick={testStringClickHandler}>Test String!</button>
      <hr />
      <div className={isValid ? "valid" : "invalid"}>{validationMsg}</div>
    </>
  );
}

export default App;
