import { Section, Box, Columns,  Media, Image, Content, Panel } from 'react-bulma-components';

function Profile() {
    return (
        <Section className='full-height-section'>
            <Columns vCentered breakpoint="mobile">
                <Columns.Column>
                    <Box>
                        <Section>
                            <Media>
                                <Media.Item align="left">
                                    <Image 
                                        src="http://bulma.io/images/placeholders/128x128.png"
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
                        </Section>
                        <Panel color='info'>
                            <Panel.Header>
                                Settings
                            </Panel.Header>
                            <Panel.Tabs>
                                <Panel.Tabs.Tab>
                                    Lorem
                                </Panel.Tabs.Tab>
                                <Panel.Tabs.Tab>
                                    ipsum
                                </Panel.Tabs.Tab>
                                <Panel.Tabs.Tab>
                                    dolor
                                </Panel.Tabs.Tab>
                                <Panel.Tabs.Tab>
                                    consectetur
                                </Panel.Tabs.Tab>
                            </Panel.Tabs>
                            <Panel.Block justifyContent='center'>
                                <Columns breakpoint="mobile">
                                    <Columns.Column>
                                        <Box >
                                            <span>Vivamus</span>
                                        </Box>
                                        <Box>
                                            <span>tritique</span>
                                        </Box>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Box>
                                            <span>sagittis</span>
                                        </Box>
                                        <Box>
                                            <span>posuere</span>
                                        </Box>
                                    </Columns.Column>
                                </Columns>
                            </Panel.Block>
                        </Panel>
                    </Box>
                </Columns.Column>
            </Columns>
        </Section>
    )
}

export default Profile;