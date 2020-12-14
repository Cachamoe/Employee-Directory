import React from "react";
import "./style.css";

function Search(props) {
    return (
        <>
        Search: <input name = "keyword" value = {props.keyword} onChange = {props.handleOnChange} />
        </>
    );
}

export default Search;