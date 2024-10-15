import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import About from './About';
function Header(){
  return(
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}
function App(){
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;






















































//There are 2 types of components in reactjs  1.Functional component , 2.Class component
//This Is The Functional Component
// function App(){
//   return(
//     <div>
//       <h2>Welcome To Functional Component</h2>
//       <Test/>
//     </div>
//   )
// }
//This Is The Nesting Component in React.js
// function Test(){
//   return(
//     <h2>This Is The Test Functional Component</h2>
//   )
// }
// export default App;


// import { Component } from "react";
// //class component
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <h2>This Is A Class Componenet</h2>
//         <Test/>
//       </div>
//     )
//   }
// }
//This Is The Nesting class component
// class Test extends Component{
//   render(){
//     return(
//       <h2>This Is The Test Component Of class component</h2>
//     )
//   }
// }
// export default App;





// import './App.css'
// function App(){
//   return(
//     <div>
//       <button type="button" className="btn btn-primary">Primary</button>
//       <button type="button" className="btn btn-secondary">Secondary</button>
//       <button type="button" className="btn btn-success">Success</button>
//       <button type="button" className="btn btn-danger">Danger</button>
//       <button type="button" className="btn btn-warning">Warning</button>
//       <button type="button" className="btn btn-info">Info</button>
//       <button type="button" className="btn btn-light">Light</button>
//       <button type="button" className="btn btn-dark">Dark</button>
//       <button type="button" className="btn btn-link">Link</button>  
//       {/* <h2>This Is An Example Of JSX</h2>
//       <h3 style={{color:'red'}}>This Is Inline Style Sheet</h3> */}
//     </div>
//   )
// }
// export default App;

//Routing Concept in react.js































// import First from './First'
// import Second from './Second'
// import './App.css'

// function App() {
//   return (
//     <>
//       <First/>
//       <Second/>
//     </>
//   )
// }

// export default App