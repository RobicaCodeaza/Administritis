import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  IoCallOutline,
  IoLogoInstagram,
  IoMailOutline,
  IoLogoFacebook,
} from 'react-icons/io5';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import Grid from './Grid.jsx';

import { animateScroll as scroll, scroller } from 'react-scroll';

const StyledFooter = styled.footer`
  background-color: var(--color-black);

  padding: 6rem 12rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 4.8rem 0 2.4rem 0;
  gap: 0 12rem;
  @media (max-width: 850px) {
    gap: 3.2rem 0;
    display: flex;
    flex-direction: column;
  }
`;

const FooterRow = styled.div`
  align-self: start;
  border-top: 1px solid var(--color-accent2-light);
  padding: 2.4rem 4rem 0 4rem;
  width: 100%;
  text-align: center;
`;

const ContactRow = styled(FooterRow)`
  justify-self: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
`;

const OtherServices = styled(FooterRow)`
  justify-self: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* text-align: center; */
`;

const ContactDetails = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  color: var(--color-accent2-light);
  gap: 0.4rem;
  font-size: 1.4rem;
`;

const FooterContactLinks = styled.ul`
  justify-self: right;
  justify-content: center;
  align-items: center;
  /* padding: 2.4rem 0; */
  list-style: none;
  display: flex;
  gap: 2.4rem;
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--color-accent2-light);
    border: 1px solid transparent;
    transition: all 0.3s;
    padding: 0.4rem 0.8rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    /* border-radius: 0.5rem; */

    /* background-color: #201658; */
    /* color: var(--color-primary-light--2); */

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      /* bottom: -10px; */
      width: 0;
      height: 1px;
      transition: all 0.3s;
      background-image: linear-gradient(
        var(--color-accent1),
        var(--color-accent1-dark)
      );
    }
  }

  &:hover {
    transform: translateY(-1.5px);
    /* background-color: var(--color-accent1);
    color: var(--color-primary-light); */
    color: #fbada3;
    letter-spacing: 1px;
    &::before {
      width: 15rem;
    }
  }
`;

function Footer() {
  const goTo = function (to) {
    if (to === 'top') {
      scroll.scrollToTop({ duration: 300, smooth: true });
      return;
    }
    if (to === 'bottom') {
      scroll.scrollToTop();
      return;
    }

    scroller.scrollTo(to, { duration: 350, smooth: 'easeInOutQuart' });
  };

  return (
    <StyledFooter>
      <Logo></Logo>
      <StyledGrid>
        <ContactRow>
          <ContactDetails>
            <span>R&A Administritis</span>
            <span>Telefon: 0760956918</span>
            <span>Bucuresti,Sector 3</span>
          </ContactDetails>
          <FooterContactLinks>
            <li>
              <a>
                <Icon hovercolor='#fbada3' color={'#fddeda'} sizes='small'>
                  <IoCallOutline></IoCallOutline>
                </Icon>
              </a>
            </li>
            <li>
              <a>
                <Icon hovercolor='#fbada3' color={'#fddeda'} sizes='small'>
                  <IoMailOutline></IoMailOutline>
                </Icon>
              </a>
            </li>
            <li>
              <a>
                <Icon color={'#fddeda'} hovercolor='#fbada3' sizes='small'>
                  <IoLogoInstagram></IoLogoInstagram>
                </Icon>
              </a>
            </li>
            <li>
              <a>
                <Icon color={'#fddeda'} hovercolor='#fbada3' sizes='small'>
                  <IoLogoFacebook></IoLogoFacebook>
                </Icon>
              </a>
            </li>
          </FooterContactLinks>
        </ContactRow>
        <OtherServices>
          <StyledLink onClick={() => goTo('top')}>Acasa</StyledLink>
          <StyledLink to='/'>Servicii</StyledLink>
          <StyledLink to='/'>Documente utile</StyledLink>
          <StyledLink to='/'>Contact</StyledLink>
          <StyledLink to='/'>Avizier</StyledLink>
          <StyledLink onClick={() => goTo('colaborare')}>Colaborare</StyledLink>
        </OtherServices>
      </StyledGrid>
    </StyledFooter>
  );
}

export default Footer;
