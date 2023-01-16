import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CoinsMarket } from 'app/services/api';
import { formatCurrency } from 'helpers';
import { COIN_ROUTE } from 'router';

type CoinItemProps = {
    coin: CoinsMarket;
}

export const CoinItem = ({ coin }: CoinItemProps) => {
    const navigate = useNavigate();
    const secondary = (
        <Grid container justifyContent="space-between" flexWrap="wrap">
            <Grid item>
                <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                    mr={1}
                >
                    {coin.symbol}
                </Typography>
                {formatCurrency(coin.current_price)}
            </Grid>

            <Grid item>
                <Typography
                    component="p"
                    variant="caption"
                    color="text.gray"
                    mt={2}
                >
                    Mkt Capitalization
                </Typography>
                <Typography
                    component="p"
                    variant="body2"
                    color="text.primary"
                >
                    {formatCurrency(coin.market_cap)}
                </Typography>

                <Grid sx={{ marginTop: 1 }}>
                    <Button
                        size="small"
                        variant="text"
                        color="secondary"
                        onClick={() => navigate(`${COIN_ROUTE}/${coin.id}`)}

                    >
                        See more
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={coin.name} src={coin.image} />
            </ListItemAvatar>
            <ListItemText
                primary={coin.name}
                secondary={secondary}
            />
        </ListItem>
    )
}
