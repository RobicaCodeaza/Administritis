import styled from 'styled-components';
import logoImg from '/assets/logo.png';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 5rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logoImg}></Img>
    </StyledLogo>
  );
}

export default Logo;
