import { CHECKBOX_SVG, DOUBLE_CHECKBOX_SVG, EDIT_SVG, DELETE_SVG } from "../data/data.js"
import { getBooks, changeIsComplete, editBook, deleteBook } from "../utils/utils.js"

const bookList = document.querySelector(".books")
const completedBooksTab = document.querySelector(".isCompleteTrue")
const uncompletedBooksTab = document.querySelector(".isCompleteFalse")

const conditionalShowBooks = () => {
    if (completedBooksTab.classList.contains("active")) showBooks(getBooks().filter(book => book.isComplete === true))
    if (uncompletedBooksTab.classList.contains("active")) showBooks(getBooks().filter(book => book.isComplete === false))
}

const showBooks = (books = getBooks()) => {
    bookList.innerHTML = ''
    books.map(book => {
        const { id, image, title, author, category, year } = book
        bookList.innerHTML += `
                <div class="book" id=${id}>
                    <div class="bookCovers">
                        <img class="bookCover" src=${image} alt="">
                        <div class="bookOptions" id=${id}>
                            ${completedBooksTab.classList.contains('active') ? CHECKBOX_SVG : DOUBLE_CHECKBOX_SVG}
                            ${EDIT_SVG}
                            ${DELETE_SVG}
                        </div>
                    </div>
                    <div class="bookTitle" title="${title}">${title}</div>
                    <div class="bookAuthor" title="${author}">${author}</div>
                    <div class="bookCategory" title="${category}">${category}</div>
                    <div class="bookYear">${year}</div>
                </div>
        `
    })
}

bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-tabler-square-x")) {
        const id = Number(e.target.parentElement.id)
        deleteBook(id, conditionalShowBooks)
    }

    if (e.target.classList.contains("icon-tabler-double-checkbox")) {
        const id = Number(e.target.parentElement.id)
        changeIsComplete({ id, isComplete: true }, conditionalShowBooks)
    }

    if (e.target.classList.contains("icon-tabler-checkbox")) {
        const id = Number(e.target.parentElement.id)
        changeIsComplete({ id, isComplete: false }, conditionalShowBooks)
    }

    if (e.target.classList.contains("icon-tabler-edit")) {
        const id = Number(e.target.parentElement.id)
        editBook(id, conditionalShowBooks)
    }
})

completedBooksTab.addEventListener("click", function () {
    completedBooksTab.classList.add("active")
    uncompletedBooksTab.classList.remove("active")
    const books = getBooks().filter(book => book.isComplete === true)
    showBooks(books)
})

uncompletedBooksTab.addEventListener("click", function () {
    completedBooksTab.classList.remove("active")
    uncompletedBooksTab.classList.add("active")
    const books = getBooks().filter(book => book.isComplete === false)
    showBooks(books)
})

window.addEventListener("load", function () {
    const books = getBooks().filter(book => book.isComplete === false)
    showBooks(books)
})