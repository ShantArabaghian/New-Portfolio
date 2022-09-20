import React from 'react'
import { SidebarContainer, CloseIcon,Icon,SidebarLink,SidebarRoute,SidebarWrapper,SidebarMenu } from './Sidebarcss'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
<SidebarMenu>
<SidebarLink onClick={toggle} spy={true} smooth={true} offset={-200} to="about">About Me</SidebarLink>
<SidebarLink onClick={toggle} spy={true} smooth={true} offset={-200} to="services">My Services</SidebarLink>
<SidebarLink onClick={toggle} spy={true} smooth={true} offset={-200} to="notworking">My Work</SidebarLink>
<SidebarLink onClick={toggle} spy={true} smooth={true} offset={-200} to="skills">My Skills</SidebarLink>
<SidebarRoute onClick={toggle} spy={true} smooth={true} offset={-200} to="contact">Contact Me</SidebarRoute>

</SidebarMenu>
</SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar
