import { Box, Columns, Heading} from 'react-bulma-components';
import ItemList from '../components/ItemList';

function Shopping() {

    return (
        <Columns className='full-height-columns mt-4' vCentered marginless breakpoint='mobile'>
            <Columns.Column>
                <Box>
                    <Heading>
                        Shopping List
                    </Heading>
                    <ItemList viewType='Shopping' />
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default Shopping;