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
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Max',
    sex: 'Male',
    age: 3,
    breed: 'Rottweiler',
    story: 'Owner Passed away',
  });
  dogs.enqueue({
    id: 2,
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Shadow',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  });
  dogs.enqueue({
    id: 3,
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Chance',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  });
  dogs.enqueue({
    id: 4,
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Absolute Unit',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  });

  return dogs;
}

function cats() {
  const cats = new Queue();
  cats.enqueue({
    id: 1,
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Big Cat',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  });
  cats.enqueue({
    id: 2,
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Little Cat',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  });
  cats.enqueue({
    id: 3,
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Grey Cat',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
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
