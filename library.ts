const myLibrary: LibraryBook[] = [];
const newBookForm: HTMLFormElement = document.getElementById("newBookForm") as HTMLFormElement;


interface Book {
    title: string,
    author: string,
    pages: number,
    rating?: number,
    haveRead: boolean,
    key?: number,
}

class LibraryBook {

    constructor(public book: Book) { console.log(`new LibraryBook = ${book.title}`) }

    public get getInfo(): string {
        return (`${this.book.title} by ${this.book.author}, ${this.book.pages} pages.`);
    }

}

function addBookToLibrary(rawBook: Book) {
    const newBook = new LibraryBook(rawBook);
    myLibrary.push(newBook);
    const newKey = myLibrary.indexOf(newBook);
    newBook.book.key = newKey;
}

function removeBookFromLibrary() {
}

let dummyBook: Book = {
    title: "How to Spouse 101",
    author: "Kim Dowling",
    pages: 10,
    rating: 5,
    haveRead: false,
}

addBookToLibrary(dummyBook);

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
        if (newRead.checked) {newReadBool = true}
        let bookFromInput: Book = {
            title: newTitle.value,
            author: newAuthor.value,
            pages: newPages.value as unknown as number,
            rating: 0,
            haveRead: newReadBool,
        }
        addBookToLibrary(bookFromInput);
        addBooksToTable();
    }
})