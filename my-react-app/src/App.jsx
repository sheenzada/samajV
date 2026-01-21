import Home from "./pages/Home"
import './App.css'
import MovieCard from './components/MovieCard'
function App() {
  const movieNumber = 1;
  return(
<>
<Home />
    {movieNumber === 1 ?(
    <MovieCard movie={{title: "Tim's Film", release_date: "2024"}} />
    ) : (
    <MovieCard movie={{title: "Liger movie", release_date: "2020"}} />
    )}
</>
);
}


export default App
