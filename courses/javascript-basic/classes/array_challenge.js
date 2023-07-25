// In this challenge you're going to recieve a parameter "secretArray". You must return true if the first element of "secretArray" is type "string" and you must return false if it's any other type

function solution(secretArray) {
  if (typeof secretArray[0] === "string") {
    return true;
  } else {
    return false;
  }
}