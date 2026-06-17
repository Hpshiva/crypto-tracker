import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function CoinChart({ chart, chartWidth }) {
  const chartData =
    chart.prices?.map((item) => ({
      date: new Date(item[0]).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),

      price: item[1],
    })) || [];

  return (
    <div className="overflow-x-auto overflow-y-hidden custom-scrollbar">
      <LineChart width={chartWidth} height={300} data={chartData}>
        <XAxis dataKey="date" minTickGap={50} tick={{ fill: "#94a3b8" }} />

        <YAxis tick={{ fill: "#94a3b8" }} />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="price"
          stroke="#5ac1c3"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </div>
  );
}

export default CoinChart;
