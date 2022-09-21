import React from 'react'
import { HeroContainer,HeroBg,VideoBg } from './Herocss'
import Video from '../../video/video.gif'
import {ReactComponent} from '../../images/main3.svg';
import {ReactComponent as Icon2} from '../../images/main1.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import './Hero.css'
const HeroSection = () => {

    useEffect(() => {
          AOS.init({duration: 1000});
        }, []);
  return (
<HeroContainer name="home">
    
<HeroBg>
< ReactComponent data-aos="fade-up"/>
<Icon2 data-aos="fade-up"/>
<VideoBg autoPlay muted loop src={Video} type='video/mp4' />

</HeroBg>
</HeroContainer>

  )
}

export default HeroSection
