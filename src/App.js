import { Header } from './components/header';
import style from './App.module.scss';
import { Grid } from './components/Content';

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Work } from './components/Pages/Work';
import { About } from './components/Pages/About';
import { Resume } from './components/Pages/Resume';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className={style.context}>
      <Header text={'test'} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Grid />}>
            <Route index element={<Work />} />
            <Route path='work' element={<Work />} />
            <Route path="about" element={<About title={'Page is under construction—stay tuned!'}/>} />
            <Route path="resume" element={<Resume title={'Page is under construction—stay tuned!'}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
