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

function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  bob.isTrue(circle.radius === 10);
};

testCircleRadiusDefaultsTo10();
