import styled from 'styled-components';
import logoImg from '/assets/logo.png';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 5rem;
  width: auto;
  @media (max-width: 850px) {
    height: 4rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logoImg}></Img>
    </StyledLogo>
  );
}

export default Logo;
