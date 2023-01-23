import React from "react";
import PopularList from "./PopularList";


function ResultsModal({query,searchResults,closeModal}) {
  return (
    <div className="modal-background">
      <div className="modal-container">
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
