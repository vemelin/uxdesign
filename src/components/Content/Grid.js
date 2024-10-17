import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

export const Grid = ({
  ...props
}) => {
  return(
      <>
        {/* <NavBar /> */}
        <Outlet />
      </>
  )
}