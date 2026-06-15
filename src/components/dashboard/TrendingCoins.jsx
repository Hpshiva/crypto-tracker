import { useState, useEffect } from "react";
import coinGeckoApi from "../../api/coinGeckoApi";

function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    async function fetchTreadingCoins() {
      try {
        const response = await coinGeckoApi.get("/search/trending");
        setTrendingCoins(response.data.coins);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchTreadingCoins();
  }, []);
  if (loading) {
    return (
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">Trending Coins</h2>

        <p className="text-slate-400">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">Trending Coins</h2>

        <p className="text-red-400">{error}</p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-xl font-semibold">Trending Coins</h2>

      <table className="w-full">
        <thead>
          <tr className="text-left text-slate-400">
            <th>Rank</th>
            <th>Coin</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {trendingCoins.slice(0, 6).map((item) => {
            return (
              <tr key={item.item.id} className="border-b border-slate-800">
                <td>{item.item.market_cap_rank}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.item.small}
                      alt={item.item.name}
                      className="h-8 w-8"
                    />
                    <span>{item.item.name}</span>
                  </div>
                </td>

                <td>{item.item.symbol}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
export default TrendingCoins;
