import React from 'react'
import { Span } from '../MyWork/Workcss'
import { SkillsContainer,SkillsCard,SkillsH1,SkillsH2,SkillsIcon,SkillsWrapper } from './Skillscss'
import Icon1 from '../../images/html-1.svg'
import Icon2 from '../../images/css-3.svg'
import Icon3 from '../../images/javascript-1.svg'
import Icon4 from '../../images/react-2.svg'
import Icon5 from '../../images/tailwind-css-2.svg'
import Icon6 from '../../images/firebase-2.svg'
import Icon7 from '../../images/git-icon.svg'
import Icon8 from '../../images/figma-1.svg'
import Icon9 from '../../images/bootstrap-4.svg'
import Icon10 from '../../images/elementor.svg'
import { Zoom,Roll,LightSpeed } from 'react-reveal';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Skills = () => {
      useEffect(() => {
            AOS.init({duration: 1000});
          }, []);
  return (
    <>
    <SkillsContainer name="skills" id="services">
<SkillsH1 data-aos="fade-up">My <Span>Skills</Span></SkillsH1>
  <Zoom right>  <SkillsWrapper >
      <SkillsCard >
<SkillsIcon Icon src={Icon1}/>
<SkillsH2>HTML</SkillsH2>
      </SkillsCard> 
      <SkillsCard>
<SkillsIcon Icon src={Icon2}/>
<SkillsH2>CSS</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon3}/>
<SkillsH2>JavaScript</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon4}/>
<SkillsH2>React</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon5}/>
<SkillsH2>Tailind CSS</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon6}/>
<SkillsH2>Firebase</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon7}/>
<SkillsH2>Git</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon8}/>
<SkillsH2>Figma</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon9}/>
<SkillsH2>Bootstrap</SkillsH2>
      </SkillsCard> 
      <SkillsCard >
<SkillsIcon Icon src={Icon10}/>
<SkillsH2>Elementor</SkillsH2>
      </SkillsCard> 
      
      </SkillsWrapper></Zoom>
</SkillsContainer>
    </>
  ) 
}

export default Skills
