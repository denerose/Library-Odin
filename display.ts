const libraryTable: HTMLTableElement = document.getElementById("libraryTable") as HTMLTableElement;

function newRow(bookToAdd: Book) {
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

addBooksToTable()