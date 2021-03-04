// practice variable
// const, var

const clog = (print) => {
  console.log(print);
};

try {
  const nonChange = 1;
  clog(nonChange);
  nonChange = 2;
  clog(nonChange);
} catch (error) {
  clog("you cant change const");
}

try {
  let changeable = 1;
  clog(changeable);
  changeable = 2;
  clog(changeable);
} catch (error) {
  clog("you can't change let");
}
