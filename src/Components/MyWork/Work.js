import React from 'react'
import Icon1 from '../../images/Clothing.svg'
import Icon2 from '../../images/Jewel.svg'
import Icon3 from '../../images/movie2.svg'
import Icon4 from '../../images/grill.svg'
import Icon5 from '../../images/logo-dark.svg'
import Icon6 from '../../images/port.svg'
import {AiTwotoneEye} from "react-icons/ai";
 import {AiFillGithub} from "react-icons/ai";
 import AOS from 'aos';
 import 'aos/dist/aos.css';
 import { useEffect } from 'react';

import { ProjectsContainer,ProjectsCard,ProjectsH1,ProjectsH2,ProjectsIcon,ProjectsP,ProjectsWrapper,Span,Info,InfoH1 } from './Workcss'
const Work = () => {
      useEffect(() => {
            AOS.init({duration: 1000});
          }, []);
  return (
    <>
      <ProjectsContainer name="notworking" id="services">
<ProjectsH1 data-aos="fade-up">My <Span>Creative</Span> Portfolio</ProjectsH1>
    <ProjectsWrapper data-aos="fade-right">
      <ProjectsCard >
<ProjectsIcon Icon src={Icon1}/>
<Info><InfoH1 href="https://yourlittleshop.netlify.app/" target="_blank"><AiTwotoneEye/></InfoH1>
<InfoH1 href="https://github.com/ShantArabaghian/Yourlittleshop" target="_blank"><AiFillGithub/></InfoH1>
</Info>
      <ProjectsH2>Your Little Shop</ProjectsH2>
      <ProjectsP>A little clothing store website done for my senior project</ProjectsP>
      </ProjectsCard> 
      <ProjectsCard >
<ProjectsIcon Icon src={Icon2}/>
<Info><InfoH1 href="https://kmjewelry.net/" target="_blank"><AiTwotoneEye/></InfoH1>
<InfoH1 href="https://github.com/sahag98/kmJewelry" target="_blank"><AiFillGithub/></InfoH1>
</Info>
      <ProjectsH2>KMjewelry</ProjectsH2>
      <ProjectsP>A business landing page for a jewelry repair company</ProjectsP>
      </ProjectsCard> 
      <ProjectsCard >
<ProjectsIcon Icon src={Icon3}/>
<Info><InfoH1 href="https://moviedb-shant.netlify.app/" target="_blank"><AiTwotoneEye/></InfoH1>
<InfoH1 href="https://github.com/ShantArabaghian/MovieAPI" target="_blank"><AiFillGithub/></InfoH1>
</Info>
      <ProjectsH2>MOVIEDB</ProjectsH2>
      <ProjectsP>A small IMDB clone by fetching an API </ProjectsP>
      </ProjectsCard> 
      <ProjectsCard >
<ProjectsIcon Icon src={Icon4}/>
<Info><InfoH1 href="https://smokeonthegrill.netlify.app/" target="_blank"><AiTwotoneEye/></InfoH1>
<InfoH1 href="https://github.com/ShantArabaghian/SmokeOnTheGrill" target="_blank"><AiFillGithub/></InfoH1>
</Info>
      <ProjectsH2>SmokeOnTheGrill</ProjectsH2>
      <ProjectsP>Small restaurent website done using React </ProjectsP>
      </ProjectsCard> 
      <ProjectsCard >
<ProjectsIcon Icon src={Icon5}/>
<Info><InfoH1 href="http://shantwordpress.byethost4.com/homepage/" target="_blank"><AiTwotoneEye/></InfoH1>

</Info>
      <ProjectsH2>MiTech</ProjectsH2>
      <ProjectsP>Single page website done using Wordpress Elementor plugin </ProjectsP>
      </ProjectsCard> 
      <ProjectsCard >
<ProjectsIcon Icon src={Icon6}/>
<Info><InfoH1 href="https://shantarabaghian.netlify.app/" target="_blank"><AiTwotoneEye/></InfoH1>
<InfoH1 href="https://github.com/ShantArabaghian/OldPortfolio" target="_blank"><AiFillGithub/></InfoH1>
</Info>
      <ProjectsH2>Old Portfolio</ProjectsH2>
      <ProjectsP>This was my old portfolio done using React</ProjectsP>
      </ProjectsCard> 
      </ProjectsWrapper>
</ProjectsContainer>
    </>
  )
}

export default Work
