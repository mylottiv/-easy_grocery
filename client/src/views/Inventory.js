import { Box, Columns, Heading} from 'react-bulma-components';
import ItemList from '../components/ItemList';

function Inventory() {

    return (
        <Columns className='full-height-columns' vCentered marginless breakpoint='mobile'>
            <Columns.Column>
                <Box>
                    <Heading>
                        Inventory
                    </Heading>
                    <ItemList viewType='Inventory' />
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default Inventory;