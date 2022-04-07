import { Section, Box, Columns, Heading} from 'react-bulma-components';
import {useSelector} from 'react-redux';
import {itemsSelectors} from '../redux/itemsSlice';
import {sectionsSelectors} from '../redux/sectionsSlice';
import ItemList from '../components/ItemList';

function Shopping() {

    const filterFunc = (state) => Object.fromEntries(Object.entries(state).filter(([, value]) => value.onShoppingList));
    const shoppingList = filterFunc(useSelector(itemsSelectors.selectAll));
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