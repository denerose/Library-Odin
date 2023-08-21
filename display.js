var libraryTable = document.getElementById("libraryTable");
function newRow(bookToAdd) {
    var row = libraryTable.insertRow(1);
    row.id = String(bookToAdd.book.key);
    var titleTd = row.insertCell(0);
    var authorTd = row.insertCell(1);
    var pagesTd = row.insertCell(2);
    var readTd = row.insertCell(3);
    titleTd.innerText = bookToAdd.book.title;
    authorTd.innerText = bookToAdd.book.author;
    pagesTd.innerText = String(bookToAdd.book.pages);
    readTd.innerText = String(bookToAdd.book.haveRead);
}
function addBooksToTable() {
    myLibrary.forEach(function (item) {
        newRow(item);
    });
}
addBooksToTable();
