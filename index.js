function scuberGreetingForFeet(rideDistance) {
  // Write your code here!
  let result;
  if (rideDistance <= 400) {
    result = "This one is on me!";
  } else if (rideDistance > 400 && rideDistance <= 2000) {
    result = "That will be twenty bucks.";
  } else if (rideDistance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city) {
  // Write your code here!
  let result;
  if (city === "NYC") {
    result = "Ok, sounds good.";
  } else {
    result = "No go.";
  }
  return result;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let result;
  if (tip === "generous") {
    result = "Thank you so much.";
  } else if (tip === "not as generous") {
    result = "Thank you.";
  } else {
    result = "Bye.";
  }
  return result;
}
