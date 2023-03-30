import logo from './logo.svg';
import './App.css';
const number =55555;
const singer ={name:'Dr. Mahfuz'}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className='container'><h2>Hello ,i am Md.Asikur Rahman</h2></div>
        <div className='music'>
          <p>Name:{2222+ number}</p>
          <p>Name:{singer.name}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
