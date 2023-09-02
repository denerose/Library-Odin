const libraryTable: HTMLTableElement = document.getElementById("libraryTable") as HTMLTableElement;
const newBookForm: HTMLFormElement = document.getElementById("newBookForm") as HTMLFormElement;
const refreshBtn: HTMLButtonElement = document.getElementById("refreshBtn") as HTMLButtonElement;

function newDeleteButton(bookRef: number) {
   const newDelBtn = document.createElement("button");
   newDelBtn.id = String(bookRef);
   newDelBtn.innerText = "Delete";
   newDelBtn.addEventListener("click", () => {
    removeBookFromLibrary(bookRef);
    refreshTable();
   })
   return(newDelBtn);
}

function newRow(bookToAdd: Book) {
    const row = libraryTable.insertRow(1);
    row.id = String(bookToAdd.key);
    row.className = "bookRow";
    const titleTd = row.insertCell(0);
    const authorTd = row.insertCell(1);
    const pagesTd = row.insertCell(2);
    const readTd = row.insertCell(3);
    const deleteTD = row.insertCell(4);
    titleTd.innerText = bookToAdd.title;
    authorTd.innerText = bookToAdd.author;
    pagesTd.innerText = String(bookToAdd.pages);
    readTd.innerText = String(bookToAdd.haveRead);
    deleteTD.appendChild(newDeleteButton(bookToAdd.key));
}

function addBooksToTable(): void {
    myLibrary.forEach(item => {
        newRow(item);
    });
}

function clearTable(): void {
    const tableArray = Array.from(libraryTable.rows)
    tableArray.forEach((row, i) => {
        if (i === 0) {return;} else {
        libraryTable.deleteRow(i);}
    });
}

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newTitle: HTMLInputElement = document.getElementById("titleInput") as HTMLInputElement;
    let newAuthor: HTMLInputElement = document.getElementById("authorInput") as HTMLInputElement;
    let newPages: HTMLInputElement = document.getElementById("pagesInput") as HTMLInputElement;
    let newRead: HTMLInputElement = document.getElementById("haveReadInput") as HTMLInputElement;

    if (newTitle.value == "" || newAuthor.value == "" || newPages.value == "") {
        throw Error("Must have a title, author, and pages value")
    } else {
        let newReadBool: boolean = false;
        if (newRead.checked) { newReadBool = true }
        let newKey = (myLibrary.length + 1);
        let bookFromInput: Book = {
            title: newTitle.value,
            author: newAuthor.value,
            pages: newPages.value as unknown as number,
            rating: 0,
            haveRead: newReadBool,
            key: newKey
        }
        addBookToLibrary(bookFromInput);
        newRow(bookFromInput);
    }
})

function refreshTable() {
    clearTable();
    addBooksToTable();
}

refreshBtn.addEventListener("click", () => {
    refreshTable();
})

addBooksToTable();