// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span aria-label="about me"></span>
        About me
      </a>
      <a href="/">
        <span role="img" aria-label="price"></span>
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
