const convertNumeral = (number)=> {
    let numeral = ""
    
while (number !== 0) {    

    if (number >= 50) {
        numeral += "L"
        number -= 50
        continue
    }
    if (number >= 40) {
        numeral += "XL"
        number -= 40
        continue
    }
    if (number >= 10) {
        numeral += "X"
        number -= 10  
        continue      
    }
    if (number >= 9) {
        numeral += "IX"
        number -= 9      
        continue
    }
    if (number >= 5) {
        numeral += "V"
        number -= 5   
        continue   
    }
    if (number >= 4) { 
        numeral += "IV"
        number -= 4
        continue        
    }
    if (number >= 1) { 
        numeral += "I"
        number -= 1 
    }
}
    return numeral
}