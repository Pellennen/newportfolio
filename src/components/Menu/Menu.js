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
      <a href="/">
        <span role="img" aria-label="contact"></span>
        Skills
        </a>
        <a href="/">
          <span role="img" aria-label="contact"></span>
          Contact
          </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
