import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard'
import { movieFinder,movieSearcher } from '../services/api';

function Home(){

    const[init, func] = useState("")
    const[movie, setMovie] = useState([])
    const[error, setError] = useState(null)
    const[loading, isLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await movieFinder();
                setMovie(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to load Movies...")
            }
            finally{
                isLoading(false)
            }
        }

        loadPopularMovies()
    },[])

    const onSubmission = async (e) =>{

        e.preventDefault()
        if(!init.trim()) return
        if(loading) return

        isLoading(true)

        try{
            console.log(init)
            const searchResult = await movieSearcher(init)
            console.log(searchResult)
            setMovie(searchResult)
            setError(null)
            console.log(movie)
        }
        catch (err){
            console.log(err)
            setError("Failed to search movies")
        }
        finally{
            isLoading(false)
        }

    }

    return(
        <div className="home">
            <form onSubmit={onSubmission} className="search-form">
                <input type="text" placeholder="Enter Input"
                value={init}
                onChange={e=> func(e.target.value)}
                />
                <input type="submit" value="submit"/>
            </form>
            {loading ? (<div>Loading...</div>)
            : <div className="movies-grid">
            {movie.map( movie => (

                movie.title.toLowerCase().startsWith(init) && <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>}
        </div>
    )
}

export default Home