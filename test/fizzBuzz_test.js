import { expect, assert } from "chai"
import fizzBuzz from "../src/fizzBuzz"

describe("fizzBuzz()", function() {

  it("should return an array of numbers from 1 to 5", function(){
    const output = fizzBuzz(5)
    expect(output).to.deep.equal([1, 2, "Fizz", 4, "Buzz"])
  })
  console.log(fizzBuzz(15), '********************************')
  it("should return error if input is invalid", function() {
    const output = fizzBuzz('potato')
    expect(output).to.equal('error')
  })
})
