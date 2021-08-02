import { Hero, Container, Heading, Box, Columns, Block, Button } from 'react-bulma-components';

function Dashboard() {
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
                                    Profile
                                    </Button>
                                </Block>
                            </Container>
                        </Hero.Body>
                        <Hero.Footer display='flex' justifyContent='flex-end'>
                            Massa eget egestas
                        </Hero.Footer>
                    </Hero>
                </Box>
            <Columns>
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
                                            Inventory
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
                                            Shopping
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
                                        Defacto
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

export default Dashboard;