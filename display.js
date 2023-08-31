"use strict";
const libraryTable = document.getElementById("libraryTable");
function newRow(bookToAdd) {
    const row = libraryTable.insertRow(1);
    row.id = String(bookToAdd.book.key);
    row.className = "bookRow";
    const titleTd = row.insertCell(0);
    const authorTd = row.insertCell(1);
    const pagesTd = row.insertCell(2);
    const readTd = row.insertCell(3);
    titleTd.innerText = bookToAdd.book.title;
    authorTd.innerText = bookToAdd.book.author;
    pagesTd.innerText = String(bookToAdd.book.pages);
    readTd.innerText = String(bookToAdd.book.haveRead);
}
function addBooksToTable() {
    myLibrary.forEach(item => {
        newRow(item);
    });
}
addBooksToTable();
