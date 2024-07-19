import styled from 'styled-components'
import logoImg from '/assets/logo.webp'

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
`

const Img = styled.img`
    height: 5rem;
    width: auto;
    @media (max-width: 850px) {
        height: 4rem;
    }
`

function Logo() {
    return (
        <StyledLogo>
            <Img src={logoImg} alt="Logo Administritis"></Img>
        </StyledLogo>
    )
}

export default Logo
