import MarketStats from "../components/dashboard/MarketStats";
import MarketTable from "../components/dashboard/MarketTable";
import TrendingCoins from "../components/dashboard/TrendingCoins";

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <MarketStats />

      <TrendingCoins />

      <MarketTable />
    </div>
  );
}

export default Dashboard;
