import React from 'react';
import { Link } from "react-router-dom";

const Book = (props) => {
    const ImageURL = props.book.volumeInfo.imageLinks;
    return (
        <div className="col s12 m3">
            <div className="card">
                <div className="card-image" style={{marginBottom:10}}>
                    {ImageURL === undefined ? (<img src={"https://picsum.photos/200/300"}
                        alt=""
                        style={{ width: "100", height: "100" }} />) :
                        (<img src={props.book.volumeInfo.imageLinks.thumbnail}
                            style={{ width: "220px", height: "300px" }} />)}
                </div>
                <div>
                    <span className="card-title" style={{
                        left: '50%',
                        transform: 'translate(-50%, -50%)', 
                        color: "black",
                        marginLeft: 10
                    }}>
                        {props.book.volumeInfo.title}
                    </span>
                </div>
                <div className="card-content" >
                    <p>{props.book.volumeInfo.authors}</p>
                    <p>{props.book.volumeInfo.publishedDate}</p>
                </div>
                <div className="card-action" >
                    <Link to={{
                        pathname: "/book/" + props.title,
                        title: props.title,
                        author: props.author,
                        published: props.published,
                        image: props.image,
                        description: props.description,
                        props: props.props
                    }}>See Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Book;