import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 3.2rem;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
