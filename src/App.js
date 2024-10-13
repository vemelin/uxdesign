import { Header } from './components/header';
import { NavBar } from './components/NavBar';
import style from './App.module.scss';
import { Grid } from './components/Content';

function App() {
  return (
    <div className={style.context}>
      <Header text={'test'} />
      <Grid />
      <NavBar />
    </div>
  );
}

export default App;
