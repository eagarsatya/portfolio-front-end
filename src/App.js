// import './App.scss';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Eagar Satya</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Nav from './Nav/Nav';
import Socials from './Socials/Social';
import About from './About/About';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/social" component={Socials} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;