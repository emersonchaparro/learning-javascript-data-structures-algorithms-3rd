var obj = new Object();

var obj = {};

obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

var book = new Book('title', 'pag', 'isbn');

console.log(book);

console.log(book.title); // outputs the book title
book.title = 'new title'; // update the value of the book title
console.log(book.title); // outputs the updated value


Book.prototype.printTitle = function() {
  console.log(this.title);
};
book.printTitle();


function Book2(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.printIsbn = function() {
    console.log(this.isbn);
  };
}

var book2 = new Book2('title', 'pag', 'isbn');
book2.printIsbn();
