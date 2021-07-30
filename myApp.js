require('dotenv').config();

const secret = process.env.MONGO_URI;
const mongoose = require('mongoose');
mongoose.connect(secret, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] }
})

let Person = mongoose.model('Person', personSchema);


let person = { name: 'Max', age: 3, favoriteFoods: ['meat', 'cheese'] };

// let people = [
//   { name: 'Daniel', age: 54, favoriteFoods: ['bramboracka'] },
//   { name: 'Olessia', age: 36, favoriteFoods: ['borsc'] },
//   { name: 'Valeria', age: 25, favoriteFoods: ['sushi'] },
//   { name: 'Natalia', age: 18, favoriteFoods: ['chicken'] },
// ];

const createAndSavePerson = (done) => {
  Person.create(person, (err, person) => {
    if (err) done(err)
    done(null, person)
  })
};

const createManyPeople = (people, done) => {
  Person.create(people, (err, people) => {
    if (err) done(err)
    done(null, people)
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) done(err)
    done(null, people)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, food) => {
    if (err) done(err)
    done(null, food)
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) done(err)
    done(null, person)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger"
  Person.findById(personId, (err, person) => {
    if (err) done(err)
    person.favoriteFoods.push(foodToAdd)
    person.save((err, updatedPerson) => {
      if (err) done(err)
      done(null, updatedPerson)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, (err, updatedPerson) => {
      if (err) done(err)
      done(null, updatedPerson)
  })
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
