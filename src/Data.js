const { Queue } = require('./Queue');

function users() {
  const userQ = new Queue();
  userQ.enqueue({ name: 'daniel', id: "1" });
  userQ.enqueue({ name: 'Badri', id: "2" });
  userQ.enqueue({ name: 'Brock', id: "3" });
  userQ.enqueue({ name: 'Phoebe', id: "4" });
  userQ.enqueue({ name: 'Kevin', id: "5" });

  return userQ;
}

function dogs() {
  const dogs = new Queue();
  dogs.enqueue({
    id: 1,
    imageURL: "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    imageDescription: "A large Rottweiler in a field",
    name: "Max",
    sex: "Male",
    age: 3,
    breed: "Rottweiler",
    story: "Was previously owned by a wealthy German count. Don't let his 130lb frame fool you; he is undoubtedly the worst guard dog imaginable."
  });
  dogs.enqueue({
    id: 2,
    imageURL: "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    imageDescription: "A smiling golden-brown golden retreiver listening to music.",
    name: "Shadow",
    sex: "Male",
    age: 3,
    breed: "Golden Retriever",
    story: "Was owned by a suburban family, but got separated. Took an incredible journey with another dog and a cat."
  });
  return dogs;
}

function cats() {
  const cats = new Queue();
  cats.enqueue({
    id: 1,
    imageURL: "https://www.thesprucepets.com/thmb/EYwC2xOwRMzj72UKfRINhoOjXME=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1152927326-91a042e750cf42abbbded1dc97b2dc6d.jpg",
    imageDescription: "A fluffy himilayan cat.",
    name: "Snowball",
    sex: "Male",
    age: 5,
    breed: "Himilayan",
    story: "Suffers PTSD from life as a therapy cat."
  });
  cats.enqueue({
    id: 2,
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRgyVTSYQv38uwUOSKj_fTAFGUwivw7aQEzsnvKZZVHCJVINP&s",
    imageDescription: "A tabby cat next to a river",
    name: "Matt Furry",
    sex: "Male",
    age: 4,
    breed: "Tabby",
    story: "Found living in a van, down by the river. This cat is prone to outbursts, but has a heart of gold."
  });
  cats.enqueue({
    id: 3,
    imageURL: "https://i.pinimg.com/originals/ae/b5/2f/aeb52fbd2c990b1a8d606ef51bfafce1.jpg",
    imageDescription: "A black cat wondering around the streets",
    name: "Selena",
    sex: "Female",
    age: 3,
    breed: "Other/Black",
    story: "Selena was found wondering around the streets of Gotham. Little is known about her life before the shelter, but she is known to have a love/hate relationship with bats."
  });

  return cats;
}

cats();
dogs();
users();

module.exports = {
  dogs,
  cats,
  users,
};
