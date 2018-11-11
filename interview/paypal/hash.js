

// create a function that returns an object with keys that are the city names 
// and values as the average of all ages in that city

const people = [
    {name: "Jane",    city: "Honolulu",      age: 31},
    {name: "Chase",   city: "San Francisco", age: 22},
    {name: "Titus",   city: "Austin",        age: 28},
    {name: "Billy",   city: "Atlanta",       age: 42},
    {name: "Charlie", city: "Honolulu",      age: 60},
    {name: "Sally",   city: "Atlanta",       age: 52},
    {name: "Jane",    city: "Austin",        age: 33},
    {name: "Bob",     city: "Honolulu",      age: 18},
    {name: "Marcus",  city: "San Francisco", age: 67},
]

function getAvg(people){

    let hashTable = {};
    let cityTable = {};

    people.forEach(function(person){

        // Found old city. add another person age.

        if(hashTable[person.city]){
            cityTable[person.city] += 1;
            hashTable[person.city] = hashTable[person.city] + person.age;
        }

        // New city found, add first entry.

        else{
            hashTable[person.city] = person.age;
            cityTable[person.city] = 1;
        }
    })


    Object.keys(hashTable).forEach(function(city) {
        let age = hashTable[city];
        let avg = age / cityTable[city];
        hashTable[city] = avg;
    });

    return hashTable;
}

getAvg(people);


// ------------------------------------------------------------//