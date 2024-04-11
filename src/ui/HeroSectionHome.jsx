import styled from 'styled-components';
import {
  IoCallOutline,
  IoMailOutline,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io5';

import heroMain from '/assets/heroMain.jpg';
import Heading from './Heading.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import { RiFacebookBoxLine } from 'react-icons/ri';

const StyledHeroSection = styled.div`
  display: flex;
  /* height: 40vw; */
  /* padding: 90vh; */
`;
const HeroSectionLeft = styled.div`
  flex: 0 1 65%;
  padding: 6vw 13vw 6vw 9.6vw;

  @media (max-width: 850px) {
    padding: 6vw 15vw 6vw 4vw;
  }
`;
const HeroSectionRight = styled.div`
  flex: 0 1 35%;
  background-color: var(--color-primary-light--1);
  position: relative;
  padding: 5vw;
  display: flex;
  justify-content: right;
  align-items: center;
  @media (max-width: 1050px) {
    align-items: start;
    justify-content: center;
  }
  @media (max-width: 850px) {
    /* flex: 0 1 30%; */
  }
`;

const HeroMainImgBox = styled.div`
  position: absolute;
  left: -50%;
  top: 50%;
  transform: translate(5vw, -50%);
  /* height: 30vw;
  width: 30vw; */
  width: 30vw;
  height: 30vw;
  box-shadow: 0 0.75rem 1.5rem 0 var(--shadow);

  @media (max-width: 850px) {
    left: -20%;
    transform: translate(0, -50%);
    height: 30rem;
    width: 30rem;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(209, 205, 230, 0.25),
      rgba(232, 230, 243, 0.1)
    );
  }
`;
const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 0.25rem;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeroDescription = styled.span`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-grey-dark);
`;

const HeroAction = styled.div`
  margin-top: 3.2rem;
  display: flex;
  gap: 2.4rem;
`;

const HeroContactLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.5rem;
  @media (max-width: 1050px) {
    flex-direction: row;
  }

  & li {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    & a {
      display: block;
      /* display: flex; */
      /* align-items: center; */
      /* justify-content: center; */
      cursor: pointer;
    }
  }
`;
const ContactItem = styled.li``;

const ContactLink = styled.a``;

function HeroSectionHome({ children }) {
  return (
    <StyledHeroSection>
      <HeroSectionLeft>
        <HeroContent>
          <Heading as='h3' margin='0 0 2.4rem 0' variation='accent'>
            Profesionalism & Incredere
          </Heading>
          <Heading as='h1'>Administrare Imobile in grija noastra</Heading>
          <HeroDescription>
            Servicii complete de administrare imobile. Totul mai facil si
            accesibil proprietarilor.
          </HeroDescription>
          <HeroAction>
            <Button variation='secondary' to='servicii'>
              Servicii
            </Button>
            <Button variation='primary'>Contact</Button>
          </HeroAction>
        </HeroContent>
      </HeroSectionLeft>
      <HeroSectionRight>
        <HeroMainImgBox>
          <HeroImg src={heroMain}></HeroImg>
        </HeroMainImgBox>
        <HeroContactLinks>
          <li>
            <a>
              <Icon hoverColor='#7c2d24' color={'#626262'} sizes='medium'>
                <IoCallOutline></IoCallOutline>
              </Icon>
            </a>
          </li>
          <li>
            <a>
              <Icon hoverColor='#7c2d24' color={'#626262'} sizes='medium'>
                <IoMailOutline></IoMailOutline>
              </Icon>
            </a>
          </li>
          <li>
            <a>
              <Icon color={'#626262'} hoverColor='#7c2d24'>
                <IoLogoInstagram></IoLogoInstagram>
              </Icon>
            </a>
          </li>
          <li>
            <a>
              <Icon color={'#626262'} hoverColor='#7c2d24' sizes='medium'>
                <IoLogoFacebook></IoLogoFacebook>
              </Icon>
            </a>
          </li>
        </HeroContactLinks>
      </HeroSectionRight>
    </StyledHeroSection>
  );
}

export default HeroSectionHome;
