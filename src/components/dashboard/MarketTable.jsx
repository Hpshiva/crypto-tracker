// function MarketTable() {
//   return (
//     <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
//       <h2 className="mb-5 text-xl font-semibold">Markets</h2>

//       <table className="w-full">
//         <thead>
//           <tr className="text-left text-slate-400">
//             <th>Coin</th>
//             <th>Price</th>
//             <th>24h</th>
//             <th>Market Cap</th>
//           </tr>
//         </thead>

//         {/* <tbody>coins</tbody> */}
//       </table>
//     </section>
//   );
// }

// export default MarketTable;

import axios from "axios";
import { useState, useEffect } from "react";
import coinGeckoApi from "../../api/coinGeckoApi";
import CoinRow from "./CoinRow";
function MarketTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    // axios
    async function fetchCoins() {
      try {
        const response = await coinGeckoApi.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 20,
            page: 1,
          },
        });
        setCoins(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();
  }, []);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-5 text-xl font-semibold">Markets</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-slate-400">
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>Market Cap</th>{" "}
          </tr>
        </thead>
        <tbody>
          {coins.map((item, index) => (
            <CoinRow key={index} coin={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default MarketTable;
