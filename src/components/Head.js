import React from "react"

const Head = (props) => {
    const {title, className} = props;
    return (
    <div className={className} id="head">
    <h1>{title}</h1>
    </div>
    )
}

export default Head