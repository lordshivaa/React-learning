import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chalti ka naam gadi"

const reactElement = React.createElement(
    'a',
    { herf: 'https://google.com', target : '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
