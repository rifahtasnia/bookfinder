import React from "react";

const Pagination = (props) => {

    const page_links = [];

    for (let i = 1; i <= props.totalPages; i++) {
        let isActive;
        if (props.currentPage == i) {
            isActive = "active";
        } else {
            isActive = ""
        }

        let classes = "wave-effect" + isActive;
        page_links.push(
            <button
                className={classes}
                key={i}
                onClick={() => {
                    props.nextPage(i);
                }}
            >
                {i} </button>)
    }

    console.log(page_links)

    return (
        <div className="pagination">
            <div class="waves-effect">{page_links}</div>
        </div>
    )
}
export default Pagination;