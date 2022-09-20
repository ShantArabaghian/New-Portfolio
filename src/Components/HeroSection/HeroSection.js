import React from 'react'
import { HeroContainer,HeroBg,VideoBg } from './Herocss'
import Video from '../../video/video.mp4'
import {ReactComponent} from '../../images/main3.svg';
import {ReactComponent as Icon2} from '../../images/main1.svg';

import './Hero.css'
const HeroSection = () => {
  return (
<HeroContainer name="home">
    
<HeroBg>
<ReactComponent/>
<Icon2/>
<VideoBg autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto" src={Video} type='video/mp4' />

</HeroBg>
</HeroContainer>

  )
}

export default HeroSection
