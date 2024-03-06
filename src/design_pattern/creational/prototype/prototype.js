class Address {
    constructor(street, city, country) {
        this.street = street
        this.city = city
        this.country = country
    }
}

class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }
}


const mohamed = new Person('mohamed', new Address('12 baker st', 'london', 'uk'))

const magdy = mohamed

console.log(mohamed)
console.log(magdy)