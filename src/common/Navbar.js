import '../App.css'
import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {hoverCursorStyle, defaultCursorStyle, clickCursorStyle} from "../redux/actions/cursorStyle";

export default function Navbar() {

  const dispatch = useDispatch();

  return (
    <Box className="navbar">
      <NavLink onMouseEnter={() => dispatch(hoverCursorStyle())} onMouseLeave={() => dispatch(defaultCursorStyle())} onMouseDown={() => dispatch(clickCursorStyle())} to={'/'} className='navbarLogo'>AIC</NavLink>
      <NavLink onMouseEnter={() => dispatch(hoverCursorStyle())} onMouseLeave={() => dispatch(defaultCursorStyle())} onMouseDown={() => dispatch(clickCursorStyle())} to={'/about'} activeClassName={'active'} className='navbarItem'>About</NavLink>
      <NavLink onMouseEnter={() => dispatch(hoverCursorStyle())} onMouseLeave={() => dispatch(defaultCursorStyle())} onMouseDown={() => dispatch(clickCursorStyle())} to={'/works'} activeClassName={'active'} className='navbarItem'>Works</NavLink>
      <p onMouseEnter={() => dispatch(hoverCursorStyle())} onMouseLeave={() => dispatch(defaultCursorStyle())} className='navbarItem'>Papers</p>
      <p onMouseEnter={() => dispatch(hoverCursorStyle())} onMouseLeave={() => dispatch(defaultCursorStyle())} className='navbarItem contactNavbarItem'>Contact</p>
    </Box>
  )
}