import { STORAGE_KEY } from "../data/data.js"
import { getBooks } from "../utils/utils.js"

const inputBook = document.getElementById('inputBook')

bookIsComplete.addEventListener('change', function () {
    const bookSubmit = document.querySelector('#bookSubmit>span')
    if (bookIsComplete.checked) {
        bookSubmit.innerText = 'read bookshelf'
    } else {
        bookSubmit.innerText = 'unread bookshelf'
    }
})

inputBook.addEventListener('submit', function (event) {
    event.preventDefault()
    const bookSubmit = document.querySelector('#bookSubmit>span')
    let bookTitle = document.getElementById('bookTitle').value
    let bookAuthor = document.getElementById('bookAuthor').value
    let bookYear = document.getElementById('bookYear').value
    let bookCategory = document.getElementById('bookCategory').value
    let bookImage = document.getElementById('bookImage').value
    let bookIsComplete = document.getElementById('bookIsComplete').checked
    const books = getBooks()
    const newBook = {
        id: +new Date(),
        title: bookTitle,
        author: bookAuthor,
        year: bookYear,
        category: bookCategory,
        image: bookImage,
        isComplete: bookIsComplete
    }

    if (typeof Storage !== undefined) {
        books.push(newBook)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    } else {
        alert("Browser yang Anda gunakan tidak mendukung Web Storage")
    }

    inputBook.reset()
    bookSubmit.innerText = 'unread bookshelf'
})