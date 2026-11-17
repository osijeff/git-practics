// // js variable
// // // data types
// // operators
// // functions
// // oop
// // DOM
// // event
// // control structure

// // alert("HEllo world")
//  let age = 25;

//  console.log(Age)
// let car_age = 45
// car_age-=67

// a += 3;   // a = a + 3  → 8
// a -= 2;   // a = a - 2  → 6
// a *= 4;   // a = a * 4  → 24
// a /= 3;   // a = a / 3  → 8
// a %= 5;   // a = a % 5  → 3
// a **= 2;  // a = a ** 2 → 9
// let a = 10, b = 3;
// console.log(a % b);  // 13

// let x = null;
// let y = 10;

// console.log(x>y && y< 12)

// console.log(true && true); 
// console.log(false && false);
// console.log(false || true);   // true
// console.log(false || false);  // false

// console.log(!true);   // false
// console.log(!false);  // true
// console.log(!!0);     // false (double NOT converts to boolean)

// let age3 =25
// let hasLicense = !true

// if(age3 >= 18 || hasLicense){
//    console.log("you can drive")  
// } else{
//      console.log("you can't drive")
// }

// age3 >= 18 || hasLicense ?   console.log("you can drive") :  console.log("you can't drive")


// function add(a, b){
//      return a+b
// }

// let result = add(4,7)
// console.log(result)
// console.log(add(5,8))
// console.log(add(9,10))
// console.log(add(45,90))
// console.log(add(80,34))

// let name2 ="Lerato"
// let age1 =56
// function greet(name){

//      let age1 = 45
     
//      return `Hello   ${name}  "you are a nice person" and your are  ${age1}    years old `
   
// }

// console.log(greet(name2))
// console.log(age1)


// sayHello()


// function  sayHello(){

// }


// // object literal

// let person = {
//      name : "Alice",
//      age:30,
//      height:5.6,
//      weight: 260,
//      eye_color:"brown",
//      greet: function(){
//           console.log(`Hello, i'm ${this.name}`)
//      }
// }
// person.greet()
// console.log(person.name)


// let person2={
//  name : "Mary",
//      age:30,
//      height:5.6,
//      weight: 260,
//      eye_color:"brown",
//      greet: function(){
//           console.log(`Hello, i'm ${this.name}`)
//      }
// }

// // object constructor

// const car = new Object()
// car.name = "VW";
// car.model = "GTI";
// car.color="red"

// car.start = function(){
//      console.log("car stated")
// }
// car.stop = function(){
//      console.log("car stopped")
// }

// // Constructor Functions
// class Students{
//      constructor(name, age ,id, grade, course, studno){
//           this.name =name;
//           this.age = age;
//           this.id =id;
//           this.grade = grade;
//           this.course = course;
//           this .studno = studno
//      }
//         greet() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }


// let student01 = new Students("princess",  19, 123456, "A", "SD", 1)

// let student02 = new Students("princess",  19, 123456, "A", "SD", 1)

// // accessing boject properties
// //dot notation
//  student01.name = "Ndlovu"

//  const score = 85;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }
// Output: "Grade: B"
// let driverAge = 13
// let hasLicence = true
// if(driverAge >=18){
//      if(hasLicence){
//           console.log("u can drive")
//      } else {
//           console.log("you are old enuogh but no lincen")
//      }
// } else{
//      console.log("too young")
// }

class Book{
     constructor(title, author, summary, course){
          this.title = title;
          this.author = author;
          this.summary = summary
          this .course = course
     }
   displayBook(){
     console.log("Book Title :" + this.title )
     console.log("Author:" + this.author )
     console.log("Book Summary :" + this.summary )
   }  


}

// create objects from the Book class
let book1 = new Book("Learning OOP", "John", "The book teaches javascript concepts")
let book2 = new Book("How to Understand programming in OOP", "Mary", "the Book is great")

book2.displayBook()



// JAVSCRIPT INHERITANCE EXAMPLE


// Parent class
class Vehicle{
  constructor(brand){
    this.brand = brand
  }
  start(){
    console.log(`${this.brand} is starting`)
  }
}

// class Class
class Car extends Vehicle{
  constructor(brand, model){
    super(brand);
    this.model = model
  }

  displayInfo(){
    console.log(`Brand: ${this.brand}, Model: ${this.model}`)
  }
}

let mycar = new Car("Toyotal", "Corolla")
mycar.start()
mycar.displayInfo()



class Animal{
  makeSound(){
    console.log("some generic animal sound")
  }
}

class Dog extends Animal{
  makeSound(){
    console.log("Woof!")
  }
}

class Cat extends Animal{
  makeSound(){
    console.log("Meow!")
  }
}

let mydog = new Dog()
let myCat = new Cat()

myCat.makeSound()
mydog.makeSound()



function add(a, b){

  let result = a+b
  console.log(result)

}

add(30,45)
add(100, 600)

function mult(a, b){
  return a*b
}

console.log(mult(45, 70))

let age =20
if(age >18){
  console.log('Adult')
}else{
  console.log("minor")
}


function displayAge(){
let  Age = 50
  console.log(Age)
  console.log(age)
}
displayAge()

console.log(age)
console.log(Age)

let name  = "jeff"