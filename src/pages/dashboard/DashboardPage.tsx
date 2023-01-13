import { useGetCoinsMarketByIdQuery } from "app/services/api";
import { CurrencyCard } from "./_components";
import "./dashboard.scss";
import { LoadingContainer } from "components/loadingContainer";

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
      </div>
    </LoadingContainer>
  );
};
