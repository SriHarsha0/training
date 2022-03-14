import React, { Component } from "react";
import HeroComponent from "./components/hero.component";
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {store1} from './redux/store'
import MovieComponent from "./components/movie.component";



class MainApp extends Component{
    heroCount = React.createRef();
    render(){
        return <div className="container">
                    <h1>React Redux</h1>
                    <hr/>
                    <Provider store={ store  }>
                       <HeroComponent/>
                    </Provider>
                    <Provider store={ store1  }>
                       <MovieComponent/>
                    </Provider>
                </div>
    }
}
 
export default MainApp;