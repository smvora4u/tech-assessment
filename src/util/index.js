export const checkEnteredStringHasMatchedCurlyBrackets = (str) => {
    const enteredString = str.trim();
    let bracketsInString = [];
    
    bracketsInString = enteredString.split('').filter((char) => {
      return char === "{" || char === "}";
    });
  
    if (bracketsInString.length === 0) {
      return true;
    }
  
    const openBrackets = bracketsInString.filter(char => char === '{');
    const closeBrackets = bracketsInString.filter(char => char === '}');
  
    if(bracketsInString[0] === '{' && openBrackets.length === closeBrackets.length) {
      return true;
    } else {
      return false;
    }
  };