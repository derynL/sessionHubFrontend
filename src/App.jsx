import Header from './components/Header';
import Footer from './components/statics/Footer';
import Home from './components/homeViews/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './components/homeViews/Register';
// import NotFound from './utils/NotFound';
import About from './components/statics/About';
import GetStarted from './components/operational/GetStarted';
import SessionTalk from './components/operational/SessionTalk';

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<About />} />
            <Route path='/get-started' element={<GetStarted />} />
            <Route path='/session-talk' element={<SessionTalk />} />
            {/* <Route path='/*' element={<NotFound />} /> */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
