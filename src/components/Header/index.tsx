import React from 'react'
import { HeaderBar, Title } from './styles'
import logo from '../../assets/images/logo.png'

export const Header: React.FC = () => (
  <HeaderBar>
    <img src={logo} alt="efood" />
    <Title>
      Viva experiências gastronômicas no conforto da sua casa
    </Title>
  </HeaderBar>
)