// In this challenge you're going to receive a 'car' object as parameter of the function 'solution'
// You must validate that 'car' has the property 'licensePlate'. If the property exists, you must add another property called 'drivingLicense' as true. If it doesn't exist, 'drivingLicense' value should be false

function solution(car) {
  if (car.licensePlate) {
    car.drivingLicense = true;
  } else {
    car.drivingLicense = false;
  }

  return car;
}

solution({ color: 'green', licensePlate: 'BOX073' }) // drivingLicense: true;
solution({color: 'red'}) // drivingLicese: false;