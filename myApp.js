require('dotenv').config();

const secret = process.env.MONGO_URI;
const mongoose = require('mongoose');
mongoose.connect(secret, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
})

let Person = mongoose.model('Person', personSchema);


let person = new Person({name: 'Max', age: 3, favoriteFoods: ['meat', 'cheese']})

let people = [
  { name: 'Daniel', age: 54, favoriteFoods: ['bramboracka'] },
  { name: 'Olessia', age: 36, favoriteFoods: ['borsc'] },
  { name: 'Valeria', age: 25, favoriteFoods: ['sushi'] },
  { name: 'Natalia', age: 18, favoriteFoods: ['chicken'] },
];

const createAndSavePerson = (done) => {
  Person.create(person, (err, data) => {
    if (err) done(err)
    done(null, data)
  })
};

const createManyPeople = (done) => {
  Person.create(people, (err, data) => {
    if (err) done(err)
    done(null, data)
  })
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
