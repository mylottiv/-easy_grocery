import { Box, Columns, Heading} from 'react-bulma-components';
import ItemPanel from './Inventory/ItemPanel';

function Shopping() {

    return (
        <Columns className='full-height-columns' vCentered marginless breakpoint='mobile'>
            <Columns.Column>
                <Box>
                    <Heading>
                        Shopping List
                    </Heading>
                    <ItemPanel viewType='Shopping' />
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default Shopping;