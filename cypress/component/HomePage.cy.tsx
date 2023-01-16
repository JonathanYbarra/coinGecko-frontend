import CurrencyItemPriceChange from "../../src/pages/home/_components/CurrencyItemPriceChange";
import CurrencyCard from "../../src/pages/home/_components/CurrencyCard";
import { BrowserRouter as Router } from 'react-router-dom';
import { COIN_ROUTE } from 'router';

describe('HomePage.cy.ts', () => {
  describe('CurrencyCard', () => {
    const coin = {
      ath: 69045,
      ath_change_percentage: -69.69848,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_change_percentage: 30753.74307,
      atl_date: "2013-07-06T00:00:00.000Z",
      circulating_supply: 19263275,
      current_price: 20947,
      fully_diluted_valuation: 440077285627,
      high_24h: 21094,
      id: "bitcoin",
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      last_updated: "2023-01-15T21:17:26.243Z",
      low_24h: 20586,
      market_cap: 403682370204,
      market_cap_change_24h: 2180938235,
      market_cap_change_percentage_24h: 0.5432,
      market_cap_rank: 1,
      max_supply: 21000000,
      name: "Bitcoin",
      price_change_24h: 25.77,
      price_change_percentage_24h: 0.12318,
      roi: null,
      symbol: "btc",
      total_supply: 21000000,
      total_volume: 23374444915,
    };



    it("renders the coin name, transaction, price and price change", () => {
      cy.mount(
        <Router>
          <CurrencyCard coin={coin} />
        </Router>
      );

      cy.get('.transaction span').first().should('have.text', 'Bitcoin');

      cy.get('.price')
        .should('have.text', '$20,947');
    });

    it("navigates to the coin's detail page when clicked", () => {
      cy.mount(
        <Router>
          <CurrencyCard coin={coin} />
        </Router>
      );
      cy.get("[type='button']").click();
      cy.location("pathname").should("eq", `${COIN_ROUTE}/bitcoin`);
    });
  });


  describe('CurrencyItemPriceChange', () => {
    const mock_price_24h = 10;

    it('should render the component', () => {
      cy.mount(<CurrencyItemPriceChange price_change_24h={mock_price_24h} />);
      cy.get('#price-change-container').should('exist');
    });

    it('should show the correct up icon based on the price change', () => {
      cy.mount(<CurrencyItemPriceChange price_change_24h={mock_price_24h} />);
      cy.get('#price-change-icon').should('have.class', 'MuiSvgIcon-colorSuccess');
    });

    it('should show the correct down icon based on the price change', () => {
      cy.mount(<CurrencyItemPriceChange price_change_24h={-mock_price_24h} />);
      cy.get('#price-change-icon').should('have.class', 'MuiSvgIcon-colorError');
    });

    it('should show the price in the correct format', () => {
      cy.mount(<CurrencyItemPriceChange price_change_24h={mock_price_24h} />);
      cy.get('#price-change-value').should('have.text', '$10');
    });
  });
});