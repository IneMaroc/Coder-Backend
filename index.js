class User {
   constructor (name, lastname) {
      this.name = name;
      this.lastName = lastname;
      this.books = [];
      this.pets = [];

   }

   getFullName () {
      return `${this.name} ${this.lastName}`;
   }

   addPet (petName) {
      this.pets.push(petName);
   }
   countPets () {
      return this.pets.length;
   }
   addBook (name, author) {
      this.books.push({book: name, author: author});
   }
   getBookName () {
      return this.books.map((bk) => bk.book);
   }
}

const user = new User ('Ine', 'Maroc');

user.addPet('Pez');
user.addBook('El Ojo del Mundo', 'Robert Jordan');
user.addBook('La Gran Cacería', 'Robert Jordan');
user.addBook('El Dragon Renacido', 'Robert Jordan');
console.log(user.getBookName());
console.log(user.countPets());
user.addBook('El Aumento de la Sombra', 'Robert Jordan');
user.addBook('Cielo en Llamas', 'Robert Jordan');
user.addBook('El Señor del Caos', 'Robert Jordan');
user.addPet('Perro');

console.log(user.getFullName());
console.log(user.countPets());
console.log(user.getBookName());