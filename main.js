const myLibrary = [];

function Book(title, author, pages, read, cover = "") {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.cover = cover;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const harryPotter = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J.K Rowling",
  290,
  true,
  "https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg"
);

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

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
          <i class="fa-solid fa-circle-minus btn delete-btn"></i>
    `;
    } else {
      hasRead.innerHTML = `
    <p>have read:</p>
          <input type="checkbox" name="read" class="read" />
          <i class="fa-solid fa-circle-minus btn delete-btn"></i>
    `;
    }

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

//TODO: Make function to toggle modal
function toggleModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("hidden");
}

//Initial display of books
displayBooks();
