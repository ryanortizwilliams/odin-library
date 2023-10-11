function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
    );
  };
}

const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295, false);

theHobbit.info();
