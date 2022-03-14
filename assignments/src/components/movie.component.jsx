import { Component } from "react";
import { connect } from "react-redux";
import addMovie from "../redux/action/movie.action";


const mapStatetoProps = (state) => {
    return {
            numOfMovies: state.numOfMovies}
}
const mapDispatchToProps = (dispatch) => {
    return { 
            addMovie: () => dispatch( addMovie())}
}

class MovieComponent extends Component{
    render(){
        return <div>
        <h1>Using React redux</h1>
        <h3>Number of Movies: {this.props.numOfMovies}</h3>
        <button onClick={this.props.addMovie}>Add Movie</button>
        </div>
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(MovieComponent);