import React from "react";
import useCryptoData from "../../hooks/useCryptoData";

function CoinChat() {
  const {
    data: coinChart,
    loading,
    error,
  } = useCryptoData(
    `/coins/${id}/market_chart`,
    {
      vs_currency: "usd",
      days: 7,
    },
    (response) => response.data,
  );
  console.log(coinChart);
  return <div>CoinChat</div>;
}

export default CoinChat;
