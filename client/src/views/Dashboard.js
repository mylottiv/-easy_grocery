import { Link } from "react-router-dom";
import { Container, Heading, Box, Columns, Section, Icon, Content, Table } from 'react-bulma-components';
import { faClipboardList, faBoxes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dashboard() {
    return (
        <Section className='full-height-section'>
            <Box>
                <Section paddingless>
                    <Container>
                        <Heading display='flex' justifyContent='center' size={3}>
                            <span>Welcome User!</span>
                        </Heading>
                    </Container>
                </Section>
            </Box>
            <Box>
                <Section paddingless>
                    <Container>
                        <Heading display='flex' justifyContent='center' size={4}>
                            Profile
                        </Heading>
                        <Content>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Lorem ipsum</td> 
                                        <td>dolor sit</td>
                                    </tr>
                                    <tr>
                                        <td>consectetur</td>
                                        <td>adipiscing</td>
                                    </tr>
                                    <tr>
                                        <td>Phasellus</td>
                                        <td>eu eros</td>
                                    </tr>
                                    <tr>
                                        <td>Mauris semper</td>
                                        <td>turpis odio</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Content>
                    </Container>
                </Section>
            </Box>
            <Columns vCentered breakpoint="mobile">
                <Columns.Column>
                    <Box backgroundColor='link' renderAs={Link} to='/inventory'>
                        <Section paddingless>
                            <Container>
                                <Heading py={2} display='flex' justifyContent='center'size={4}>
                                    <span>Inventory</span>
                                </Heading>
                            </Container>
                            <Container display='flex' justifyContent='center'>
                                <Icon><FontAwesomeIcon icon={faBoxes} size='2x'/></Icon>
                            </Container>
                        </Section>
                    </Box>
                </Columns.Column>
                <Columns.Column>
                    <Box backgroundColor='link' renderAs={Link} to='/shopping'>
                        <Section paddingless>
                            <Container>
                                <Heading py={2} display='flex' justifyContent='center' size={4}>
                                    <span>Shopping</span>
                                </Heading>
                            </Container>
                            <Container display='flex' justifyContent='center'>
                                <Icon><FontAwesomeIcon icon={faClipboardList} size='2x'/></Icon>
                            </Container>
                        </Section>
                    </Box>
                </Columns.Column>
            </Columns>
        </Section>
    )
}

export default Dashboard;