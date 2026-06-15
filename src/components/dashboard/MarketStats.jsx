import axios from "axios";
import { useEffect, useState } from "react";
import coinGeckoApi from "../../api/coinGeckoApi";
import { formatBillions, formatTrillions } from "../../utils/formatters";

function MarketStats() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    async function fetchStats() {
      try {
        const response = await coinGeckoApi.get("/global");
        setStats(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

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
