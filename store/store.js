import {createStore} from 'redux';
import CommentReducer from '../reducers/commentredux';
const store2 =createStore(CommentReducer)
export default store2;