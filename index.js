class User {
   constructor (name, lastname) {
      this.name = name;
      this.lastname = lastname;
      this.books = [];
      this.pets = [];

   }

   getFullName () {
      return `${this.name} ${this.lastname}`;
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
      return this.book.map((bk) => bk.book);
   }
}

const user = new User ('Ine', 'Maroc');

