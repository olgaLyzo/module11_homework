

var prompt = require("prompt");
const check = require('./index.js').check;

describe("tests for check function", () => {
	it("should operate correctly with odd number, even number and another type data", ()=>{
	  expect(check(4)).toBe("its an even number");
	  expect(check(7)).toBe("its an odd number");
	  expect(check("hello")).toBe("you write uncorrect data");
	});
});

