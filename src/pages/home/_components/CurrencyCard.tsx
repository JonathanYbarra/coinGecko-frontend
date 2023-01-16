import { CoinsMarket } from "app/services/api";
import { Card } from "components/card";
import { formatCurrency } from "helpers";
import { CurrencyItemPriceChange } from "./CurrencyItemPriceChange";
import { COIN_ROUTE } from "router";
import { useNavigate } from 'react-router-dom';

type CurrencyCardProps = {
  coin: CoinsMarket;
};

export const CurrencyCard = ({ coin }: CurrencyCardProps) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`${COIN_ROUTE}/${coin.id}`)} data-cy="card">
      <div className="content">
        <img src={coin.image} alt={coin.name} />

        <div className="info">
          <div className="transaction">
            <span>{coin.name}</span>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <span>USD</span>
          </div>
          <span className="price">{formatCurrency(coin.current_price)}</span>

          <CurrencyItemPriceChange price_change_24h={coin.price_change_24h} />
        </div>
      </div>
    </Card>
  );
};

export default CurrencyCard;
