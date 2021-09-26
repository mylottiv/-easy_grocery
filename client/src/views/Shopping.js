import { Section, Box, Columns, Heading} from 'react-bulma-components';
import ItemList from '../components/ItemList';

function Shopping() {

    return (
        <Section className='full-height-section'>
            <Columns vCentered breakpoint='mobile'>
            <Columns.Column>
                <Box>
                    <Heading>
                        Shopping List
                    </Heading>
                    <ItemList viewType='Shopping' />
                </Box>
            </Columns.Column>
        </Columns>
        </Section>
    )
}

export default Shopping;