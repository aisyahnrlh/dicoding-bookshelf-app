import { STORAGE_KEY } from "../data/data.js"

const editBook = (bookID, showCurrentBooks) => {
    const editModal = document.querySelector(".editModals")
    const yesButton = document.getElementById("editBook")
    const noButton = document.querySelector(".editModal__buttonNo")
    editModal.classList.add("active")

    const books = getBooks()
    let newBooks = [...books]
    const bookIndex = newBooks.findIndex(item => item.id === bookID)

    let { id, title, author, year, category, image, isComplete } = newBooks[bookIndex]
    //before edit
    document.getElementById("editBookTitle").value = title
    document.getElementById("editBookAuthor").value = author
    document.getElementById("editBookYear").value = year
    document.getElementById("editBookCategory").value = category
    document.getElementById("editBookImage").value = image

    yesButton.addEventListener('submit', function(event) {
        event.preventDefault()
        title = document.getElementById("editBookTitle").value
        author = document.getElementById("editBookAuthor").value
        year = document.getElementById("editBookYear").value
        category = document.getElementById("editBookCategory").value
        image = document.getElementById("editBookImage").value

        newBooks[bookIndex] = { id, title, author, year, category, image, isComplete }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newBooks))
        editModal.classList.remove("active")

        showCurrentBooks()
    })

    noButton.addEventListener("click", function(event) {
        event.preventDefault()
        editModal.classList.remove("active")
        showCurrentBooks()
    })
}

const deleteBook = (id, showCurrentBooks) => {
    const deleteModal = document.querySelector(".deleteModals")
    const yesButton = document.querySelector(".deleteModal__buttonYes")
    const noButton = document.querySelector(".deleteModal__buttonNo")
    deleteModal.classList.add("active")

    const books = getBooks()
    let newBooks = [...books]
    newBooks = newBooks.filter(item => item.id !== id)

    yesButton.addEventListener("click", function() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newBooks))
        deleteModal.classList.remove("active")
        showCurrentBooks()
    })

    noButton.addEventListener("click", function() {
        deleteModal.classList.remove("active")
        showCurrentBooks()
    })
}

const getBooks = () => {
    if (localStorage.getItem(STORAGE_KEY) === null && typeof Storage !== null) {
        return []
    } else {
        return JSON.parse(localStorage.getItem(STORAGE_KEY))
    }
}

const changeIsComplete = ({ id, isComplete }, showCurrentBooks) => {
    const books = getBooks()
    let newBooks = [...books]
    const bookIndex = newBooks.findIndex(item => item.id === id)
    newBooks[bookIndex].isComplete = isComplete
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newBooks))
    showCurrentBooks()
}

export { editBook, deleteBook, getBooks, changeIsComplete }