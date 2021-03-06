import { useDispatch, useSelector } from "react-redux"
import {addMovie} from '../redux'

let MovieHookComponent = () => {
    let numOfMovies = useSelector(function(state){return state.numOfMovies})
    let dispatch = useDispatch()

        return <div>
            <h1>Using Redux with hooks</h1>
            <h3>Number of Movies: {numOfMovies}</h3>
            <button onClick={()=> dispatch( addMovie())}>Add Movie</button>
        
        
        
        </div>

}
export default MovieHookComponent
