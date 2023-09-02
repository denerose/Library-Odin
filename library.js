"use strict";
const myLibrary = [];
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    const newKey = myLibrary.indexOf(newBook);
    newBook.key = newKey;
}
function removeBookFromLibrary(keyOfBookToRemove) {
    const indexToRemove = myLibrary.findIndex((book, idx) => {
        if (keyOfBookToRemove === book.key) {
            return true;
        }
        ;
    });
    delete myLibrary[indexToRemove];
}
let dummyBook = {
    title: "How to Spouse 101",
    author: "Kim Dowling",
    pages: 10,
    rating: 5,
    haveRead: false,
    key: 0,
};
addBookToLibrary(dummyBook);
