import React from 'react'
import { Span } from '../MyWork/Workcss'
import { ServicesContainer,ServicesCard,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper } from './Servicescss'
import Icon1 from '../../images/HTMLCSS.svg'
import Icon2 from '../../images/React.svg'
import Icon4 from '../../images/wordpress-blue.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Services = () => {
      useEffect(() => {
            AOS.init({duration: 1000});
          }, []);
  return (
    <>
    <ServicesContainer id="services">
<ServicesH1 data-aos="fade-up">My <Span>Services</Span></ServicesH1>
    <ServicesWrapper>
      <ServicesCard data-aos="fade-down">
<ServicesIcon Icon src={Icon1}/>
      <ServicesH2>Responsive Web Design</ServicesH2>
      <ServicesP>I can make a responsive web application using HTML/CSS. </ServicesP>
      </ServicesCard> 
      <ServicesCard data-aos="fade-up">
<ServicesIcon Icon src={Icon2}/>
      <ServicesH2>React JS Development</ServicesH2>
      <ServicesP>I can make full functional web applications using ReactJs. </ServicesP>
      </ServicesCard> 
      <ServicesCard data-aos="fade-down">
<ServicesIcon Icon src={Icon4}/>
      <ServicesH2>Wordpress Development</ServicesH2>
      <ServicesP>I can create a website using Worpress Plugins.</ServicesP>    
      </ServicesCard> 
      
      </ServicesWrapper>
</ServicesContainer>
    </>
  ) 
}

export default Services
