import coinGeckoApi from "../../api/coinGeckoApi";
import useCryptoData from "../../hooks/useCryptoData";
import Loading from "../shared/Loading";
import CoinRow from "./CoinRow";
function MarketTable() {
  const {
    data: coins,
    loading,
    error,
  } = useCryptoData(
    "/coins/markets",
    {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 20,
      page: 1,
    },
    (response) => response.data,
  );

  if (error) {
    return (
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">Markets</h2>
        <p className="text-slate-400">{error}</p>
      </section>
    );
  }
  if (loading) {
    return (
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">Markets</h2>
        <p className="text-slate-400">Loading...</p>
      </section>
    );
  }
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-5 text-xl font-semibold">Markets</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-slate-400">
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((item, index) => (
            <CoinRow key={item.id} coin={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default MarketTable;
