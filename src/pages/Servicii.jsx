import styled from 'styled-components'
import { useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import Heading from '@/ui/Heading.jsx'
import Row from '@/ui/Row.jsx'
import Icon from '@/ui/Icon.jsx'

const StyledServicii = styled.div`
    padding: 6rem 0;
    border-top: 2px solid var(--color-primary-light--1);
    background-color: var(--color-white);
    /* min-height: 90dvh; */
`
const Accordion = styled.div`
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
    /* align-content: center; */
    padding: 4rem 8rem;
`

const AccordionMenu = styled.ul`
    display: flex;
    list-style: none;
`
const AccordionItem = styled.li`
    padding: 1rem 2rem;
    background-color: var(--color-white);
    border: 1px solid var(--color-accent1);
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    font-size: 1.4rem;
    width: 25rem;
    text-align: center;

    &.active {
        color: var(--color-white);
        background-color: var(--color-accent1);
    }
`

const AccordionContentList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const AccordionContentItem = styled.li`
    display: flex;
    gap: 0.25rem;
    min-width: 35rem;
    width: max-content;
    padding: 0.5rem 1rem;
    /* background-color: red; */
`

const contentAccordion = {
    content1: [
        'bullet1',
        'bullet2',
        'bullet2',
        'bullet2',
        'bullet2',
        'bullet2',
        'bullet2',
        'bullet2',
        'bullet2',
    ],
    content2: 'Content2',
    content3: 'Content3',
    content4: 'Content4',
}

function Servicii() {
    const [currentContent, setCurrentContent] = useState(1)

    const content = contentAccordion[`content${currentContent}`]

    return (
        <StyledServicii>
            <Row $type="horizontal" $justifycontent="center">
                <Heading as="h3">Servicii</Heading>
            </Row>
            <Accordion>
                <AccordionMenu>
                    <AccordionItem
                        content="1"
                        className={currentContent === 1 ? 'active' : ''}
                        onClick={() => setCurrentContent(1)}
                    >
                        Administrare Completa
                    </AccordionItem>
                    <AccordionItem
                        content="2"
                        className={currentContent === 2 ? 'active' : ''}
                        onClick={() => setCurrentContent(2)}
                    >
                        Contabilitate
                    </AccordionItem>
                    <AccordionItem
                        content="3"
                        className={currentContent === 3 ? 'active' : ''}
                        onClick={() => setCurrentContent(3)}
                    >
                        Casierie
                    </AccordionItem>
                    <AccordionItem
                        content="4"
                        className={currentContent === 4 ? 'active' : ''}
                        onClick={() => setCurrentContent(4)}
                    >
                        Administrare tehnica
                    </AccordionItem>
                </AccordionMenu>
                <AccordionContentList>
                    {content.map((el) => (
                        <AccordionContentItem key={el}>
                            <Icon>
                                <CiCircleCheck></CiCircleCheck>
                            </Icon>
                            {el}
                        </AccordionContentItem>
                    ))}
                </AccordionContentList>
            </Accordion>
        </StyledServicii>
    )
}

export default Servicii
