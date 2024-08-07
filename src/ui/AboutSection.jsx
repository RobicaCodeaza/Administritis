import styled from 'styled-components'
import Container from './Container.jsx'
import Heading from './Heading.jsx'
import Row from './Row.jsx'
import Grid from './Grid.jsx'
import aboutPhoto from '/assets/aboutUs.webp'

import { GrOptimize, GrSecure } from 'react-icons/gr'
import { TiCloudStorageOutline } from 'react-icons/ti'
import Icon from './Icon.jsx'
import IconBackground from './IconBackground.jsx'
import { useEffect, useRef } from 'react'

const StyledAboutSection = styled.section`
    padding: 14rem 0;
    transition: all 0.3s ease-in;
`
const AboutDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.8;
    align-self: end;
    color: var(--color-grey-dark);
`

const AboutPhoto = styled.img`
    height: 50rem;
    justify-self: center;
    /* width: auto; */
    width: 35rem;
    object-fit: cover;
    border-radius: 0.5rem;

    @media (max-width: 1000px) {
    }
    @media (max-width: 850px) {
        /* height: 50rem;
    width: 35rem; */
        height: 40rem;
        width: 25rem;
    }
`

const AboutUsList = styled.ul`
    align-self: center;
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    list-style: none;
`

const AboutUsBullet = styled.li`
    display: flex;
    flex-direction: column;
`

const StyledLine = styled.img`
    position: absolute;
    height: 4rem;
    width: auto;
    left: 0%;
    bottom: -40px;
    object-fit: cover;
`

function AboutSection() {
    const section = useRef(null)

    useEffect(function () {
        function revealSection(entries, observer) {
            const [entry] = entries
            if (!entry.isIntersecting) return

            section.current.classList.remove('section--hidden')

            observer.unobserve(section.current)
        }

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.2,
        })

        sectionObserver.observe(section.current)
    }, [])

    return (
        <StyledAboutSection ref={section} className="section--hidden">
            <Container>
                <Grid columns="1fr 1fr" margin="0 0 4.8rem 0" gap="0 4.4rem">
                    <Row $size="tiny">
                        <Heading as="h4" variation="accent">
                            Scopul | Promptitudine in Servicii
                        </Heading>
                        <Heading as="h2">
                            De ce sa ne alegi pe noi?
                            <StyledLine
                                alt="Linie curbata pentru accent"
                                src="/assets/underline_curved.webp"
                            ></StyledLine>
                        </Heading>
                    </Row>
                    <AboutDescription>
                        Serviciile noastre de administrare imobile se desfasoara
                        in Sectoarele 3,4 si 5 si se concentreaza pe eficienta
                        costurilor, promptitudinea si siguranta serviciilor.
                    </AboutDescription>
                </Grid>
                <Grid columns="1fr 1fr" gap="0 4.4rem">
                    <AboutPhoto
                        src={aboutPhoto}
                        alt="Doua persoane care incheie o negociere"
                    ></AboutPhoto>
                    <AboutUsList>
                        <AboutUsBullet>
                            {/* <Icon></Icon> */}
                            <IconBackground color="#C2D9FF" size="large">
                                <Icon
                                    color={'#7752FE'}
                                    hovercolor="#140368"
                                    sizes="tiny"
                                >
                                    <GrOptimize></GrOptimize>
                                </Icon>
                            </IconBackground>
                            <Heading as="h4" margin="1.2rem 0 0.8rem 0">
                                Prioritate
                            </Heading>
                            <AboutDescription>
                                Prioritatea noastră este securitatea ta, alături
                                de optimizarea cheltuielilor și reacția promptă
                                la nevoile tale.
                            </AboutDescription>
                        </AboutUsBullet>
                        <AboutUsBullet>
                            <IconBackground color="#C2D9FF" size="large">
                                <Icon
                                    color={'#7752FE'}
                                    hovercolor="#140368"
                                    sizes="tiny"
                                >
                                    <GrSecure></GrSecure>
                                </Icon>
                            </IconBackground>
                            <Heading as="h4" margin="1.2rem 0 0.8rem 0">
                                Protectie
                            </Heading>
                            <AboutDescription>
                                Garantăm o protecție adecvată a datelor, fie că
                                este vorba despre stocarea pe hârtie sau în
                                format electronic pe servere securizate.
                            </AboutDescription>
                        </AboutUsBullet>
                        <AboutUsBullet>
                            <IconBackground color="#C2D9FF" size="large">
                                <Icon
                                    color={'#7752FE'}
                                    hovercolor="#140368"
                                    sizes="tiny"
                                >
                                    <TiCloudStorageOutline></TiCloudStorageOutline>
                                </Icon>
                            </IconBackground>
                            <Heading as="h4" margin="1.2rem 0 0.8rem 0">
                                Acces Facil
                            </Heading>
                            <AboutDescription>
                                Oferim acces facil și securizat pentru fiecare
                                proprietar prin intermediul sistemelor online,
                                facilitând introducerea indexurilor la apă și
                                accesul la informațiile relevante ale asociației
                                într-un singur clic.
                            </AboutDescription>
                        </AboutUsBullet>
                    </AboutUsList>
                </Grid>
            </Container>
        </StyledAboutSection>
    )
}

export default AboutSection
