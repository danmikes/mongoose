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
  Person.create(person, (err, createdPerson) => {
    if (err) done(err)
    done(null, createdPerson)
  })
};

const createManyPeople = (people, done) => {
  Person.create(people, (err, createdPeople) => {
    if (err) done(err)
    done(null, createdPeople)
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, foundPeople) => {
    if (err) done(err)
    done(null, foundPeople)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, foundFood) => {
    if (err) done(err)
    done(null, foundFood)
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, foundPerson) => {
    if (err) done(err)
    done(null, foundPerson)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger"
  Person.findById(personId, (err, foundPerson) => {
    if (err) done(err)
    foundPerson.favoriteFoods.push(foodToAdd)
    foundPerson.save((err, updatedPerson) => {
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
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) done(err)
    done(null, removedPerson)
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (err, response) => {
    if (err) done(err)
    done(null, response)
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 'ascending' })
    .limit(2)
    .select({ age: 0 })
    .exec((err, foundPeople) => {
      if (err) done(err)
      done(null, foundPeople);
    })
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
