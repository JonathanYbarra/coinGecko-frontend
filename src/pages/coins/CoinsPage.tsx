import { List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { Avatar, Typography, Box, Grid } from '@mui/material';

import { LoadingContainer } from 'components/loadingContainer';
import { useGetCoinsMarketQuery } from 'app/services/api';
import { formatCurrency } from 'helpers';

export const CoinsPage = () => {
  const { data: coins, isLoading } = useGetCoinsMarketQuery();

  return (
    <LoadingContainer isLoading={isLoading}>
      <Box p={3} sx={{ width: '100%' }}>
        <List sx={{ bgcolor: 'background.paper', borderRadius: 5 }}>
          {
            coins && coins.map(coin => (
              <ListItem alignItems="flex-start" key={coin.id}>
                <ListItemAvatar>
                  <Avatar alt={coin.name} src={coin.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={coin.name}
                  secondary={
                    <Grid container justifyContent="space-between" flexWrap="wrap">
                      <Grid item>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          mr={1}
                        >
                          {coin.name}
                        </Typography>
                        {formatCurrency(coin.current_price)}
                      </Grid>

                      <Grid item>
                        Mkt Capitalization
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          ml={2}
                        >
                          {formatCurrency(coin.market_cap)}
                        </Typography>
                      </Grid>

                    </Grid>
                  }

                />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </LoadingContainer>
  )
}