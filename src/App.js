import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AllCourse from './Components/AllCourse/AllCourse';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LearningPath from './Components/LearningPath/LearningPath';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/course' element={<AllCourse></AllCourse>}></Route>
        <Route path='/learningpath' element={<LearningPath></LearningPath>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
