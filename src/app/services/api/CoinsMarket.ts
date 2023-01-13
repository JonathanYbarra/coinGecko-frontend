import { baseApi } from "../baseApi";
import { CoinsMarket } from "./CoinsMarket.types";

export const coinsMarket = baseApi
  .enhanceEndpoints({ addTagTypes: ["CoinsMarket"] })
  .injectEndpoints({

    endpoints: (builder) => ({
      getCoinsMarketById: builder.query<CoinsMarket[], void>({
        query: () =>
          "/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cripple",
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
          "/coins/markets?vs_currency=usd&per_page=10&page",
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
    }),
  });

export const { useGetCoinsMarketByIdQuery, useGetCoinsMarketQuery } = coinsMarket;
