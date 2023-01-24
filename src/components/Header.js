import React from "react";
import ThemeContext from "../ThemeContext";


export default function Headers({toggleTheme, inputRef,searchQuery, handleKeyDown}){
    const darkMode= React.useContext(ThemeContext)
    const className= darkMode ? "header dark": "header"
    return(
        <header className={className}>
            <h1>Cinema Ghar</h1>
            <div className="searchbar-div">
            <input type="text" placeholder="🔍search" className="search-bar" ref={inputRef}  onKeyDown={handleKeyDown}/>
            <button onClick={toggleTheme}>{darkMode ? "⚪":"⚫"}</button>
            </div>
        </header>
    )
}