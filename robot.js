class Robot {
  constructor() {
    this.arr = ["me", "i", "thank", "you", "for", "already", "know", "understand", "teaching"];
  }

  learnWord(word) {

    if (!/^[a-zA-Z]+$/.test(word)) {
      return "I do not understand the input";
    }

    const str = word.toLowerCase();

   
    if (this.arr.includes(str)) {
      return `I already know the word ${word}`;
    }

    
    this.arr.push(str);
    return `Thank you for teaching me ${word}`;
  }
}