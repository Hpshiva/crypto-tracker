function MarketStats() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Market Cap</p>
        <h3 className="mt-2 text-2xl font-bold">$0</h3>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">24h Volume</p>
        <h3 className="mt-2 text-2xl font-bold">$0</h3>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">BTC Dominance</p>
        <h3 className="mt-2 text-2xl font-bold">0%</h3>
      </div>
    </section>
  );
}

export default MarketStats;
