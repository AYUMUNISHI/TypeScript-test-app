import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import Home from './page/Home';
import posts from './data/Posts';
import './index.css';
import { Show } from './page/Show';
import { post } from './PostsType';

function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts/:id' element={<Show />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
