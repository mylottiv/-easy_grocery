import { Hero, Container, Heading, Box, Columns } from 'react-bulma-components';

function LandingHero() {
    return (
        <Columns className='full-height-columns' vCentered marginless>
            <Columns.Column>
                <Box>
                    <Hero size='halfheight'>
                        <Hero.Header>
                            Lorem ipsum
                        </Hero.Header>
                        <Hero.Body>
                            <Container>
                                <Heading>
                                    Lorem ipsum dolor sit amet
                                </Heading>
                                <Heading
                                size={3}
                                >
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Heading>
                            </Container>
                        </Hero.Body>
                        <Hero.Footer>
                            Massa eget egestas
                        </Hero.Footer>
                    </Hero>
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default LandingHero;