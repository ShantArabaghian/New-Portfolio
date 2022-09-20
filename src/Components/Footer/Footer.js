import React from 'react'
import { FooterContainer,FooterWraper,FooterLinks,FooterLinkIcons,FooterWraper2 } from './Footercss'
import {AiOutlineMobile,AiOutlineMail,AiOutlineGithub,AiOutlineWhatsApp} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWraper><FooterLinks  href="tel:+374980-117-34"><AiOutlineMobile/> +374 98011734</FooterLinks> 
      <FooterLinks href="mailto:shantarabaghian@outlook.com"><AiOutlineMail/> shantarabaghian@outlook.com</FooterLinks>
</FooterWraper>
<FooterWraper2>
  <FooterLinkIcons href="https://www.linkedin.com/in/shant-arabaghian-790a141a1/"
        className="youtube social" target="blank"><FaLinkedinIn/>
        </FooterLinkIcons>
        <FooterLinkIcons href="https://github.com/ShantArabaghian"
        className="youtube social" target="blank"><AiOutlineGithub/>
        </FooterLinkIcons>
        <FooterLinkIcons href="https://api.whatsapp.com/send?phone=37498011734"
        className="youtube social" target="blank"><AiOutlineWhatsApp/>
        </FooterLinkIcons>
</FooterWraper2>

    </FooterContainer>
  )
}

export default Footer
