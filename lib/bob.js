
var bob = {
  toEqual: function(property, expectedValue, description) {
    console.log("You are testing: " + description)
    if (!(property === expectedValue)) {
    throw new Error("Expected: " + property + " to equal " + expectedValue);
    }
    console.log("Your test passed!")
  }
};


function expect(actual) { 
  return {
    toEqual: function(expected) { 
      if (actual == expected) {
        console.log("Pass")
      } else {
        console.log("Fail. Expected:  " + actual + " to equal " + expected)
      }
    },
    toChangeBy: function(number) {
      if(expected.constructor.length - actual.constructor.length == number ) {
        console.log("Pass")
      } else {
        console.log("Fail. Expected: ")
      }
  }
} 
}
