import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
width: 100vw;
overflow-x: hidden;
background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'transparent')};
height: 80px;
margin-top: -80px;
filter: blur(0.5px);
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;

top: 0;
-webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(8px);
z-index: 10;
box-shadow: 15px 15px 50px grey;

@media screen and (max-width: 960px) {
transition: 0.8s all ease;

}
@media screen and (max-width: 480px) {

}
`
export const NavbarContainer = styled.div`

display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;

`
export const NavLogo = styled(LinkS)`
color: ${({scrollNav}) => (scrollNav ? '#fff' : '#fff')};
justify-self: flex-start;
cursor: pointer;
font-size: 1.5em;
display: flex;
background:#01bf71;
align-items: center;
margin-left: 24px;
margin-top: 4px;
margin-bottom:4px;
font-weight: bold;
padding: 7px;
border-radius: 50%;
text-decoration: none;
&:hover{
transition: all 0.2s ease-in-out;
background:${({scrollNav}) => (scrollNav ? '#000' : '#fff')};

color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
}
@media screen and (max-width: 768px) {

font-size: 1rem;
margin-left: 4px; 
padding: 10px;
margin-top: 10px;
margin-bottom:10px;
cursor: none;
}

`
export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 768px) {
display: block;
color: ${({scrollNav}) => (scrollNav ? '#01bf71' : '#FFF')};
position: absolute;
top: 0;

right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
display: none;
}
`
export const NavItem = styled.li`
height: 80px;

`
export const NavLinks = styled(LinkS)`
color: ${({scrollNav}) => (scrollNav ? '#000' : '#fff')};
display: flex; 
text-align: center;
align-items: center;
text-decoration: none;
padding: 1rem;
height: 100%;
cursor: pointer;
&.active{
border-bottom: 5px solid #01bf71;
}
&:hover{
transition: all 0.2s ease-in-out;
border-bottom: 5px solid #01bf71;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
display: none;
}
`
export const NavBtnLink = styled(LinkS)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px+22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
transition: all 0.2s ease-in-out;
background:${({scrollNav}) => (scrollNav ? '#000' : '#fff')};

color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
}
&.active{
  background:${({scrollNav}) => (scrollNav ? '#000' : '#fff')};

color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
}
`