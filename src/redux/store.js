import { createStore } from 'redux';
import heroReducer from './reducer/hero.reducers'
import movieReducer from './reducer/movie.reducers';

const store = createStore(heroReducer)
const store1 = createStore(movieReducer)

export  {store,store1}