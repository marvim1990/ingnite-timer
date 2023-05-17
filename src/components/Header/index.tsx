import { Scroll, Timer } from 'phosphor-react'
import LogoIgnite from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
