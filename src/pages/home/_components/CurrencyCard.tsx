import { CoinsMarket } from "app/services/api";
import { Card } from "components/card";
import { formatCurrency } from "helpers";
import { CurrencyItemPriceChange } from "./CurrencyItemPriceChange";
import { COIN_ROUTE } from "router";
import { useNavigate } from 'react-router-dom';
import { Box, Button } from "@mui/material";

type CurrencyCardProps = {
  coin: CoinsMarket;
};

export const CurrencyCard = ({ coin }: CurrencyCardProps) => {
  const navigate = useNavigate();

  return (
    <Card data-cy="card">
      <Box width="100%">
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
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" variant="text" color="secondary" onClick={() => navigate(`${COIN_ROUTE}/${coin.id}`)}>See more</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CurrencyCard;
