
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
