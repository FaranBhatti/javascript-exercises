const findTheOldest = function(people) {
    let sortedPeopleByAge =  people.sort((firstPerson, secondPerson) => {

        const currentYear = new Date().getFullYear();

        let firstPersonAge = (firstPerson.yearOfDeath || currentYear) - firstPerson.yearOfBirth;
        let secondPersonAge = (secondPerson.yearOfDeath || currentYear) - secondPerson.yearOfBirth;

        if (firstPersonAge > secondPersonAge) {
            return -1;
        } else {
            return 1;
        }
    });
    return sortedPeopleByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;