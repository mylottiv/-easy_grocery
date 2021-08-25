import { Box, Columns, Heading} from 'react-bulma-components';
import ItemPanel from './ItemPanel';

function Inventory() {

    return (
        <Columns className='full-height-columns' vCentered marginless breakpoint='mobile'>
            <Columns.Column>
                <Box>
                    <Heading>
                        Inventory
                    </Heading>
                    <ItemPanel />
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default Inventory;