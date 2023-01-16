import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';

export const exchangesColumns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Logo',
        width: 100,
        renderCell: ({ row }: Partial<GridRowParams>) => (
            <Avatar src={row.image} alt={row.id}/>
        )
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 250,
    },
    {
        field: 'trade_volume_24h_btc',
        headerName: 'Volume Traded Last 24 Hours',
        width: 350,
    }
];