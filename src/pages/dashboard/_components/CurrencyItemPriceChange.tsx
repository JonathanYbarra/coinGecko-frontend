import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Typography } from '@mui/material';
import { formatCurrency } from 'helpers';
import { useIsPositive } from 'hooks';

type CurrencyItemPriceProps = {
    price_change_24h: number;
}
export const CurrencyItemPriceChange = ({ price_change_24h }: CurrencyItemPriceProps) => {
    const { isPositive, color } = useIsPositive(price_change_24h);

    return (
        <>
            {
                price_change_24h &&
                <Box>
                    {isPositive ? <TrendingUpIcon color="success" /> : <TrendingDownIcon color="error" />}
                    <Typography color={color}>{formatCurrency(price_change_24h)}</Typography>
                </Box>
            }
        </>
    )
}
