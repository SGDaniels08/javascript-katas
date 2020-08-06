const convertNumeral = (number)=> {
    let numeral = ""
    
    if ( number % 10 === 10) { numeral += "X" }
    else if ( number % 10 === 9) { numeral += "IX" }
    else if ( number % 10 === 8) { numeral += "VIII" }
    else if ( number % 10 === 7) { numeral += "VII" }
    else if ( number % 10 === 6) { numeral += "VI" }
    else if ( number % 10 === 5) { numeral += "V" }
    else if ( number % 10 === 4) { numeral += "IV" }
    else if ( number % 10 === 3) { numeral += "III" }
    else if ( number % 10 === 2) { numeral += "II" }
    else if (number % 10 === 1) { numeral += "I" }
    else if ( number % 10 === 0)  { numeral += "X" }

    return numeral
}