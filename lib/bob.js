var bob = {
  toEqual: function(property, expectedValue, description) {
    console.log("You are testing: " + description)
    if (!(property === expectedValue)) {
      throw new Error("Expected: " + property + " to equal " + expectedValue);
    }
    console.log("Your test passed!")
  }
};
