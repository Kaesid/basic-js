const CustomError = require("../extensions/custom-error");

const positionOfA = 65;
const alphabetCount = 26;

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.textSheet();
  }

  textSheet() {
    this.alphabet = "";
    this.codeTable = [...Array(alphabetCount)].map((e) =>
      Array(alphabetCount).fill("")
    );
    for (let i = 0; i < alphabetCount; i++) {
      this.alphabet += String.fromCharCode(positionOfA + i);
      for (let j = 0; j < alphabetCount; j++) {
        if (i + j < alphabetCount) {
          this.codeTable[i][j] = String.fromCharCode(positionOfA + i + j);
        } else {
          this.codeTable[i][j] = String.fromCharCode(
            positionOfA + i + j - alphabetCount
          );
        }
      }
    }
  }

  check(text, key) {
    if (text === undefined || key === undefined) {
      throw Error("Params not found");
    }
    this.plainText = "";
    this.text = text.toUpperCase().trim();
    key = key.toUpperCase().trim();
    this.key = key;
    for (let i = 0; i < this.text.length; i++) {
      if (text[i].match(/[A-Z]/i)) {
        this.plainText += this.text[i];
      }
    }
    const a = this.plainText.length;
    const b = key.length;

    if (a > b) {
      for (let i = 0; i < a - b; i++) {
        let temp = i;
        while (temp >= b) {
          temp -= b;
        }
        this.key += key[temp];
      }
    }
  }

  revIt(text) {
    return text.split("").reverse().join("");
  }

  encrypt(text, key) {
    let finalWord = "";
    this.check(text, key);
    let n = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.text[i].match(/[A-Z]/i)) {
        finalWord += this.codeTable[
          this.plainText[n].charCodeAt() - positionOfA
        ][this.key[n].charCodeAt() - positionOfA];
        n++;
      } else {
        finalWord += text[i];
      }
    }
    if (!this.type) return this.revIt(finalWord);
    return finalWord;
  }

  decrypt(text, key) {
    let finalWord = "";
    this.check(text, key);
    let n = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.text[i].match(/[A-Z]/i)) {
        for (let j = 0; j < alphabetCount; j++) {
          if (
            this.plainText[n] ===
            this.codeTable[this.key[n].charCodeAt() - positionOfA][j]
          ) {
            finalWord += this.codeTable[j][0];
            break;
          }
        }
        n++;
      } else {
        finalWord += text[i];
      }
    }
    if (!this.type) return this.revIt(finalWord);
    return finalWord;
  }
}

module.exports = VigenereCipheringMachine;
