import logo from './logo.svg';
import './App.css';
const number =55555;
const singer ={name:'Dr. Mahfuz'}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
     
      
    </div>
  );
}
function Person() {
  return (<div className='Person'>
     <h1>Md.Asikur Rahman</h1>
     <p>Compuer Science Engineer</p>


    </div>
  
  );
}


export default App;
