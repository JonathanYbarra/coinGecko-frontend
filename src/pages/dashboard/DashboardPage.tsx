import { useGetCoinsMarketQuery } from "app/services/api";
import { Card } from "components/card";
import "./dashboard.scss";

export const DashboardPage = () => {
  const { data: coins } = useGetCoinsMarketQuery();

  return (
    <div className="dashboard-container">
      <section className="card-coins-prices">
        {coins?.map((coin) => (
          <Card key={coin.id}>
            <div>
              <img src={coin.image} alt={coin.name} />
              <span>{coin.name}</span>
              <span>to USD</span>
              <p>{coin.current_price}</p>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};
