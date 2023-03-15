var person = {

  name: "park",
  age: 12,
  address: "seoul",
  info: function () {

    return this.name + this.age + this.address

  }

}

var person1 = {

  name: "kim",
  age: 19,
  address: "seoul",

}

person1.__proto__ = person;

console.log(person1.info())