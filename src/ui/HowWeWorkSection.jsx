import styled from 'styled-components';
import Container from './Container.jsx';
import Grid from './Grid.jsx';
import Heading from './Heading.jsx';
import Row from './Row.jsx';

const StyledHowWeWorkSection = styled.div`
  padding: 12rem 0rem;
  /* background-color: var(--color-white); */
`;

const StepList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StepItem = styled.div`
  display: flex;
  gap: 2.4rem;
  /* justify-content: center; */
  /* width: 100; */
  /* flex-direction: column; */
`;
const SpacedStepItem = styled(StepItem)`
  margin-left: 22.4rem;
`;

const ItemPhoto = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;
const ItemStep = styled.div`
  color: var(--color-secondary--1);
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const ItemTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  /* line-height: 1.2; */
`;
const ItemDescription = styled.p`
  color: var(--color-grey-dark--1);
  font-size: 1.7rem;
`;

function HowWeWorkSection() {
  return (
    <StyledHowWeWorkSection>
      <Container>
        <Grid margin='0 0 4.8rem 0' columns='1fr 1fr'>
          <Row size='tiny'>
            <Heading as='h4' variation='accent'>
              Abordare
            </Heading>
            <Heading as='h2'>Cum vom comunica</Heading>
          </Row>
        </Grid>
        <StepList>
          <StepItem>
            <ItemPhoto></ItemPhoto>
            <Row size='small' justifyContent='center'>
              <ItemStep>Pasul 1</ItemStep>
              <ItemTitle>Întâlnirea inițială</ItemTitle>
              <ItemDescription>
                Stabilirea obiectivelor prin evaluarea situatiei curente si
                determinarea serviciilor necesare.
              </ItemDescription>
            </Row>
          </StepItem>
          <SpacedStepItem>
            <ItemPhoto></ItemPhoto>
            <Row size='small' justifyContent='center'>
              <ItemStep>Pasul 2</ItemStep>
              <ItemTitle>Elaborarea planului</ItemTitle>
              <ItemDescription>
                Identificarea prioritatilor, crearea unui plan de servicii si
                estimarea costurilor.
              </ItemDescription>
            </Row>
          </SpacedStepItem>
          <StepItem>
            <ItemPhoto></ItemPhoto>
            <Row size='small' justifyContent='center'>
              <ItemStep>Pasul 3</ItemStep>
              <ItemTitle>Implementarea planului</ItemTitle>
              <ItemDescription>
                Semnarea contractului si initierea serviciilor, continuand cu
                permanenta comunicare si raportare.
              </ItemDescription>
            </Row>
          </StepItem>
          <SpacedStepItem>
            <ItemPhoto></ItemPhoto>
            <Row size='small' justifyContent='center'>
              <ItemStep>Pasul 4</ItemStep>
              <ItemTitle>Monitorizare</ItemTitle>
              <ItemDescription>
                Inspectia periodica a situatiei si reactionarea la feedbackul
                venit din partea proprietarilor.
              </ItemDescription>
            </Row>
          </SpacedStepItem>
        </StepList>
      </Container>
    </StyledHowWeWorkSection>
  );
}

export default HowWeWorkSection;
