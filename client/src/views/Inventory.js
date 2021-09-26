import { Section, Box, Columns, Heading} from 'react-bulma-components';
import ItemList from '../components/ItemList';

function Inventory() {

    return (
        <Section className='full-height-section'>
            <Columns vCentered breakpoint='mobile'>
                <Columns.Column>
                    <Box>
                        <Heading>
                            Inventory
                        </Heading>
                        <ItemList viewType='Inventory' />
                    </Box>
                </Columns.Column>
            </Columns>
        </Section>
    )
}

export default Inventory;