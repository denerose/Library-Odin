"use strict";
const myLibrary = [];
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
