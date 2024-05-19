const getAge = person => {
    let age;
    if ('yearOfDeath' in person) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        const currentYear = new Date().getFullYear();
        age = currentYear - person.yearOfBirth;
    }
    return age;
}

const findTheOldest = function(people) {
    let oldest = people.reduce((oldestPerson, currentPerson) => {
        return getAge(oldestPerson) < getAge(currentPerson) ? currentPerson : oldestPerson;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
