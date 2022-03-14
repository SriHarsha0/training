import React, { Component } from "react";
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {store1} from './redux/store'
import HeroHookComponent from "./components/hero.component.hook";
import MovieHookComponent from "./components/movie.component.hook";



class MainApp extends Component{
    heroCount = React.createRef();
    render(){
        return <div className="container">
                    <h1>React Redux</h1>
                    <hr/>
                    <Provider store={ store  }>
                        <HeroHookComponent/>
                    </Provider>
                    <Provider store={ store1  }>
                       <MovieHookComponent/>
                    </Provider>
                </div>
    }
}
 
export default MainApp;