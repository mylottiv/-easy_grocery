import { Hero, Container, Heading, Box, Columns, Block, Button } from 'react-bulma-components';

function Login() {
    return (
        <Columns className='full-height-columns mt-4' vCentered marginless>
            <Columns.Column>
                <Box>
                    {/* <Hero size='halfheight'> */}
                    <Hero>
                        <Hero.Body>
                            <Container>
                                <Heading textAlign='center'>
                                    Login
                                </Heading>
                                <Block textAlign='center'>
                                    Lorem ipsum dolor sit amet                                
                                </Block>
                                <Block display='flex' justifyContent='center'>
                                    <Button color='success'>
                                        Login Button
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

export default Login;