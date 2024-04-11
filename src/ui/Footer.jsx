import styled from 'styled-components';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { Link } from 'react-router-dom';
import {
  IoCallOutline,
  IoLogoInstagram,
  IoMailOutline,
  IoLogoFacebook,
} from 'react-icons/io5';

import Grid from './Grid.jsx';
import Row from './Row.jsx';

const StyledFooter = styled.footer`
  background-color: var(--color-black);

  padding: 6rem 12rem;
`;

const FooterRow = styled.div`
  align-self: start;
  border-top: 1px solid var(--color-accent2-light);
  padding: 2.4rem 4rem;
  width: 80%;
  text-align: center;
`;

const ContactRow = styled(FooterRow)`
  justify-self: right;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const OtherServices = styled(FooterRow)`
  justify-self: left;
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
      width: 10%;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo></Logo>
      <Grid columns='1fr 1fr' margin='4.8rem 0 2.4rem 0' gap='0 20rem'>
        <ContactRow>
          <ContactDetails>
            <span>R&A Administritis</span>
            <span>Telefon: 0760956918</span>
            <span>Bucuresti,Sector 3</span>
          </ContactDetails>
          <FooterContactLinks>
            <li>
              <a>
                <Icon hoverColor='#fbada3' color={'#fddeda'} sizes='small'>
                  <IoCallOutline></IoCallOutline>
                </Icon>
              </a>
            </li>
            <li>
              <a>
                <Icon hoverColor='#fbada3' color={'#fddeda'} sizes='small'>
                  <IoMailOutline></IoMailOutline>
                </Icon>
              </a>
            </li>
            <li>
              <a>
                <Icon color={'#fddeda'} hoverColor='#fbada3' sizes='small'>
                  <IoLogoInstagram></IoLogoInstagram>
                </Icon>
              </a>
            </li>
            <li>
              <a>
                <Icon color={'#fddeda'} hoverColor='#fbada3' sizes='small'>
                  <IoLogoFacebook></IoLogoFacebook>
                </Icon>
              </a>
            </li>
          </FooterContactLinks>
        </ContactRow>
        <OtherServices>
          <StyledLink to='/'>Acasa</StyledLink>
          <StyledLink to='/'>Acasa</StyledLink>
          <StyledLink to='/'>Acasa</StyledLink>
          <StyledLink to='/'>Acasa</StyledLink>
        </OtherServices>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;
