import styled from 'styled-components';
import Logo from './Logo.jsx';
import Container from './Container.jsx';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 1.8rem 5vw;
  background-color: var(--color-primary-light);
  /* border-bottom: 2px solid var(--color-grey--1); */
  justify-content: space-between;
  /* gap: 10rem; */
`;

const StyledNav = styled.nav`
  /* margin-left: auto; */
`;
const NavList = styled.ul`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  list-style: none;
`;
const NavItem = styled.li`
  /* border-bottom: 1px solid var(--color-grey--3); */
  position: relative;
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--color-primary-dark);
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
      transition: all 0.5s;
      background-image: linear-gradient(
        var(--color-accent1),
        var(--color-accent1-dark)
      );
    }
  }

  &:hover {
    transform: translateY(-2.5px);
    /* background-color: var(--color-accent1);
    color: var(--color-primary-light); */
    letter-spacing: 1px;
    &::before {
      width: 90%;
    }
  }
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <Logo></Logo>
      <StyledNav>
        <NavList>
          <NavItem>
            <StyledLink to='/'>Acasa</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='servicii'>Servicii</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='documente'>Documente utile</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink>Contact</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to=''>Avizier</StyledLink>
          </NavItem>
        </NavList>
      </StyledNav>
      <></>
    </StyledHeader>
  );
}

export default Header;
