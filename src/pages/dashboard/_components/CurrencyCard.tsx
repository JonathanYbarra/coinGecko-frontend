import { CoinsMarket } from "app/services/api";
import { Card } from "components/card";
import { calculatePercentage, formatCurrency } from "helpers";

type CurrencyCardProps = {
  coin: CoinsMarket;
};

export const CurrencyCard = ({ coin }: CurrencyCardProps) => {
  const increase = calculatePercentage(coin.current_price, coin.high_24h);

  return (
    <Card key={coin.id}>
      <div className="content">
        <img src={coin.image} alt={coin.name} />

        <div className="info">
          <div className="transaction">
            <span>{coin.name}</span>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <span>USD</span>
          </div>
          <span className="price">{formatCurrency(coin.current_price)}</span>

          <div className="trend">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <span>%{increase}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
