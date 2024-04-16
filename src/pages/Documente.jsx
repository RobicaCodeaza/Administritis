import Heading from '@/ui/Heading.jsx'
import Row from '@/ui/Row.jsx'
import styled from 'styled-components'
const StyledDocumente = styled.div`
    padding: 14rem 0;
    border-top: 2px solid var(--color-primary-light--1);
    background-color: var(--color-white);
    min-height: 90dvh;
`

const StyledLine = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -20px;
    object-fit: cover;
`
function Documente() {
    return (
        <StyledDocumente>
            <Row $type="horizontal" $justifycontent="center">
                <Heading as="h3">
                    Documente Utile
                    <StyledLine src="/assets/underline_straight.png"></StyledLine>
                </Heading>
            </Row>
        </StyledDocumente>
    )
}

export default Documente
