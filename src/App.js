import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          App Deployed Successfully on AWS!
        </p>
        <a
          className="App-link"
          href="https://www.landolsi.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webdesign and Development by Landolsi Webdesign.
        </a>
      </header>
    </div>
  );
}

export default App;
