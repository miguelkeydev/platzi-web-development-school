// For this challenge, the "solution" function will receive three parameters:
// names: An array of strings with several names
// deathCount: An integer number
// newStudent: A string with a newStudent name that didn't belong to the "names" array before

// The function must return an array of elements with:
// If "deathCount" if equal to 0, you should return an array with the same elements of the array "names" and adding the "newStudent" element at the end of the array
// If "deathCount" if greater than 0, you must return an array with the same elements of the array "names" but removing the quantity of names that "deathCount" indicates and adding the "newStudent" element at the end of the array

function solution(students, deathCount, newStudent) {
  if (deathCount === 0) {
    students.push(newStudent);
    return students;
  } else {
    for (let i = 0; i < deathCount; i++) {
      students.pop("");
    }
    students.push(newStudent);
    return students;
  }
}

solution(["Pedro", "Mike", "Tris", "Jordan", "John", "Ryan", "James"], 2, "Peter")