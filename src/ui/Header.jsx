import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from 'react-icons/ci'

import Logo from './Logo.jsx'
import useMediaQueryResize, { phone } from '../hooks/useMediaQuery.js'
import Icon from './Icon.jsx'

import FormTrigger from './FormTrigger.jsx'

const StyledHeader = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 1.8rem 5vw;
    background-color: var(--color-primary-light);
    /* border-bottom: 2px solid var(--color-grey--1); */
    justify-content: space-between;
    /* gap: 10rem; */
`

const StyledNav = styled.nav`
    /* margin-left: auto; */
`
const NavList = styled.ul`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    list-style: none;

    @media (max-width: 600px) {
        z-index: 3;
        position: absolute;
        left: -100%;
        top: 0;
        height: 100vh;

        width: 0%;
        padding: 3.2rem 6rem;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        transition: all 0.3s ease-in-out;
        background-color: var(--color-primary-light);
    }

    &.active {
        left: 0;
        width: 100%;
    }
`
const NavItem = styled.li`
    /* border-bottom: 1px solid var(--color-grey--3); */
    position: relative;
`

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
`

const StyledNoLink = styled.a`
    &,
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

    &:hover,
    &:active {
        transform: translateY(-2.5px);
        /* background-color: var(--color-accent1);
    color: var(--color-primary-light); */
        letter-spacing: 1px;
        &::before {
            width: 90%;
        }
    }
`

const ToggleMenu = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3rem;
    z-index: 4;
    right: 3rem;
    border: none;
    background-color: transparent;
`

function Header({ children }) {
    const mediaPhone = useMediaQueryResize(phone)
    const [menuActive, setMenuActive] = useState(false)

    function handleToggle() {
        setMenuActive((active) => !active)
    }

    return (
        <StyledHeader>
            <Logo></Logo>
            <StyledNav>
                {mediaPhone ? (
                    <>
                        <ToggleMenu onClick={handleToggle}>
                            <Icon color="#190482">
                                <CiMenuBurger>s</CiMenuBurger>
                            </Icon>
                        </ToggleMenu>
                        <NavList
                            style={
                                menuActive
                                    ? { display: 'flex' }
                                    : {
                                          visibility: 'hidden',
                                          opacity: '0',
                                          pointerEvents: 'none',
                                      }
                            }
                            className={menuActive ? 'active' : ''}
                        >
                            <NavItem>
                                <StyledLink to="/" onClick={handleToggle}>
                                    Acasa
                                </StyledLink>
                            </NavItem>
                            <NavItem>
                                <StyledLink
                                    to="servicii"
                                    onClick={handleToggle}
                                >
                                    Servicii
                                </StyledLink>
                            </NavItem>
                            <NavItem>
                                <StyledLink
                                    to="documente"
                                    onClick={handleToggle}
                                >
                                    Documente utile
                                </StyledLink>
                            </NavItem>
                            <NavItem>
                                <FormTrigger>
                                    <StyledNoLink onClick={handleToggle}>
                                        Contact
                                    </StyledNoLink>
                                </FormTrigger>
                            </NavItem>
                            <NavItem>
                                <StyledNoLink
                                    href="https://www.e-bloc.ro"
                                    target="_blank"
                                    onClick={handleToggle}
                                >
                                    Avizier
                                </StyledNoLink>
                            </NavItem>
                        </NavList>
                    </>
                ) : (
                    <NavList>
                        <NavItem>
                            <StyledLink to="/">Acasa</StyledLink>
                        </NavItem>
                        <NavItem>
                            <StyledLink to="servicii">Servicii</StyledLink>
                        </NavItem>
                        <NavItem>
                            <StyledLink to="documente">
                                Documente utile
                            </StyledLink>
                        </NavItem>
                        <NavItem>
                            <FormTrigger>
                                <StyledNoLink>Contact</StyledNoLink>
                            </FormTrigger>
                        </NavItem>
                        <NavItem>
                            <StyledNoLink
                                href="https://www.e-bloc.ro"
                                target="_blank"
                            >
                                Avizier
                            </StyledNoLink>
                        </NavItem>
                    </NavList>
                )}
            </StyledNav>
            <></>
        </StyledHeader>
    )
}

export default Header
