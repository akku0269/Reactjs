import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return(
    <div>
      <h1>custom App</h1>
    </div>
  )
}

// const ReactElement = {          // iski syntax shi ni hai react framework ke hisab se krke render me direct ni chalra
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Çlick me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='blank'>Visit google</a>
)

const anotherUser = "Akash";

const ReactElement = React.createElement(
    'a',
    {href: "https://google.com", target:'blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
  // <App/>
)
