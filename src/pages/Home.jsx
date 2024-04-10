// import Header from '../ui/Header';
import styled from 'styled-components';
import HeroSectionHome from '../ui/HeroSectionHome.jsx';
import AboutSection from '../ui/AboutSection.jsx';
import FeaturesSection from '../ui/FeaturesSection.jsx';

const StyledHome = styled.div`
  background-color: var(--color-primary-light);
  /* height: 100dvh; */
`;

function Home() {
  return (
    <StyledHome>
      <HeroSectionHome></HeroSectionHome>
      <AboutSection></AboutSection>
      <FeaturesSection></FeaturesSection>
    </StyledHome>
  );
}

export default Home;
