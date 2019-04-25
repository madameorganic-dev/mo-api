function generateRandomString(stringLength: number): string {
  let randomString = "";
  let randomAscii;
  const asciiLow = 65;
  const asciiHigh = 90;
  for (let i = 0; i < stringLength; i += 1) {
    randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
    randomString += String.fromCharCode(randomAscii);
  }
  return randomString;
}

function generateRandomNumber(): number {
  const numLow = 1;
  const numHigh = 9;
  return Math.floor((Math.random() * (numHigh - numLow)) + numLow);
}

export function generateRandomAlphaNumericString(size: number = 3): string {
  return generateRandomString(size) + generateRandomNumber();
}
