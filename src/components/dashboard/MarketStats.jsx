import coinGeckoApi from "../../api/coinGeckoApi";
import { formatBillions, formatTrillions } from "../../utils/formatters";
import useCryptoData from "../../hooks/useCryptoData";
import Loading from "../shared/Loading";
function MarketStats() {
  const {
    data: stats,
    loading,
    error,
  } = useCryptoData("/global", {}, (response) => response.data.data);

  if (loading) {
    return (
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Market Cap</p>
          <h3 className="mt-2 text-2xl font-bold">Loading...</h3>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">24h Volume</p>
          <h3 className="mt-2 text-2xl font-bold">Loading...</h3>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">BTC Dominance</p>
          <h3 className="mt-2 text-2xl font-bold">Loading...</h3>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Market Cap</p>
          <h3 className="mt-2 text-2xl font-bold">{error}</h3>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">24h Volume</p>
          <h3 className="mt-2 text-2xl font-bold">{error}</h3>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">BTC Dominance</p>
          <h3 className="mt-2 text-2xl font-bold">{error}</h3>
        </div>
      </section>
    );
  }
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Market Cap</p>
        <h3 className="mt-2 text-2xl font-bold">
          ${formatTrillions(stats.total_market_cap?.usd)}
        </h3>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">24h Volume</p>
        <h3 className="mt-2 text-2xl font-bold">
          ${formatBillions(stats.total_volume?.usd)}
        </h3>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">BTC Dominance</p>
        <h3 className="mt-2 text-2xl font-bold">
          {stats.market_cap_percentage?.btc.toFixed(2)}%
        </h3>
      </div>
    </section>
  );
}

export default MarketStats;
