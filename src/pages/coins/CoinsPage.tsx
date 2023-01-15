import { List, Grid } from '@mui/material';

import { LoadingContainer } from 'components/loadingContainer';
import { useGetCoinsMarketQuery } from 'app/services/api';
import { CoinItem } from './_components/CoinItem';

export const CoinsPage = () => {
  const { data: coins, isLoading } = useGetCoinsMarketQuery();

  return (
    <LoadingContainer isLoading={isLoading}>
      <Grid container justifyContent="center" px={3}>
        <Grid item sm={12} md={10} lg={6} sx={{ width: "100%" }}>
          <List sx={{ bgcolor: 'background.paper', borderRadius: 5 }}>
            {coins && coins.map(coin =>
              <CoinItem coin={coin} key={coin.id} />
            )}
          </List>
        </Grid>
      </Grid>
    </LoadingContainer>
  )
}