// HTTP -> AJAX -> XHR -> fetch() API
// XML.... instead of JSON!

//Ojbect to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify({ name: "Tom", age: 24 });
console.log(json);

// Json to Object
const lion = {
  name: "saja",
  color: "brown",
  size: null,
  birthDate: new Date(),
  roar: () => {
    console.log(`GGGRRRRRRRRR`);
  },
};
console.log(lion.birthDate.getDate());

json = JSON.stringify(lion);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);
try {
  obj.roar();
} catch (error) {
  console.log("json only inclues data, not function.");
}
