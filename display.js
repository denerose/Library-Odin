"use strict";
const libraryTable = document.getElementById("libraryTable");
const newBookForm = document.getElementById("newBookForm");
const refreshBtn = document.getElementById("refreshBtn");
function newRow(bookToAdd) {
    const row = libraryTable.insertRow(1);
    row.id = String(bookToAdd.key);
    row.className = "bookRow";
    const titleTd = row.insertCell(0);
    const authorTd = row.insertCell(1);
    const pagesTd = row.insertCell(2);
    const readTd = row.insertCell(3);
    titleTd.innerText = bookToAdd.title;
    authorTd.innerText = bookToAdd.author;
    pagesTd.innerText = String(bookToAdd.pages);
    readTd.innerText = String(bookToAdd.haveRead);
}
function addBooksToTable() {
    myLibrary.forEach(item => {
        newRow(item);
    });
}
function clearTable() {
    const tableArray = Array.from(libraryTable.rows);
    tableArray.forEach((row, i) => {
        if (i === 0) {
            return;
        }
        else {
            libraryTable.deleteRow(i);
        }
    });
}
addBooksToTable();
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
refreshBtn.addEventListener("click", () => {
    console.log("clear");
    clearTable();
    // addBooksToTable;
});
