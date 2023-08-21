const myLibrary: LibraryBook[] = [];

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