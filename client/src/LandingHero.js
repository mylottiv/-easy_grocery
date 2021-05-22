import { Hero, Container, Heading, Box, Columns, Block, Button } from 'react-bulma-components';

function LandingHero() {
    return (
        <Columns className='full-height-columns' vCentered marginless>
            <Columns.Column>
                <Box>
                    <Hero size='halfheight'>
                        <Hero.Header display='flex' justifyContent='center'>
                            Lorem ipsum
                        </Hero.Header>
                        <Hero.Body>
                            <Container>
                                <Heading textAlign='center'>
                                    Lorem ipsum dolor sit amet
                                </Heading>
                                <Block textAlign='center'>
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Block>
                                <Block display='flex' justifyContent='center'>
                                    <Button color='success'>
                                        Call To Action
                                    </Button>
                                </Block>
                            </Container>
                        </Hero.Body>
                        <Hero.Footer display='flex' justifyContent='flex-end'>
                            Massa eget egestas
                        </Hero.Footer>
                    </Hero>
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default LandingHero;