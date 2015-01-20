var expect = require("chai").expect;
var SimpleSample = require("../src/simple_sample.js");

describe("Simple Sample", function () {
  it("addition should work in our test suite", function () {
    expect(2+2).to.eq(4);
  });

  describe(".addTwoNumbers", function () {
    it("should return the correct result of adding two numbers together", function() {
      expect(SimpleSample.addTwoNumbers(2, 2)).to.eq(4);
    });
  });

  // write a simple describe for a function with the name .subtractTwoNumbers
  // inside the describe, write an 'it' and a single test case to verify the function works
  // then write the function in simple_sample.js, to get the test to pass
});
