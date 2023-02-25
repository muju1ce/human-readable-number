module.exports = function toReadable (number) {
    // Your task is to implement function toReadable that converts given number, to readable string.
    
    // toReadable(1); // Will return 'one'
    // toReadable(997); //will return 'nine hundred ninety seven'

    if (number === 0) {
        return "zero";
    }

    if (number < 0) {
    return "minus" + toReadable(-number);
    }

    let word = "";

    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const scales = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion"];

    let scaleIndex = 0;

    while (number > 0) {
        const hundreds = Math.floor(number % 1000 / 100);
        const tensAndOnes = Math.floor(number % 100 );
    }

    if (hundreds > 0) {
        words = ones[hundreds] + "hundred" + words;
    }

    if (tensAndOnes > 0) {
        if (tensAndOnes < 10) {
          words = ones[tensAndOnes] + " " + words;
        } else if (tensAndOnes < 20) {
          words = teens[tensAndOnes - 10] + " " + words;
        } else {
          words = tens[Math.floor(tensAndOnes / 10)] + " " + ones[tensAndOnes % 10] + " " + words;
        }
      }
  
      number = Math.floor(number / 1000);
      scaleIndex++;
      
      if (number > 0) {
        words = scales[scaleIndex] + " " + words;
      }
    
  
    return words.trim();

}


