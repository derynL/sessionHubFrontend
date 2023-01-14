import Header from './components/Header';
import Footer from './components/statics/Footer';
import Home from './components/homeViews/Home';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='container'>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
