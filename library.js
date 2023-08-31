"use strict";
const myLibrary = [];
const newBookForm = document.getElementById("newBookForm");
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    const newKey = myLibrary.indexOf(newBook);
    newBook.key = newKey;
}
function removeBookFromLibrary() {
}
let dummyBook = {
    title: "How to Spouse 101",
    author: "Kim Dowling",
    pages: 10,
    rating: 5,
    haveRead: false,
};
addBookToLibrary(dummyBook);
newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTitle = document.getElementById("titleInput");
    let newAuthor = document.getElementById("authorInput");
    let newPages = document.getElementById("pagesInput");
    let newRead = document.getElementById("haveReadInput");
    if (newTitle.value == "" || newAuthor.value == "" || newPages.value == "") {
        throw Error("Must have a title, author, and pages value");
    }
    else {
        let newReadBool = false;
        if (newRead.checked) {
            newReadBool = true;
        }
        let bookFromInput = {
            title: newTitle.value,
            author: newAuthor.value,
            pages: newPages.value,
            rating: 0,
            haveRead: newReadBool,
        };
        addBookToLibrary(bookFromInput);
        newRow(bookFromInput);
    }
});
