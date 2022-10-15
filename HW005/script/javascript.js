//  1  //

let obj = {
  name: "John",
  age: 30,
  hellofunc: function (){
    console.log(`hello ${obj.name}`);
  },
};

//  2  //

let objvalue = {
  value: 0,
  increment: () => {
    objvalue.value += 1;
  },
  decremnt: () => {
    objvalue.value -= 1;
  },
  reset: () => {
    objvalue.value = 0;
  }
}
console.log(objvalue.value);

objvalue.increment()

console.log(objvalue.value)

objvalue.increment()

console.log(objvalue.value);

objvalue.decremnt()

objvalue.reset();

console.log(objvalue.value);


//  3  //

let infoo = [
  {
    name: "taha1",
    age: 15,
  },
  {
    name: "taha2",
    age: 13,
  },
  {
    name: "taha3",
    age: 18,
  },
  {
    name: "taha4",
    age: 18,
  },
];
console.log("Original order are:");
console.log(infoo);
let sortedinfoo = infoo.sort((p1, p2) =>
  p1.age < p2.age ? 1 : p1.age > p2.age ? -1 : 0
);

console.log("infoo sorted based on descending order of their age:");
console.log(sortedinfoo);

//  4  //

// in the designated folder

 //  5  //
 function ask(question, yes, no) {
   if (confirm(question)) yes();
   else no();
 }
 ask(
   "Do you agree?",
   function () {
     alert("You agreed.");
   },
   function () {
     alert("You canceled the execution.");
   }
 );

let ask = (question,yes,no) => {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    () => {
     alert("You agreed.");

    },
    () => {
     alert("You canceled the execution.");
   }

);
