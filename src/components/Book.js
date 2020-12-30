import React from "react";

const Book = (props) => {

    const BookInfo = props.data.volumeInfo
    const ImageURL = BookInfo.imageLinks.thumbnail;

    return (
        <div class="col s12 m3" >
            <div class="card" >
                <div class="card-image">
                    {ImageURL == null || ImageURL == undefined ? (
                        <img
                            src="https://picsum.photos/200/300"
                            alt=""
                            style={{ width: "100", height: "200" }}
                        />
                    ) : (
                            <img src={ImageURL} alt="" style={{ width: "100", height: "200" }} />
                        )
                    }
                    <span className="card-title">{BookInfo.title}</span>
                </div>
                <div className="card-content">
                    {BookInfo.authors}
                </div>
                <div className="card-action">
                    <a href="#">Book Details</a>
                </div>
            </div>
        </div>
    )
}

export default Book;