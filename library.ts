const myLibrary: Book[] = [];

interface Book {
    title: string,
    author: string,
    pages: number,
    rating?: number,
    haveRead: boolean,
    key?: number,
}

function addBookToLibrary(newBook: Book) {
    myLibrary.push(newBook);
    const newKey = myLibrary.indexOf(newBook);
    newBook.key = newKey;
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