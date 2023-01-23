import React from "react"
import Header from "./components/Header"
import PopularList from "./components/PopularList"
import ResultsModal from "./components/ResultsModal";

function App() {
  const apiKey="124ebbcded9f53e4f4dc4fd0a57674f8";
  const [popularMovies, setPopularMovies] = React.useState([])
  const [topRatedMovies, setTopRatedMovies] = React.useState([])
  const [popularTVShows, setpopularTVShows] = React.useState([])
  const [searchQuery, setSearchQuery]= React.useState("")
  const [searchResults, setSearchResults] = React.useState([])
  const [modal,setModal] =React.useState(false)
  const inputRef = React.useRef();


  // const handleChange =(event) =>{
  //   const value =event.target.value;
    
  //   setModal(true)
  // }

  const handleKeyDown =(event) =>{
    if(event.key==="Enter"){
      console.log("value",inputRef.current.value)
      setSearchQuery(inputRef.current.value)
      setModal(true)
    }
  }



  // console.log("body runs")

  const getTopRatedMovies = async ()=>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    const data = await res.json();
    setTopRatedMovies(data.results)
  }

  const getUpcomingMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
    const data = await res.json()
    setpopularTVShows(data.results)
  }

  React.useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(res=>res.json())
      .then(data=>setPopularMovies(data.results))
      getTopRatedMovies()
      getUpcomingMovies()
  },[])

  React.useEffect(()=>{
      console.log("results", searchQuery)
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&query=${searchQuery}`)
      .then(res=>res.json())
      .then(data=>setSearchResults(data.results || []))
      
  }, [searchQuery] )
  
  console.log(searchResults)

  return (
    <div style={{position: "relative"}}>
      {modal && <ResultsModal query={searchQuery} searchResults={searchResults} closeModal={()=>{setModal(false)}}/>}
      <Header inputRef={inputRef} searchQuery={searchQuery} handleKeyDown={handleKeyDown}/>
      <section className="page-section">
        <h3>POPULAR MOVIES</h3>
        <div className="movies-scroller">
          <PopularList popularMovies={popularMovies}/>
        </div>
      </section>
      <section className="page-section">
        <h3>TOP RATED MOVIES</h3>
        <div className="movies-scroller">
          <PopularList popularMovies={topRatedMovies}/>
        </div>
      </section> 
      <section className="page-section">
        <h3>POPULAR TV SHOWS</h3>
        <div className="movies-scroller">
          <PopularList popularMovies={popularTVShows}/>
        </div>
      </section>
       
    </div>
  );
}

export default App;
