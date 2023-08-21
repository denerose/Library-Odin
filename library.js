var myLibrary = [];
var LibraryBook = /** @class */ (function () {
    function LibraryBook(book) {
        this.book = book;
        console.log("new LibraryBook = ".concat(book.title));
    }
    Object.defineProperty(LibraryBook.prototype, "getInfo", {
        get: function () {
            return ("".concat(this.book.title, " by ").concat(this.book.author, ", ").concat(this.book.pages, " pages."));
        },
        enumerable: false,
        configurable: true
    });
    return LibraryBook;
}());
function addBookToLibrary(rawBook) {
    var newBook = new LibraryBook(rawBook);
    myLibrary.push(newBook);
    var newKey = myLibrary.indexOf(newBook);
    newBook.book.key = newKey;
}
function removeBookFromLibrary() {
}
var dummyBook = {
    title: "How to Spouse 101",
    author: "Kim Dowling",
    pages: 10,
    rating: 5,
    haveRead: false,
};
addBookToLibrary(dummyBook);
