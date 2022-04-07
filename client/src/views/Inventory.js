import { Section, Box, Columns, Heading} from 'react-bulma-components';
import {useSelector} from 'react-redux';
import {itemsSelectors} from '../redux/itemsSlice';
import {sectionsSelectors} from '../redux/sectionsSlice';
import ItemList from '../components/ItemList';

function Inventory() {

    const inventoryList = useSelector(itemsSelectors.selectAll);
    const sections = useSelector(sectionsSelectors.selectAll);

    return (
        <Section className='full-height-section'>
            <Columns vCentered breakpoint='mobile'>
                <Columns.Column>
                    <Box>
                        <Heading>
                            Inventory
                        </Heading>
                        <ItemList items={inventoryList} sections={sections} type='Inventory'  />
                    </Box>
                </Columns.Column>
            </Columns>
        </Section>
    )
}

export default Inventory;