import { BOOK_CATEGORIES } from "../data/data.js"
import { getBooks } from "../utils/utils.js"

const recentBookList = document.querySelector(".s2-r2-c1")
const bookCategoryList = document.querySelector(".s3-categories")

const recentBooks =
    getBooks()
        .filter(book => book.isComplete === true)
        .filter((book, index) => index < 6 && book)

recentBookList.innerHTML = ''
bookCategoryList.innerHTML = ''

recentBooks.map(book => {
    const { image, title, author, year } = book
    recentBookList.innerHTML +=
        `
        <div class="s2-r2-c1__book">
            <img class="s2-r2-c1__bookCover" src="${image}" alt="">
            <p class="s2-r2-c1__bookTitle">${title}</p>
            <p class="s2-r2-c1__bookAuthor">${author}</p>
            <p class="s2-r2-c1__bookYear">${year}</p>
        </div>
    `
})

BOOK_CATEGORIES.map(category => {
    const { name, image } = category
    bookCategoryList.innerHTML +=
        `
        <div class="s3-category">
            <img src="${image}" alt="">
            <div class="s3-category__title" title="${name}">${name}</div>
        </div>
    `
})