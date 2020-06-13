const db = require('./index.js');
const pokemon = require('../pokemon.json');

function seedInfo() {
    pokemon.forEach((poke) => {
        db.query(`INSERT INTO poke (pokeName, pokeType, pokeImg) VALUES ('${poke.name}', '${poke.type}', '${poke.img}');`, (err, result) => {
            if (err) {
                console.log('Failed Seeding', err)
            } else {
                console.log('Successful Seeding')
            }
        })
    })
    db.end();
}

seedInfo();
