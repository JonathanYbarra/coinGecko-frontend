import { useGetCoinsMarketByIdsQuery } from "app/services/api";
import { mainCryptoCoins } from "app/services/api/coinsMarket";

import { LoadingContainer } from "components/loadingContainer";
import { CurrencyCard, TopExchanges } from "./_components";
import "./home.scss";
import { Typography, Alert } from '@mui/material';

export const HomePage: React.FunctionComponent = () => {
  const { data: coins, isLoading, isError } = useGetCoinsMarketByIdsQuery(mainCryptoCoins, {
    // pollingInterval: 4000
  });

  return (
    <LoadingContainer isLoading={isLoading}>
      <div className="home-container">
        {isError && <Alert severity="error">This is an error alert — check it out!</Alert>}
        <section className="card-coins-prices">
          {!coins && (
            <Typography textAlign="center">No coins.</Typography>
          )}
          {coins?.map((coin) => (
            <CurrencyCard coin={coin} key={coin.id} />
          ))}
        </section>

        <TopExchanges />
      </div>
    </LoadingContainer>
  );
};

export default HomePage;