let triple = function(x) {
    return x * 3
}

let animals = [
    { name: 'Fluff',  species: 'rabbit' },
    { name: 'Caro',   species: 'dog' },
    { name: 'Harold', species: 'dog' },
    { name: 'Ursula', species: 'fish' },
    { name: 'Jimmy',  species: 'cat' },
]

let dogs = [];
for ( let i = 0; i < animals.length; i++ ) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i])
    }
}
console.log(dogs);

let newArray = animals.filter('dog');
console.log(newArray);
