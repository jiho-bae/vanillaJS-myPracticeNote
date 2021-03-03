// practice array, object

const clog = (print) => {
  console.log(print);
};

// array => []
const arrayList = ["1", 2, 3, 4, true, "this is possible"];
clog(arrayList);
clog(arrayList[0]);

arrayList[0] = "this is changable. inner array!";
clog(arrayList);

// object => {}
const myObject = {
  name: "jiho",
  age: 27,
  height: 177,
  fav: "watch soccer",
};

clog(myObject);
clog(myObject["name"]);

myObject.name = "James";
clog(myObject.name);

// object in array
const objectInArray = [
  { name: "thomas", age: 21 },
  { name: "brown", age: 23 },
];

clog(objectInArray);
clog(objectInArray[0]);

//array in object
const arrayInObject = {
  name: "jiho",
  favColor: ["spacegray", "black", "ivory", "white"],
};

clog(arrayInObject);
clog(arrayInObject["favColor"]);
clog(arrayInObject.favColor[0]);

// mix both of them!!
const mixing = {
  name: "jiho",
  favColor: ["spacegray", "black"],
  age: 33,
  friendList: [
    { name: "thomas", age: 23, favColor: ["yellow", "teal"] },
    { name: "spiderman", age: 26, favColor: ["red", "black"] },
  ],
};
clog(mixing);
clog(mixing.friendList[0].age);
