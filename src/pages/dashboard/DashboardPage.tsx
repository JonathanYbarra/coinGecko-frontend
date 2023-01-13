import { useGetCoinsMarketByIdQuery } from "app/services/api";

import { LoadingContainer } from "components/loadingContainer";
import { TopExchanges } from "./_components/TopExchanges";
import { CurrencyCard } from "./_components";
import "./dashboard.scss";

export const DashboardPage = () => {
  const { data: coins, isLoading } = useGetCoinsMarketByIdQuery(undefined, {
    // pollingInterval: 4000
  });

  return (
    <LoadingContainer isLoading={isLoading}>
      <div className="dashboard-container">
        <section className="card-coins-prices">
          {coins?.map((coin) => (
            <CurrencyCard coin={coin} />
          ))}
        </section>

        <TopExchanges />
      </div>
    </LoadingContainer>
  );
};
