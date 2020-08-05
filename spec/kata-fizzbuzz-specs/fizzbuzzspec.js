describe("When the player selects 1", ()=> {
    it("should say '1'", ()=> {
        expect(fizzBuzz(1)).toBe("1");
    })
})

describe("When the player selects 2", ()=> {
    it("should say '2'", ()=> {
        expect(fizzBuzz(2)).toBe("2");
    })
})

describe("When the player selects 3", ()=> {
    it("should say 'Fizz'", ()=> {
        expect(fizzBuzz(3)).toBe("Fizz");
    })
})

describe("When the player selects 4", ()=> {
    it("should say '4'", ()=> {
        expect(fizzBuzz(4)).toBe("4");
    })
})

describe("When the player selects 5", ()=> {
    it("should say 'Buzz'", ()=> {
        expect(fizzBuzz(5)).toBe("Buzz");
    })
})

describe("When the player selects 8", ()=> {
    it("should say '8'", ()=> {
        expect(fizzBuzz(8)).toBe("8");
    })
})

describe("When the player selects 9", ()=> {
    it("should say 'Fizz'", ()=> {
        expect(fizzBuzz(9)).toBe("Fizz");
    })
})

describe("When the player selects 10", ()=> {
    it("should say 'Buzz'", ()=> {
        expect(fizzBuzz(10)).toBe("Buzz");
    })
})

describe("When the player selects 15", ()=> {
    it("should say '15'", ()=> {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
})

describe("When the player selects 32", ()=> {
    it("should say '32'", ()=> {
        expect(fizzBuzz(32)).toBe("32");
    })
})
describe("When the player selects 85", ()=> {
    it("should say 'Buzz'", ()=> {
        expect(fizzBuzz(85)).toBe("Buzz");
    })
})

describe("When the player selects 90", ()=> {
    it("should say 'FizzBuzz'", ()=> {
        expect(fizzBuzz(90)).toBe("FizzBuzz");
    })
})