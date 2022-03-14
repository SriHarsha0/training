import { Component } from "react";
import { connect } from "react-redux";
import  addHero  from "../redux/action/hero.actions";



const mapStatetoProps = (state) => {
    return {numOfHeroes: state.numOfHeroes
}
}
const mapDispatchToProps = (dispatch) => {
    return { addHero : ()=> dispatch( addHero())
            
}
}

class HeroComponent extends Component{
    render(){
        return <div>
        <h1>Using React redux</h1>
        <h3>Number of Heroes: {this.props.numOfHeroes}</h3>
        <button onClick={this.props.addHero}>Add hero</button>
        </div>
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(HeroComponent);