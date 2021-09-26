import { Hero, Section, Container, Heading, Box, Columns, Block, Button } from 'react-bulma-components';
import {Link} from 'react-router-dom'

function Login() {
    return (
        <Section className='full-height-section'>
            <Columns vCentered>
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
                                        <Button renderAs={Link} to='/dashboard' color='success'>
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
        </Section>
    )
}

export default Login;