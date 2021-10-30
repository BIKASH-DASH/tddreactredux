import React from 'react'
import reactDom from 'react-dom'
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import RootReducer from './reducers/RootReducer'
const store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
reactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));
