import styled from 'styled-components';
import Grid from './Grid.jsx';
import Row from './Row.jsx';
import Heading from './Heading.jsx';
import Container from './Container.jsx';
import featuresPhoto from '/assets/features.jpg';
import IconBackground from './IconBackground.jsx';
import Icon from './Icon.jsx';

import { RiCheckboxMultipleFill } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';
import { VscTools } from 'react-icons/vsc';
import Button from './Button.jsx';
const StyledFeaturesSection = styled.div`
  padding: 12rem 0rem;
  background-color: var(--color-white);
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row auto;
  gap: 3.2rem;
  /* align-items: center; */
  /* align-content: center; */

  @media (max-width: 850px) {
    /* grid-row: 2/3; */
    /* grid-column: 1/-1; */
    /* justify-self: center; */
    display: flex;
    flex-direction: column;
  }
`;

const FeaturesBox = styled.div`
  padding: 2.4rem 3.2rem;
  background-color: var(--color-primary-light);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 31.5rem;
  gap: 1.2rem;
  /* box-shadow: 0 0.5rem 1rem var(--shadow-lightest); */
  align-self: stretch;
  /* justify-self: stretch; */
  @media (max-width: 850px) {
    /* height: 25.5rem; */
    /* align-self: center; */
    /* flex-grow: 1; */
  }
`;

const FeaturesPhoto = styled.img`
  height: 50rem;
  justify-self: center;
  width: 35rem;
  object-fit: cover;
  border-radius: 0.5rem;
  @media (max-width: 1000px) {
    height: 40rem;
    width: 25rem;
  }
  @media (max-width: 850px) {
    height: 45rem;
    width: 30rem;
  }
`;

const FeaturesTitle = styled.span`
  display: block;
  /* text-align: center; */
  font-weight: 500;
  text-transform: uppercase;
  /* flex-grow: 1; */
  /* line-height: 1.8; */
  font-size: 1.6rem;
  letter-spacing: 1px;
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  /* font-weight: 500; */
  letter-spacing: 1.5px;
  line-height: 1.75;
  color: var(--color-grey-dark--2);
  /* text-align: center; */
`;

function FeaturesSection() {
  return (
    <StyledFeaturesSection>
      <Container>
        <Grid margin='0 0 4.8rem 0' gap='5.6rem 0' columns='1fr 1fr'>
          <Row>
            <Row size='tiny'>
              <Heading as='h4' variation='accent'>
                Servicii
              </Heading>
              <Heading as='h2'>Ceea ce oferim</Heading>
            </Row>
            <Grid></Grid>
          </Row>
          <Row></Row>
        </Grid>
        <Grid columns='1fr 1fr'>
          <Row align='start' size='big'>
            <FeaturesContainer>
              <FeaturesBox>
                <Row type='horizontal' size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hoverColor='#140368' sizes='tiny'>
                      <RiCheckboxMultipleFill></RiCheckboxMultipleFill>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Adminstrare Completa</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Un pachet complet ce include{' '}
                  <strong style={{ fontSize: '1.4rem' }}>Contabilitatea</strong>
                  +
                  <strong style={{ fontSize: '1.4rem' }}>
                    Administrarea tehnica
                  </strong>
                  +<strong style={{ fontSize: '1.4rem' }}>Casierie</strong>.
                </FeatureDescription>
              </FeaturesBox>
              <FeaturesBox>
                <Row type='horizontal' size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hoverColor='#140368' sizes='tiny'>
                      <IoDocumentTextOutline></IoDocumentTextOutline>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Contabilitate</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Rezolvarea aspectelor financiare intr-un mod sigur si
                  transparent.
                </FeatureDescription>
              </FeaturesBox>
              <FeaturesBox>
                <Row type='horizontal' size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hoverColor='#140368' sizes='tiny'>
                      <GiReceiveMoney></GiReceiveMoney>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Casierie</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Colectarea si inregistrarea platilor corespunzatoare fiecarui
                  imobil.
                </FeatureDescription>
              </FeaturesBox>
              <FeaturesBox>
                <Row type='horizontal' size='medium'>
                  <IconBackground color='#C2D9FF' size='large'>
                    <Icon color={'#7752FE'} hoverColor='#140368' sizes='tiny'>
                      <VscTools></VscTools>
                    </Icon>
                  </IconBackground>
                  <FeaturesTitle>Adminstrare Tehnica</FeaturesTitle>
                </Row>
                <FeatureDescription>
                  Asigurarea intretinerii si functionarii optime a imobilelor.
                </FeatureDescription>
              </FeaturesBox>
            </FeaturesContainer>
            <Button variation='secondary' to='servicii'>
              Mai multe detalii
            </Button>
          </Row>
          <FeaturesPhoto src={featuresPhoto}></FeaturesPhoto>
        </Grid>
      </Container>
    </StyledFeaturesSection>
  );
}

export default FeaturesSection;
