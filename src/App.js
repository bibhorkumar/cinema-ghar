import React from "react"
import Header from "./components/Header"
import PopularList from "./components/PopularList"

function App() {
  const apiKey="124ebbcded9f53e4f4dc4fd0a57674f8";
  const [popularMovies, setPopularMovies] = React.useState([])
  const [topRatedMovies, setTopRatedMovies] = React.useState([])
  const [popularTVShows, setpopularTVShows] = React.useState([])

  console.log("body runs")

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


  return (
    <div>
      <Header />
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
