import { useDispatch, useSelector } from "react-redux"
import {addHero} from '../redux'

let HeroHookComponent = () => {
    let numOfHeroes = useSelector(function(state){return state.numOfHeroes})
    let dispatch = useDispatch()

        return <div>
            <h1>Using Redux with hooks</h1>
            <h3>Number of Heroes: {numOfHeroes}</h3>
            <button onClick={()=> dispatch( addHero())}>Add hero</button>
        
        
        
        </div>

}
export default HeroHookComponent
