function Book1(title, pages, isbn) { // {1}
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

Book1.prototype.printTitle = function() {
  console.log(this.title);
};

class Book2 { // {2}
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn);
  }
}

let book2 = new Book2('title', 'pag', 'isbn');
console.log(book2.title); // outputs the book title
book2.title = 'new title'; // update the value of the book title
console.log(book2.title); // outputs the book title