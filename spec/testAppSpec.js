// (function() {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();
//
//     if (circle.radius !== 10) {
//       throw new Error("Circle size is not 10");
//       return
//     }
//     console.log("radius is 10");
//   };
//
//   testCircleRadiusDefaultsTo10();
// })();

function circleTruth() {
  let description = "if property is true on construction"
  let circle = new Circle();
  bob.toEqual(circle.property, true, description);
};

function circleRadiusCheck() {
  let description = "if circle radius is 10 on construction"
  let circle = new Circle();
  bob.toEqual(circle.radius, 10, description);
};

circleTruth();
circleRadiusCheck();
