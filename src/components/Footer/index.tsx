import React from 'react'
import { FooterContainer, SocialLinks, FooterText } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'

export const Footer: React.FC = () => (
  <FooterContainer>
    <img src={logo} alt="efood" />
    <SocialLinks>
      <li>
        <a href="#instagram">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#facebook">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#twitter">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
    </SocialLinks>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
    </FooterText>
  </FooterContainer>
)