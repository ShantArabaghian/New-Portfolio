import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn,NavBtnLink} from './Navbarcss'
import {FaBars} from 'react-icons/fa'
import { useState,useEffect } from 'react'
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 800){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };
useEffect(()=>{
    window.addEventListener('scroll', changeNav)
});
const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  return (
  <>
<Nav scrollNav={scrollNav}>
<NavbarContainer>
        <NavLogo scrollNav={scrollNav} spy={true} smooth={true} offset={-200} onClick={goToTop}>Shant</NavLogo>
        <MobileIcon  onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
        </MobileIcon>
     <NavMenu>
        <NavItem >
            <NavLinks scrollNav={scrollNav} spy={true} smooth={true} offset={-200} to="about">About Me</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks scrollNav={scrollNav} spy={true} smooth={true} offset={-200} to="services">My Services</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks scrollNav={scrollNav} spy={true} smooth={true} offset={-200} to="notworking">My Work</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks scrollNav={scrollNav} spy={true} smooth={true} offset={-200} to="skills">My Skills</NavLinks>
        </NavItem>
        <NavBtn>
    <NavBtnLink scrollNav={scrollNav} spy={true} smooth={true} offset={-200} to="contact">Contact Me</NavBtnLink>
</NavBtn>
    </NavMenu>
</NavbarContainer>
</Nav>
  
  </>
  )
}

export default Navbar
