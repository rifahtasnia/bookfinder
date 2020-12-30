import axios from 'axios';

const APIKey = "AIzaSyDGpsXe_bc8ecdIE4v5nOW7mGXa16teUt0";

const GoogleBooksAPI = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setBooks,  startIndex, setTotalPages) => {

    console.log("Start Index "+ startIndex);
    GoogleBooksAPI.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
            startIndex: startIndex,
            maxResults: 12
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems/20));
    })
}

const getBookDetails = (book_id, setCurrentBook) => {
    GoogleBooksAPI.get(''+book_id)
        .then((response) => {
            console.log(response.data);
            setCurrentBook(response.data);
        });
}

export  {getBooksByTerm, getBookDetails};