import { Section, Box, Columns, Heading} from 'react-bulma-components';
import {useSelector} from 'react-redux';
import {itemsSelectors} from '../redux/itemsSlice';
import {sectionsSelectors} from '../redux/sectionsSlice';
import onShoppingFilter from '../helpers/onShoppingFilter';
import ItemList from '../components/ItemList';

function Shopping() {

    const shoppingList = onShoppingFilter(useSelector(itemsSelectors.selectAll));
    const sections = useSelector(sectionsSelectors.selectAll);

    return (
        <Section className='full-height-section'>
            <Columns vCentered breakpoint='mobile'>
            <Columns.Column>
                <Box>
                    <Heading>
                        Shopping List
                    </Heading>
                    <ItemList items={shoppingList} sections={sections} type='Shopping' />
                </Box>
            </Columns.Column>
        </Columns>
        </Section>
    )
}

export default Shopping;