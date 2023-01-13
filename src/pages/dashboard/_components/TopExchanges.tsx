import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useGetExchangesQuery } from 'app/services/api/exchanges';
import { exchangesColumns } from './topExchangesColumns';

export const TopExchanges = () => {
    const { data: exchanges, isLoading } = useGetExchangesQuery();
    
    return (
        <Box my={5}>
            <h2>Main exchanges</h2>

            {exchanges &&
                <DataGrid
                    rows={exchanges}
                    columns={exchangesColumns}
                    pageSize={10}
                    loading={isLoading}
                    disableSelectionOnClick
                    autoHeight
                />
            }
        </Box>
    )
}
