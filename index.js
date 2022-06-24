function distanceFromHqInBlocks(pickUpLocation) { 
if (pickUpLocation > 42) {
    return pickUpLocation - 42
  } else {
  return 42 - pickUpLocation;
  }
}


function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}


function distanceTravelledInFeet(start, destination) {
  return distanceFromHqInFeet(start) - distanceFromHqInFeet(destination)
}
