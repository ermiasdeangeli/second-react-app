
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './MyFooter';
import MyNavbar from './MyNavbar';
import AllTheBooks from './AllTheBooks';

function App() {
  alert("Welcome to Epishop");
  return (
    <>
      <header className="App-header">
        <MyNavbar />
        <h1>Epishop</h1>
      </header>
      <main>
        <AllTheBooks/>
      </main>
      <footer>
        <MyFooter />
      </footer>
      </>
  );
}

export default App;
