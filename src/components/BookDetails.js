import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const BookDetails = (props) => {
    console.log(props);
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card large horizontal">
                        <img className="card-image"
                            src={props.location.image}
                            style={{ height: "450px", width: "70%" }}
                        />

                        <div className="card-content">
                        <p style={{ fontSize:30 }}>{props.location.title}</p>
                            <p style={{ fontSize:20 }}>Author: {props.location.author}</p>
                            <p style={{ fontSize:15 }}>Published: {props.location.published}</p>
                            <p>{props.location.description}</p>
                        </div>
                        <div className="card-action">
                            <Link to={{ pathname: "/", books: props.location.props }}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default BookDetails;