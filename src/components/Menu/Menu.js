// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom'
import Pic from './Pic'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
    <Pic/>
      <NavLink to="/">Home</NavLink>


    <NavLink to="/about">About</NavLink>
      <NavLink to="/Skills">Skills</NavLink>
      <NavLink to="/Contact">Contact</NavLink>

    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
