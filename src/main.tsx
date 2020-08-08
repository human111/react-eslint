import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/App'

console.log('=====f=df=d====>>', App)
// import App1 from './App1'
// import './views/App.css'

// import logo from './views/logo.svg'

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

// export default App

ReactDOM.render(<App />, document.getElementById('root'))
