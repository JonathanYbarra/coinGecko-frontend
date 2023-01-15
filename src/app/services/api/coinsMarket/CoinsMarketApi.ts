import { baseApi } from "../../baseApi";
import { vs_currency } from "./coins";
import { CoinDetail, CoinsMarket, Marketchart } from "./CoinsMarket.types";

export const coinsMarket = baseApi
  .enhanceEndpoints({ addTagTypes: ["CoinsMarket", "AllCoins"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCoinsMarketByIds: builder.query<CoinsMarket[], string>({
        query: (idCoin) =>
          `/coins/markets?${vs_currency}&ids=${idCoin}`,
        providesTags: (result) =>
          result
            ? [
              ...result.map(({ id }) => ({
                type: "CoinsMarket" as const,
                id,
              })),
              { type: "CoinsMarket", id: "LIST" },
            ]
            : [{ type: "CoinsMarket", id: "LIST" }],
      }),

      getCoinsMarket: builder.query<CoinsMarket[], void>({
        query: () =>
          `/coins/markets?${vs_currency}`,
        providesTags: (result) =>
          result
            ? [
              ...result.map(({ id }) => ({
                type: "AllCoins" as const,
                id,
              })),
              { type: "AllCoins", id: "LIST" },
            ]
            : [{ type: "AllCoins", id: "LIST" }],
      }),

      getCoinId: builder.query<CoinDetail, string>({
        query: (id) => `/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`,
      }),

      marketChart: builder.query<Marketchart, string>({
        query: (idCoin) => `/coins/${idCoin}/market_chart?vs_currency=usd&days=7`,
      }),
    }),
  });

export const { useGetCoinsMarketByIdsQuery, useGetCoinsMarketQuery, useMarketChartQuery, useGetCoinIdQuery } = coinsMarket;
