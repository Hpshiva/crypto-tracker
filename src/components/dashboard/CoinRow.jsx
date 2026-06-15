function CoinRow({ coin }) {
  return (
    <tr className="border-b border-slate-800">
      <td className="py-4">
        <div className="flex items-center gap-3">
          <img src={coin.image} alt={coin.name} className="h-8 w-8" />

          <span>{coin.name}</span>
        </div>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>

      <td>{coin.price_change_percentage_24h?.toFixed(2)}%</td>

      <td>${coin.market_cap.toLocaleString()}</td>
    </tr>
  );
}

export default CoinRow;
