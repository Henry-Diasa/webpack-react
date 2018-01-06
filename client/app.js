import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {AppContainer} from 'react-hot-loader'

const root = document.querySelector("#root")
const render = Component=>{
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        root
    )
}
render(App,root);
if(module.hot){
    module.hot.accept('./App.jsx',()=>{
        const NextApp = require('./App.jsx').default;
        // ReactDOM.hydrate(<NextApp/>,document.querySelector("#root"))
        render(NextApp,root)
    })
}