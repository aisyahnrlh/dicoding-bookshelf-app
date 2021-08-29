const STORAGE_KEY = "BOOKS_SHELF"

const BOOK_CATEGORIES = [
    {
        name: "Arts & Photography",
        image: "https://images.unsplash.com/photo-1486994816305-105a487dac3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Biographies & Memoirs",
        image: "https://images.unsplash.com/photo-1498906538030-8da82e61e424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNzc0MzQxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Business & Money",
        image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Children's Book",
        image: "https://images.unsplash.com/photo-1455884981818-54cb785db6fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=990&q=80"
    },
    {
        name: "Cookbooks, Food & Wine",
        image: "https://images.unsplash.com/photo-1554411961-f1b2701a885f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vayUyMGZvb2QlMjB3aW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Crafts, Hobbies & Home",
        image: "https://images.unsplash.com/photo-1618574760337-2750f6251d20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3JhZnRzJTJDJTIwaG9iYmllcyUyMCUyNiUyMGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Health, Fitness & Dieting",
        image: "https://images.unsplash.com/photo-1611077543575-445af69a7adf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Literature & Fiction",
        image: "https://images.unsplash.com/photo-1605087156563-fdc6f3e8e6f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl0ZXJhdHVyZSUyMCUyNiUyMGZpY3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Romance",
        image: "https://images.unsplash.com/photo-1521033719794-41049d18b8d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        name: "Science & Math",
        image: "https://images.unsplash.com/photo-1574170609519-d1d8d4b71f60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Self Help",
        image: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    }
]

const DOUBLE_CHECKBOX_SVG =
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-double-checkbox" width="25.414" height="24" viewBox="0 0 25.414 24">
    <g id="Group_10" data-name="Group 10" transform="translate(-387 -1501)">
        <g id="Group_9" data-name="Group 9">
        <g id="Group_8" data-name="Group 8">
            <g id="Group_7" data-name="Group 7">
            <path id="Path_262" data-name="Path 262" d="M0,0H24V24H0Z" transform="translate(387 1501)" fill="none"/>
            <path id="Path_263" data-name="Path 263" d="M9,11l3,3,8-8" transform="translate(391 1499)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path id="Path_264" data-name="Path 264" d="M20,12v6a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4h9" transform="translate(387 1501)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path id="Path_267" data-name="Path 267" d="M2,12l5,5m5-5,5-5" transform="translate(392 1496)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </g>
        </g>
        </g>
    </g>
    <title>Mark as read</title>
</svg>`

const CHECKBOX_SVG =
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="24" height="24"
    viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round"
    stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <polyline points="9 11 12 14 20 6"></polyline>
    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
    <title>Mark as unread</title>
</svg>`

const DELETE_SVG =
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <path d="M10 10l4 4m0 -4l-4 4"></path>
    <title>Delete</title>
</svg>`

const EDIT_SVG =
    `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
            <line x1="16" y1="5" x2="19" y2="8"></line>
            <title>Edit</title>
        </svg>
`

export { BOOK_CATEGORIES, STORAGE_KEY, DOUBLE_CHECKBOX_SVG, CHECKBOX_SVG, DELETE_SVG, EDIT_SVG }