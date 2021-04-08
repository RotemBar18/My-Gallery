'use strict'
const KEY = 'books'

const PAGE_SIZE = 5;
var gPageIdx = 0;
var gCurrBook = null
var gBooks = [
    {
        id: 'book101',
        name: 'harry potter',
        price: 150,
        imgUrl: './imgs/book.jfif'
    },
    {
        id: 'book102',
        name: 'GOT',
        price: 100,
        imgUrl: './imgs/book.jfif'
    },
    {
        id: 'book103',
        name: 'oliver twist',
        price: 50,
        imgUrl: './imgs/book.jfif'
    }
]
var gSortBy = 'title'
_createBooks()

function getBooksForDisplay() {
    var startIdx = gPageIdx * PAGE_SIZE;
    if (gSortBy === 'price') {
        gBooks.sort(function (bookA, bookB) {
            return bookA.price - bookB.price
        });
        return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
    }
    gBooks.sort(function (bookA, bookB) {
        if (bookA.name.toUpperCase() < bookB.name.toUpperCase()) {
            return -1;
        }
        if (bookA.name.toUpperCase() > bookB.name.toUpperCase()) {
            return 1;
        }
        else
            return 0;
    });
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
}
    


function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}


function addBook(name, price) {
    var book = _createBook(name, price)
    gBooks.unshift(book)
    _saveBooksToStorage();
}


function _createBook(name, price) {
    return {
        id: makeId(),
        name,
        price,
        imgUrl: `./imgs/${name}.jfif`,
        rating: 3
    }
}

function updateBookDom(bookId, newPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    })
    gBooks[bookIdx].price = newPrice;
    _saveBooksToStorage();
}


function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return book.id === bookId
    })
    return book
}

function _createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = gBooks
        _saveBooksToStorage()
    }
    gBooks = books;
}

function setSort(sortBy) {
    gSortBy = sortBy
}

function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0;
    }
}

function setCurrBook(book){
    gCurrBook = book;
}

function getCurrBook(){
    return gCurrBook
}