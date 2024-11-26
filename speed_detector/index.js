// // write code here
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      // console.log("Ok");
      return "ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints > 12) {
        return "License suspended due too many demerit points.";
      } else {
         return `Demerit points: ${demeritPoints}`;
      }
    }
  }

let motorSpeed = 100;
console.log(`The speed of the car ${motorSpeed} km/hr has checkspeed result of: ${checkSpeed(motorSpeed)}`);


// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerDemeritPoint = 5;

//   if (speed <= speedLimit) {
//     return "Ok";
//   } else {
//     const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
//     if (demeritPoints > 12) {
//       return "License suspended due to too many demerit points.";
//     } else {
//       return `Demerit points: ${demeritPoints}`;
//     }
//   }
// }

// let motorSpeed = 100;
// console.log(`The speed of the car ${motorSpeed} km/hr has check speed result: ${checkSpeed(motorSpeed)}`);
