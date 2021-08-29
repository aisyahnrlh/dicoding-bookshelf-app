import { CHECKBOX_SVG, DOUBLE_CHECKBOX_SVG, EDIT_SVG, DELETE_SVG } from "../data/data.js"
import { getBooks, changeIsComplete, editBook, deleteBook } from "../utils/utils.js"

const bookList = document.querySelector(".books")
const input = document.getElementById("book__title")
const searchDesc = document.querySelector(".search__desc")

const filterBooks = (title) => {
    const books = getBooks()
    const regex = new RegExp(title, "ig")
    const results = books.filter(book => regex.test(book.title))
    return results
}

const showBooks = (books = getBooks()) => {
    if (books.length >= 1 && input.value !== '') {
        searchDesc.innerHTML = `
            <p class="search__desc">Search result for <b>${input.value}</b></p>
        `
    } else {
        searchDesc.innerHTML = ''
    }

    bookList.innerHTML = ''
    books.map(book => {
        const { id, image, title, author, category, year, isComplete } = book
        bookList.innerHTML += `
                <div class="book" id=${id}>
                    <div class="bookCovers">
                        <img class="bookCover" src=${image} alt="">
                        <div class="bookOptions" id=${id}>
                            ${isComplete ? CHECKBOX_SVG : DOUBLE_CHECKBOX_SVG}
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
        deleteBook(id, () => showBooks(filterBooks(input.value)))
    }

    if (e.target.classList.contains("icon-tabler-double-checkbox")) {
        const id = Number(e.target.parentElement.id)
        changeIsComplete({ id, isComplete: true }, () => showBooks(filterBooks(input.value)))
    }

    if (e.target.classList.contains("icon-tabler-checkbox")) {
        const id = Number(e.target.parentElement.id)
        changeIsComplete({ id, isComplete: false }, () => showBooks(filterBooks(input.value)))
    }

    if (e.target.classList.contains("icon-tabler-edit")) {
        const id = Number(e.target.parentElement.id)
        editBook(id, () => showBooks(filterBooks(input.value)))
    }
})

input.addEventListener("input", () => {
    const title = input.value
    const books = filterBooks(title)
    showBooks(books)
})

window.addEventListener("load", () => {
    showBooks()
})