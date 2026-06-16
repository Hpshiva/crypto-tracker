import { Link, useParams } from "react-router-dom";
import useCryptoData from "../hooks/useCryptoData";
import { formatBillions, formatTrillions } from "../utils/formatters";
function CoinDetails() {
  const { id } = useParams();
  const {
    data: coin,
    loading,
    error,
  } = useCryptoData(`/coins/${id}`, {}, (response) => response.data);

  if (loading) {
    return (
      <>
        <div className="mx-auto max-w-7xl space-y-6 p-6">
          <p>Loading...</p>
        </div>
      </>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <section className="min-h-screen bg-slate-950 p-6">
      <div className="mx-auto max-w-6xl">
        {/* Back */}

        <Link
          to="/"
          className="mb-8 inline-flex text-slate-400 hover:text-white"
        >
          ← Back to Dashboard
        </Link>

        {/* Header */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex items-center gap-5">
            {/* Logo */}

            <div className="h-20 w-20 rounded-full bg-slate-800">
              <img src={coin.image.large} className="cover  w-100" alt="" />
            </div>

            <div>
              <h1 className="text-5xl font-bold">{coin.name}</h1>

              <p className="mt-2 text-xl text-slate-400">{coin.symbol}</p>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Current Price</p>

            <h3 className="mt-3 text-3xl font-bold">
              ${coin.market_data.current_price.usd}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Market Cap</p>

            <h3 className="mt-3 text-3xl font-bold">
              ${formatTrillions(coin.market_data.market_cap.usd)}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">24h Change</p>

            <h3 className="mt-3 text-3xl font-bold">
              {coin.market_data.price_change_percentage_24h?.toFixed(2)}%
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Rank</p>

            <h3 className="mt-3 text-3xl font-bold">
              #{coin.market_data.market_cap_rank}
            </h3>
          </div>
        </div>

        {/* Extra Info */}

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">High 24h</p>

            <h3 className="mt-2 text-2xl font-bold">
              ${coin.market_data.high_24h.usd}
            </h3>

            <p className="mt-6 text-sm text-slate-400">Low 24h</p>

            <h3 className="mt-2 text-2xl font-bold">
              ${coin.market_data.low_24h.usd}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Supply</p>

            <h3 className="mt-2 text-2xl font-bold">
              {coin.market_data?.total_supply}
            </h3>

            <p className="mt-6 text-sm text-slate-400">Website</p>
            <Link target="_blank" to={coin.links.homepage[0]}>
              <h3 className="mt-2 text-2xl font-bold">
                {coin.links.homepage[0]}
              </h3>
            </Link>
          </div>
        </div>

        {/* Description */}

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-semibold">About</h2>

          <p className="text-slate-400">{coin.description.en}</p>
        </div>
      </div>
    </section>
  );
}

export default CoinDetails;
