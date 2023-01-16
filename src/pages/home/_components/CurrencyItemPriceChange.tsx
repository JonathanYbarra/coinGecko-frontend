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
                <Box id="price-change-container">
                    {isPositive ? <TrendingUpIcon color="success" id="price-change-icon" /> : <TrendingDownIcon color="error" id="price-change-icon" />}
                    <Typography color={color} id="price-change-value">{formatCurrency(price_change_24h)}</Typography>
                </Box>
            }
        </>
    )
}

export default CurrencyItemPriceChange;
