'use strict'

function onInit() {
    renderBooks()
}


function renderBooks() {
    var books = getBooksForDisplay()
    var strHtmls = books.map(function (book) {
        return `
        <table class="books-container">
        <tr class="book-preview">
            <td class="card-id" >${book.id}
            </td>
            <td>
                <h5 class="card-title">${book.name}</h5>
            </td>
            <td>
                <p class="card-price">${book.price}</p>
            </td>
            <td>
                <button data-trans="read" class="read-btn" onclick="onReadBook('${book.id}')">Read</button>
            </td>
            <td>
                <button <button data-trans="update" data-id="${book.id}" class="update-btn" onclick="onUpdateBook('${book.id}')">Update</button>
            </td>
            <td>
                <button <button data-trans="remove" class="remove-btn" onclick="onRemoveBook('${book.id}')">Remove</span>
            </td>
        </tr>

        `
    })
    document.querySelector('.books-container').innerHTML = strHtmls.join('')
    doTrans();
}


function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}


function onAddBook() {
    var bookName = document.querySelector('input[name=new-book-name]').value;
    var bookPrice = document.querySelector('input[name=new-book-price]').value;
    addBook(bookName, bookPrice)
    renderBooks()
    document.querySelector('input[name=new-book-name]').value = ''
    document.querySelector('input[name=new-book-price]').value = ''

}

function onUpdateBook(bookId) {
    var elAlert = document.querySelector('.alert')
    elAlert.dataset.id = bookId
    elAlert.hidden = !elAlert.hidden
}

function updateBook(){
    var elAlert = document.querySelector('.alert')
    var bookId = elAlert.dataset.id
    var elInput = elAlert.querySelector('input')
    var newPrice = elInput.value
    updateBookDom(bookId, newPrice);
    renderBooks();
    elAlert.hidden = true
    console.log(' elInput.placeholder',  elInput.placeholder)
    elInput.placeholder = '0'
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    setCurrBook(book)
    var elModal = document.querySelector('.my-modal')
    elModal.querySelector('h5').innerText = book.name
    elModal.querySelector('h6').innerText = `Price: ${book.price}$`
    console.log('book.imgUrl', book.imgUrl)
    elModal.querySelector('img').src = book.imgUrl
    elModal.querySelector('input[name="rating"]').value = book.rating
    elModal.hidden = false;
}

function onCloseModal() {
    var elModal = document.querySelector('.my-modal')
    elModal.hidden = true
    elModal.querySelector('input[name="rating"]').value = 0
    setCurrBook(null)
}

function onRateInput() {
    var elModal = document.querySelector('.my-modal')
    var book = getCurrBook()
    book.rating = elModal.querySelector('input[name="rating"]').value
    console.log(' book.rating', book.rating)
}
function onTitleClick() {
    setSort('title')
    renderBooks();
}
function onPriceClick() {
    setSort('price');
    renderBooks();
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    renderBooks();
    doTrans();
}

function onNextPage() {
    nextPage();
    renderBooks();
}
