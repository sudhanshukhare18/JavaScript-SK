import {About as Ab ,Contact} from './About.jsx';
import './App.css';


function App() {
  

  return (
    <>
    <h1>Welcome to React Class</h1>
    <div className='navbar'>
      <h1>Man</h1>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>



    <Ab/>
    <Contact/>
    </>
  )
}

export default App
