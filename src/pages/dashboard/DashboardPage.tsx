import { useGetCoinsMarketByIdsQuery } from "app/services/api";

import { LoadingContainer } from "components/loadingContainer";
import { TopExchanges } from "./_components/TopExchanges";
import { CurrencyCard } from "./_components";
import "./dashboard.scss";
import { mainCryptoCoins } from "app/services/api/coinsMarket";

export const DashboardPage = () => {
  const { data: coins, isLoading } = useGetCoinsMarketByIdsQuery(mainCryptoCoins, {
    pollingInterval: 4000
  });

  return (
    <LoadingContainer isLoading={isLoading}>
      <div className="dashboard-container">
        <section className="card-coins-prices">
          {coins?.map((coin) => (
            <CurrencyCard coin={coin} key={coin.id} />
          ))}
        </section>

        <TopExchanges />
      </div>
    </LoadingContainer>
  );
};
