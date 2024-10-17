import style from './Grid.module.scss';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

export const Grid = ({
  ...props
}) => {
  return(
    <div>
      <Outlet />
      <NavBar />
    </div>
  )
}