const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const harryPotter = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J.K Rowling",
  290,
  true
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

console.log(myLibrary);

function displayBooks() {
  // get DOM Element

  for (let i = 0; i < myLibrary.length; i++) {
    const content = document.querySelector(".content");
    //Create Element for book
    let currentBook = myLibrary[i];
    let bookCard = document.createElement("div");

    bookCard.setAttribute("class", "book-card");
    // Title
    let title = document.createElement("h1");
    title.textContent = `${currentBook.title}`;
    bookCard.appendChild(title);
    //Author
    let author = document.createElement("h1");
    author.textContent = `author: ${currentBook.author}`;
    bookCard.appendChild(author);
    // Page#
    let pageNum = document.createElement("p");
    pageNum.textContent = `${currentBook.pages} pages`;
    bookCard.appendChild(pageNum);

    // Has read
    let hasRead = document.createElement("div");
    hasRead.innerHTML = "";

    //Add to .content section
    content.appendChild(bookCard);
  }
}

displayBooks();
/*
TODO: 
-Get content DOM element
-make display Library(loop through myLibrary, for each item, display a card)

<div class="book-card">
        <div class="book-img">No Image</div>
        <h1>Harry Potter and the Chamber of Secrets</h1>
        <p>author: J.K Rowling</p>
        <p>page #: 290 pages</p>
        <div class="hasRead">
          <p>have read:</p>
          <input type="checkbox" name="read" id="read" />
          <i class="fa-solid fa-circle-minus btn delete-btn"></i>
        </div>
      </div>
 */
