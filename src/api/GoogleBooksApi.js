import axios from "axios";

const GB_Api= axios.create({
    baseURL:"https://www.googleapis.com/books"
})

const getBooksByTerm = (SearchTerm,setBooks,pgNo,setTotalItems)=>
{
    GB_Api.get("/v1/volumes",{
        params:{
            q: SearchTerm,
            key:"AIzaSyDGpsXe_bc8ecdIE4v5nOW7mGXa16teUt0",
            startIndex: 20*pgNo,
            maxResults: 20
        }
    },
    ).then((response)=>
    {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalItems(response.data.totalItems)
    })
    
}

const getBookDetails = (book_id, setCurrentBook) => {
    console.log(book_id);
    GB_Api.get("/v1/volumes"+book_id)
        .then((response) => {
            console.log(response.data);
            setCurrentBook(response.data);
        });
}

export {getBooksByTerm, getBookDetails};