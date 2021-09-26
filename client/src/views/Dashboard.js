import { Container, Heading, Box, Columns, Block, Media, Image, Content, Section } from 'react-bulma-components';

function Dashboard() {
    return (
        <Section className='full-height-section'>
            <Columns vCentered breakpoint="mobile">
                <Columns.Column>
                    <Box>
                        <Media>
                            <Media.Item align="left">
                                <Image 
                                    src="http://bulma.io/images/placeholders/128x128.png"
                                    size={64}
                                />
                            </Media.Item>
                            <Media.Item align="center">
                                <Content>
                                    <p>
                                        <strong>Profile</strong>
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        <br />
                                    </p>
                                </Content>
                            </Media.Item>
                        </Media>
                    </Box>
                    <Columns breakpoint="mobile">
                        <Columns.Column>
                            <Box>
                                <Section paddingless>
                                    <Container>
                                        <Heading size={4}>
                                            Inventory
                                        </Heading>
                                        <Heading size={6} subtitle>
                                            <strong>Current:</strong>
                                        </Heading>
                                        <Block>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </Block>
                                    </Container>
                                </Section>
                            </Box>
                        </Columns.Column>
                        <Columns.Column>
                            <Box>
                                <Section paddingless>
                                    <Container>
                                        <Heading size={4}>
                                            Shopping
                                        </Heading>
                                        <Heading size={6} subtitle>
                                            <strong>Current List:</strong>
                                        </Heading>
                                        <Block>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </Block>
                                    </Container>
                                </Section>
                            </Box>
                        </Columns.Column>
                    </Columns>
                    <Box>
                        <Section paddingless>
                            <Container>
                                <Heading size={4}>
                                    Defacto
                                </Heading>
                                <Heading size={6} subtitle>
                                    <strong>Ipso Facto</strong>
                                </Heading>
                                <Block>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </Block>
                            </Container>
                        </Section>
                    </Box>
                </Columns.Column>
            </Columns>
        </Section>
    )
}

export default Dashboard;