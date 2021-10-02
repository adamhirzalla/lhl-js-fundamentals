// The function returns one of the following strings, based on the value of age:

// Elementary School if age is below 13
// Secondary School if age is between 13 and 18 (both inclusive)
// Lighthouse Labs in all other cases.

const whichSchool = age => age < 13 ? "Elementary School" : age >= 13 && age <= 18 ? "Secondary School" : "Lighthouse Labs";
