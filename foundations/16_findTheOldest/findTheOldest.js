const findTheOldest = function(arr) {
    let oldestAge = 0
    let chosenPerson = null
    arr.forEach((person)=>{
        let age = null
        if(!person.yearOfDeath) age = new Date().getFullYear() - person.yearOfBirth
        else age = person.yearOfDeath - person.yearOfBirth

        if(age>oldestAge) {
            chosenPerson = person
            oldestAge = age
        }
    })
    return chosenPerson
};

// Do not edit below this line
module.exports = findTheOldest;
