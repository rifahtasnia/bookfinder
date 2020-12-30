import React from 'react';

const Searchbar = (props) => {
    return (
        <div className="container">
            <div className='row'>
                <section className="col s6 offset-s3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className='input-field'>
                            <input placeholder="Search for books" type="text" onChange={props.handleChange}></input>
                        </div>
                        <button type='submit' className="btn btn-danger" style={{ backgroundColor: "#F9966B", width: "100px", height: "42px", marginLeft: 70}}>
                            Search
                        </button>
                        <div className="col s6 pull-s1" style={{left:"12%"}}>
                            <select color="black" className="browser-default dropdown select-css" defaultValue="Sort" onChange={props.handleSort}>
                                <option disabled value="Sort">Choose a Sorting Option</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Ascending">A-Z</option>
                                <option value="Descending">Z-A</option>
                            </select>
                        </div>
                    </form>
                </section>

            </div>
        </div >

    )
}

export default Searchbar;