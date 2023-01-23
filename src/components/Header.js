import React from "react";

export default function Headers({inputRef,searchQuery, handleKeyDown}){
    return(
        <header className="header">
            <h2>Cinema Ghar</h2>
            <input type="text" placeholder="🔍search" className="search-bar" ref={inputRef}  onKeyDown={handleKeyDown}/>
        </header>
    )
}