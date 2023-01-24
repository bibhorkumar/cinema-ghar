import React from "react";
import PopularList from "./PopularList";
import ThemeContext from "../ThemeContext";


function ResultsModal({query,searchResults,closeModal}) {
  const darkMode= React.useContext(ThemeContext)
  const modalBackgroundClassName = darkMode ? "modal-background body-dark" : "modal-background";
  const modalContainerClassName = darkMode ? "modal-container sec-hed-dark" : "modal-container";
  return (
    <div className={modalBackgroundClassName}>
      <div className={modalContainerClassName}>
        <div className="modal-title">
          <h2>{`Results for ${query}....`}</h2>
          <button className="modal-close-btn" onClick={closeModal}>X</button>
        </div>
        <div className="modal-body">
            <PopularList popularMovies={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default ResultsModal;
