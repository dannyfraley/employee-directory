import React from "react";
function Search(props) {
    return (
        <div className="input-group flex-nowrap">

            <input type="text" onChange={props.handleInput} name="search" value={props.search} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
    )
}
export default Search
