import { useCallback } from 'react';
import { useGetCoinIdQuery, useMarketChartQuery } from "app/services/api"
import { LineChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

import moment from "moment";
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { LoadingContainer } from 'components/loadingContainer';
import Container from '@mui/material/Container';

export const CoinDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading: loadingChart } = useMarketChartQuery(id!);
  const { data: coinData, isLoading } = useGetCoinIdQuery(id!);

  const buildObjectData = useCallback(() => {
    if (data) {
      const { prices } = data;
      const coinData = prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) }));

      const coinDate = coinData.map(value => {
        return {
          name: moment(value.x).format('MMM DD'),
          price: value.y
        }
      });

      return coinDate;
    }
  }, [data])

  return (
    <LoadingContainer isLoading={isLoading || loadingChart}>
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid container alignItems="center" mb={5} gap={2}>
            <img src={coinData?.image.large} alt={coinData?.id} width={120} />
            <Grid>
              <Grid display="flex" gap={1}>
                <Typography component="h1" variant='h2'>{coinData?.name}</Typography>
                <Typography component="p" variant='h5' color="GrayText">{coinData?.symbol}</Typography>
              </Grid>

              <Grid sm={8}>
                {coinData?.categories.map(category =>
                  <Typography variant='body1' color="GrayText" component="span" mr={1}>#{category}</Typography>
                )}
              </Grid>
            </Grid>
          </Grid>


          <Grid sx={{ width: "100%", height: "40vh" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={buildObjectData()}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#00DEA3" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>

          {coinData && <Typography variant='caption' dangerouslySetInnerHTML={{ __html: coinData.description.en }} />}
        </Grid>
      </Container>
    </LoadingContainer>
  )
}
