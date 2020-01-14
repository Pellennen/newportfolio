// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to="/">Home</NavLink>


    <NavLink to="/about">About</NavLink>
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
