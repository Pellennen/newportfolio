// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom'
import Pic from './Pic'

const Menu = ({ open, setOpen }) => {
 const setopen = () => {
   setOpen(!open)
 }

  return (
    <StyledMenu open={open}>
    <Pic/>
      <NavLink to="/" onClick={setopen}>Home</NavLink>


    <NavLink to="/about" onClick={setopen}>About</NavLink>
      <NavLink to="/Skills" onClick={setopen}>Skills</NavLink>
      <NavLink to="/Contact" onClick={setopen}>Contact</NavLink>

    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
