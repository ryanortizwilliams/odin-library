const myLibrary = [];

function Book(title, author, pages, read, cover = "") {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.cover = cover;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 310, false);
const harryPotter = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J.K Rowling",
  251,
  true,
  "https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg"
);
const bellJar = new Book(
  "The Bell Jar",
  "Stylvia Plath",
  244,
  true,
  "https://m.media-amazon.com/images/I/91163i7ah-L._AC_UF894,1000_QL80_.jpg"
);
const stranger = new Book(
  "The Stranger",
  "Albert Camus",
  159,
  true,
  "https://m.media-amazon.com/images/I/81GjCVSEDAL._AC_UF1000,1000_QL80_.jpg"
);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(bellJar);
addBookToLibrary(stranger);
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

console.log(myLibrary);

function displayBooks() {
  // get DOM Element
  const content = document.querySelector(".content");
  content.replaceChildren();

  for (let i = 0; i < myLibrary.length; i++) {
    //Create Element for book
    let currentBook = myLibrary[i];
    let bookCard = document.createElement("div");

    bookCard.setAttribute("class", "book-card");

    //image
    let cover = document.createElement("div");
    cover.setAttribute("class", "book-img");
    if (currentBook.cover) {
      cover.innerHTML = ` <img
      src="${currentBook.cover}"
      alt=""
    />`;
    } else {
      cover.textContent = "No Image";
    }

    bookCard.appendChild(cover);
    // Title
    let title = document.createElement("h1");
    title.textContent = `${currentBook.title}`;
    bookCard.appendChild(title);
    //Author
    let author = document.createElement("p");
    author.textContent = `By ${currentBook.author}`;
    bookCard.appendChild(author);
    // Page#
    let pageNum = document.createElement("p");

    pageNum.textContent = `${currentBook.pages} pages`;
    bookCard.appendChild(pageNum);

    // Has read
    let hasRead = document.createElement("div");
    if (currentBook.read) {
      hasRead.innerHTML = `
    <p>have read:</p>
          <input type="checkbox" name="read" class="read" checked />
    `;
    } else {
      hasRead.innerHTML = `
    <p>have read:</p>
          <input type="checkbox" name="read" class="read" />
    `;
    }

    const deleteButton = document.createElement("i");
    deleteButton.classList.add(
      "fa-solid",
      "fa-circle-minus",
      "btn",
      "delete-btn"
    );
    deleteButton.addEventListener("click", function () {
      removeBook(i);
    });
    hasRead.appendChild(deleteButton);

    //TODO: Add event listener to delete button

    hasRead.setAttribute("class", "hasRead");
    bookCard.appendChild(hasRead);

    //Add to .content section
    content.appendChild(bookCard);
  }
}

//add book behavior
const addButton = document.getElementById("add-btn");
addButton.addEventListener("click", function () {
  toggleModal();
});

const closeButton = document.querySelector(".close-btn");
closeButton.addEventListener("click", function () {
  toggleModal();
});

function toggleModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("hidden");
}

//TODO: get form info and display it on the page
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const title = formData.get("title");
  const author = formData.get("author");
  const pageNumber = formData.get("page-number");
  const read = formData.get("read");
  const cover = formData.get("cover");
  //make book object
  const newBook = new Book(title, author, pageNumber, read, cover);
  addBookToLibrary(newBook);
  toggleModal();
});

function removeBook(id) {
  //remove from list
  myLibrary.splice(id, 1);
  displayBooks();
}
