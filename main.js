const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);

myLibrary.push(theHobbit);
console.log(myLibrary[0]);

/*
TODO: 
-Get content DOM element
-make display Library(loop through myLibrary, for each item, display a card)
 */
