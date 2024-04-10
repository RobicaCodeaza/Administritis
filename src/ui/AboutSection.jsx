import styled from 'styled-components';
import Container from './Container.jsx';
import Heading from './Heading.jsx';
import Row from './Row.jsx';
import Grid from './Grid.jsx';
import aboutPhoto from '/assets/aboutUs.jpg';

import { GrOptimize, GrSecure } from 'react-icons/gr';
import { TiCloudStorageOutline } from 'react-icons/ti';
import Icon from './Icon.jsx';
import IconBackground from './IconBackground.jsx';

const StyledAboutSection = styled.section`
  padding: 12rem 0;
`;
const AboutDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.8;
  align-self: end;
  color: var(--color-grey-dark);
`;

const AboutPhoto = styled.img`
  height: 50rem;
  justify-self: center;
  /* width: auto; */
  width: 35rem;
  object-fit: cover;
  border-radius: 0.5rem;

  @media (max-width: 1000px) {
  }
  @media (max-width: 850px) {
    /* height: 50rem;
    width: 35rem; */
    height: 40rem;
    width: 25rem;
  }
`;

const AboutUsList = styled.ul`
  align-self: center;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  list-style: none;
`;

const AboutUsBullet = styled.li`
  display: flex;
  flex-direction: column;
`;

function AboutSection() {
  return (
    <StyledAboutSection>
      <Container>
        <Grid columns='1fr 1fr' margin='0 0 4.8rem 0'>
          <Row size='tiny'>
            <Heading as='h4' variation='accent'>
              Scopul
            </Heading>
            <Heading as='h2'>De ce sa ne alegi pe noi?</Heading>
          </Row>
          <AboutDescription>
            Serviciile noastre de administrare a imobilelor se desfasoara in
            Sectoarele 3,4 si 5 si se concentreaza pe eficienta costurilor,
            promptitudinea si siguranta serviciilor.
          </AboutDescription>
        </Grid>
        <Grid columns='1fr 1fr' gap='5.6rem 0'>
          <AboutPhoto src={aboutPhoto}></AboutPhoto>
          <AboutUsList>
            <AboutUsBullet>
              {/* <Icon></Icon> */}
              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hoverColor='#140368' sizes='tiny'>
                  <GrOptimize></GrOptimize>
                </Icon>
              </IconBackground>
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
                Prioritate
              </Heading>
              <AboutDescription>
                Prioritatea noastră este securitatea ta, alături de optimizarea
                cheltuielilor și reacția promptă la nevoile tale.
              </AboutDescription>
            </AboutUsBullet>
            <AboutUsBullet>
              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hoverColor='#140368' sizes='tiny'>
                  <GrSecure></GrSecure>
                </Icon>
              </IconBackground>
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
                Protectie
              </Heading>
              <AboutDescription>
                Garantăm o protecție adecvată a datelor, fie că este vorba
                despre stocarea pe hârtie sau în format electronic pe servere
                securizate.
              </AboutDescription>
            </AboutUsBullet>
            <AboutUsBullet>
              <IconBackground color='#C2D9FF' size='large'>
                <Icon color={'#7752FE'} hoverColor='#140368' sizes='tiny'>
                  <TiCloudStorageOutline></TiCloudStorageOutline>
                </Icon>
              </IconBackground>
              <Heading as='h4' margin='1.2rem 0 0.8rem 0'>
                Acces Facil
              </Heading>
              <AboutDescription>
                Oferim acces facil și securizat pentru fiecare proprietar prin
                intermediul sistemelor online, facilitând introducerea
                indexurilor la apă și accesul la informațiile relevante ale
                asociației într-un singur clic.
              </AboutDescription>
            </AboutUsBullet>
          </AboutUsList>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
}

export default AboutSection;
