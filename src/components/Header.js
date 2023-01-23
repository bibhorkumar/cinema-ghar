import React from "react";

export default function Headers({inputRef,searchQuery, handleKeyDown}){
    return(
        <header className="header">
            <h1>Cinema Ghar</h1>
            <input type="text" placeholder="🔍search" className="search-bar" ref={inputRef}  onKeyDown={handleKeyDown}/>
        </header>
    )
}